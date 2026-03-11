import { QUIZ_BANKS } from "./banks/index.js";
let quiz = [];
let idx = 0;
let score = 0;
let streak = 0;
let autoAdvanceTimer = null;
let questionTimer = null;
let secondsLeft = 0;
let draggedId = null;
let missedQuestions = [];

const syndromeLabels = {
  bronquitico: "Síndrome bronquítico",
  condensacion: "Síndrome de condensación con bronquio permeable",
  atelectasico: "Síndrome atelectásico",
  derrame_pleural: "Síndrome de derrame pleural",
  neumotorax: "Síndrome del neumotórax"
};

const slotLabels = {
  dato_clinico: "Dato clínico",
  ventilacion: "Ventilación",
  tos: "Tos",
  vibraciones_vocales: "Vibraciones vocales",
  percusion: "Percusión",
  auscultacion: "Auscultación"
};

const elImgWrap = document.getElementById("imgWrap");
const elImgs = document.getElementById("qImgs");
const elOpen = document.getElementById("openImg");
const elImgTip = document.getElementById("imgTip");
const elCaseWrap = document.getElementById("caseWrap");
const elCaseText = document.getElementById("caseText");
const elNum = document.getElementById("qNum");
const elTotal = document.getElementById("qTotal");
const elScore = document.getElementById("score");
const elStreak = document.getElementById("streak");
const elPrompt = document.getElementById("qPrompt");
const elChoices = document.getElementById("choices");
const elFeedback = document.getElementById("feedback");
const elPartPill = document.getElementById("partPill");
const elPartNum = document.getElementById("partNum");
const elPartTotal = document.getElementById("partTotal");

const quizRow = document.getElementById("quizRow");
const questionHintControls = document.getElementById("questionHintControls");
const questionHintBtn = document.getElementById("questionHintBtn");
const questionHintWrap = document.getElementById("questionHintWrap");

const elMatchQuestionWrap = document.getElementById("matchQuestionWrap");
const checkMatchBtn = document.getElementById("checkMatchBtn");
const resetMatchBtn = document.getElementById("resetMatchBtn");
const matchBank = document.getElementById("matchBank");
const matchGrid = document.getElementById("matchGrid");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const resetBtn = document.getElementById("resetBtn");

const resultsScreen = document.getElementById("resultsScreen");
const quizCard = document.getElementById("quizCard");
const finalScoreText = document.getElementById("finalScoreText");
const retryMissedBtn = document.getElementById("retryMissedBtn");
const restartQuizBtn = document.getElementById("restartQuizBtn");

const elTimerStat = document.getElementById("timerStat");
const elTimerValue = document.getElementById("timerValue");

const pageParams = new URLSearchParams(window.location.search);
const requestedUnit = pageParams.get("unit");
const defaultUnit = "parenquimatosos";
const BANK = QUIZ_BANKS[requestedUnit] || QUIZ_BANKS[defaultUnit];

const isTestMode = pageParams.get("mode") === "test";
const testConfig = readTestConfig();

function readTestConfig() {
  try {
    const raw = sessionStorage.getItem("respiratorioTestConfig");
    if (!raw) return null;

    const parsed = JSON.parse(raw);

    return {
      source: parsed.source || "",
      mode: ["todas", "casos", "normales"].includes(parsed.mode) ? parsed.mode : "todas",
      units: Array.isArray(parsed.units) ? parsed.units : [],
      questionCount: parsed.questionCount === "all" ? "all" : Math.max(1, Number(parsed.questionCount) || 10),
      secondsPerQuestion: Math.max(1, Number(parsed.secondsPerQuestion) || 60),
      timed: Boolean(parsed.timed)
    };
  } catch (error) {
    return null;
  }
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function shuffleCopy(arr) {
  return shuffle(arr);
}

function normalizeEntry(entry) {
  if (entry.type === "matching") {
    return [{
      id: entry.id,
      groupId: entry.id,
      type: "matching",
      part: 1,
      partTotal: 1,
      img: entry.img || "",
      imgs: entry.imgs || [],
      alt: entry.alt || entry.id,
      caseText: entry.case || "",
      prompt: entry.prompt,
      matchItems: entry.matchItems ? entry.matchItems.slice() : [],
      matchBoard: entry.matchBoard ? JSON.parse(JSON.stringify(entry.matchBoard)) : [],
      why: entry.why || ""
    }];
  }

  if (Array.isArray(entry.questions)) {
    return entry.questions.map((sub, i) => ({
      id: entry.id + "::" + (i + 1),
      groupId: entry.id,
      type: "multiple",
      part: i + 1,
      partTotal: entry.questions.length,
      img: entry.img || "",
      imgs: entry.imgs || [],
      alt: entry.alt || entry.id,
      caseText: entry.case || "",
      prompt: sub.prompt,
      options: sub.options.slice(),
      answer: sub.answer,
      why: sub.why
    }));
  }

  return [{
    id: entry.id,
    groupId: entry.id,
    type: "multiple",
    part: 1,
    partTotal: 1,
    img: entry.img || "",
    imgs: entry.imgs || [],
    alt: entry.alt || entry.id,
    caseText: entry.case || "",
    prompt: entry.prompt,
    options: entry.options.slice(),
    answer: entry.answer,
    why: entry.why
  }];
}
function renderMatchBoard(q) {
  matchGrid.innerHTML = "";

  if (!q || q.type !== "matching" || !Array.isArray(q.matchBoard)) return;

  q.matchBoard.forEach(card => {
    const cardEl = document.createElement("div");
    cardEl.className = "syndromeCard";

    const titleEl = document.createElement("div");
    titleEl.className = "syndromeTitle";
    titleEl.textContent = card.title;
    cardEl.appendChild(titleEl);

    card.rows.forEach(row => {
      const rowEl = document.createElement("div");
      rowEl.className = "dropRow";

      const labelEl = document.createElement("div");
      labelEl.className = "dropLabel";

      if (row.subLabel) {
        labelEl.innerHTML = escapeHtml(row.label) + "<br><span>" + escapeHtml(row.subLabel) + "</span>";
      } else {
        labelEl.textContent = row.label;
      }

      const zoneEl = document.createElement("div");
      zoneEl.className = "dropZone";
      zoneEl.dataset.syndrome = card.syndrome;
      zoneEl.dataset.slot = row.slot;

      rowEl.appendChild(labelEl);
      rowEl.appendChild(zoneEl);
      cardEl.appendChild(rowEl);
    });

    matchGrid.appendChild(cardEl);
  });
}
function buildQuiz(sourceBank = BANK, shuffleGroups = true) {
  const groups = shuffleGroups ? shuffle(sourceBank) : sourceBank.slice();
  return groups.flatMap(normalizeEntry);
}

function resequenceSelectedQuizItems(items) {
  const groupCounts = {};
  const groupSeen = {};

  items.forEach(item => {
    groupCounts[item.groupId] = (groupCounts[item.groupId] || 0) + 1;
  });

  return items.map(item => {
    if (item.type !== "multiple") {
      return item;
    }

    groupSeen[item.groupId] = (groupSeen[item.groupId] || 0) + 1;

    return {
      ...item,
      part: groupSeen[item.groupId],
      partTotal: groupCounts[item.groupId]
    };
  });
}

function entryMatchesSelectedUnits(entry, units) {
  if (!Array.isArray(units) || units.length === 0) return true;

  return units.includes("parenquimatosos");
}

function isCaseEntry(entry) {
  return Array.isArray(entry.questions);
}

function isNormalEntry(entry) {
  return !Array.isArray(entry.questions);
}

function filterBankForTest(sourceBank, config) {
  let filtered = sourceBank.filter(entry => entryMatchesSelectedUnits(entry, config.units));

  if (config.mode === "casos") {
    filtered = filtered.filter(isCaseEntry);
  } else if (config.mode === "normales") {
    filtered = filtered.filter(isNormalEntry);
  }

  return filtered;
}

function buildTestQuiz(config) {
  const filteredBank = filterBankForTest(BANK, config);
  const normalized = buildQuiz(filteredBank, true);

  if (config.questionCount === "all") {
    return normalized;
  }

  const count = Math.max(1, Number(config.questionCount) || 10);
  return resequenceSelectedQuizItems(normalized.slice(0, count));
}

function clearQuestionTimer() {
  clearInterval(questionTimer);
  questionTimer = null;
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function updateTimerUI() {
  if (elTimerValue) {
    elTimerValue.textContent = formatTime(secondsLeft);
  }
}

function handleTimeExpired() {
  const q = quiz[idx];
  if (!q) return;

  streak = 0;

  if (!missedQuestions.some(item => item.id === q.id)) {
    missedQuestions.push(q);
  }

  if (q.type === "matching") {
    elFeedback.className = "feedback no";
    elFeedback.innerHTML = "<b>Tiempo agotado.</b><div class='explain'>No se registró respuesta para esta correlación.</div>";
    elFeedback.style.display = "block";
    elStreak.textContent = String(streak);

    if (idx < quiz.length - 1) {
      setTimeout(() => {
        idx += 1;
        render();
      }, 1000);
    } else {
      setTimeout(() => {
        showResults();
      }, 1000);
    }

    return;
  }

  const buttons = Array.from(document.querySelectorAll("button.choice"));
  buttons.forEach(b => {
    b.disabled = true;
    if (b.textContent === q.answer) {
      b.classList.add("correct");
    }
  });

  elFeedback.className = "feedback no";
  elFeedback.innerHTML = "<b>Tiempo agotado.</b> Respuesta correcta: <b>" + escapeHtml(q.answer) + "</b><div class='explain'>" + escapeHtml(q.why) + "</div>";
  elFeedback.style.display = "block";
  elStreak.textContent = String(streak);

  if (idx < quiz.length - 1) {
    setTimeout(() => {
      idx += 1;
      render();
    }, 1200);
  } else {
    setTimeout(() => {
      showResults();
    }, 1200);
  }
}

function beginQuestionTimer() {
  clearQuestionTimer();

  if (!isTestMode || !testConfig || !testConfig.timed) return;

  secondsLeft = testConfig.secondsPerQuestion;
  updateTimerUI();

  questionTimer = setInterval(() => {
    secondsLeft -= 1;
    updateTimerUI();

    if (secondsLeft <= 0) {
      clearQuestionTimer();
      handleTimeExpired();
    }
  }, 1000);
}

function start(sourceBank = BANK, shuffleGroups = true) {
  clearTimeout(autoAdvanceTimer);
  clearQuestionTimer();

  quiz = buildQuiz(sourceBank, shuffleGroups);
  idx = 0;
  score = 0;
  streak = 0;
  missedQuestions = [];
  resultsScreen.style.display = "none";
  quizCard.style.display = "block";
  render();
}

function startTest(config) {
  clearTimeout(autoAdvanceTimer);
  clearQuestionTimer();

  quiz = buildTestQuiz(config);
  idx = 0;
  score = 0;
  streak = 0;
  missedQuestions = [];
  resultsScreen.style.display = "none";
  quizCard.style.display = "block";

  if (quiz.length === 0) {
    alert("No hay preguntas disponibles con esa configuración.");
    window.location.href = "test.html";
    return;
  }

  render();
}

function getDropZones() {
  return Array.from(document.querySelectorAll(".dropZone"));
}

function createMatchChip(item) {
  const chip = document.createElement("div");
  chip.className = "draggableItem";
  chip.draggable = true;
  chip.textContent = item.text;
  chip.dataset.id = item.id;

  chip.addEventListener("dragstart", (e) => {
    draggedId = item.id;
    chip.classList.add("dragging");

    if (e.dataTransfer) {
      e.dataTransfer.setData("text/plain", item.id);
      e.dataTransfer.effectAllowed = "move";
    }
  });

  chip.addEventListener("dragend", () => {
    draggedId = null;
    chip.classList.remove("dragging");
  });

  return chip;
}

function resetMatchQuestion(q) {
  if (!q || q.type !== "matching") return;

  matchBank.innerHTML = "";

  getDropZones().forEach(zone => {
    zone.innerHTML = "";
    zone.classList.remove("filled", "correct", "wrong");
  });

  shuffleCopy(q.matchItems).forEach(item => {
    matchBank.appendChild(createMatchChip(item));
  });
}

function normalizeMatchText(text) {
  return String(text)
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function checkMatchQuestion(q) {
  if (!q || q.type !== "matching") return;

  clearQuestionTimer();

  let correctCount = 0;

  getDropZones().forEach(zone => {
    zone.classList.remove("correct", "wrong");

    const expectedIds = q.matchItems
      .filter(item =>
        item.syndrome === zone.dataset.syndrome &&
        item.slot === zone.dataset.slot
      )
      .map(item => item.id)
      .sort();

    if (expectedIds.length === 0) {
      zone.classList.remove("filled", "correct", "wrong");
      return;
    }

    const actualIds = Array.from(zone.querySelectorAll(".draggableItem"))
      .map(item => item.dataset.id)
      .sort();

    const ok =
      actualIds.length === expectedIds.length &&
      actualIds.every((id, i) => id === expectedIds[i]);

    if (ok) {
      zone.classList.add("correct");
      correctCount += actualIds.length;
    } else {
      zone.classList.add("wrong");
    }

    zone.classList.toggle("filled", actualIds.length > 0);
  });

  const allCorrect =
    correctCount === q.matchItems.length &&
    matchBank.querySelectorAll(".draggableItem").length === 0;

  if (allCorrect) {
    score += 1;
    streak += 1;
    elFeedback.className = "feedback ok";
    elFeedback.innerHTML = "<b>Correcto.</b><div class='explain'>" + escapeHtml(q.why) + "</div>";
  } else {
    if (!missedQuestions.some(item => item.id === q.id)) {
      missedQuestions.push(q);
    }
    streak = 0;
    elFeedback.className = "feedback no";
    elFeedback.innerHTML =
      "<b>Resultado:</b> " +
      correctCount +
      " de " +
      q.matchItems.length +
      " correctas.<div class='explain'>" +
      escapeHtml(q.why) +
      "</div>";
  }

  elFeedback.style.display = "block";
  elScore.textContent = String(score);
  elStreak.textContent = String(streak);
}
function attachMatchDropEvents() {
  matchGrid.addEventListener("dragover", e => {
    const zone = e.target.closest(".dropZone");
    if (zone) {
      e.preventDefault();
    }
  });

  matchGrid.addEventListener("drop", e => {
    const zone = e.target.closest(".dropZone");
    if (!zone) return;

    e.preventDefault();

    const idFromTransfer = e.dataTransfer?.getData("text/plain");
    const activeId = idFromTransfer || draggedId;
    if (!activeId) return;

    const draggedEl = document.querySelector(`.draggableItem[data-id="${activeId}"]`);
    if (!draggedEl) return;

    const oldParent = draggedEl.parentElement;

    zone.appendChild(draggedEl);
    zone.classList.add("filled");
    zone.classList.remove("correct", "wrong");

    if (oldParent && oldParent.classList.contains("dropZone") && oldParent !== zone) {
      oldParent.classList.toggle(
        "filled",
        oldParent.querySelectorAll(".draggableItem").length > 0
      );
      oldParent.classList.remove("correct", "wrong");
    }
  });

  matchBank.addEventListener("dragover", e => {
    e.preventDefault();
  });

  matchBank.addEventListener("drop", e => {
    e.preventDefault();

    const idFromTransfer = e.dataTransfer?.getData("text/plain");
    const activeId = idFromTransfer || draggedId;
    if (!activeId) return;

    const draggedEl = document.querySelector(`.draggableItem[data-id="${activeId}"]`);
    if (!draggedEl) return;

    const oldParent = draggedEl.parentElement;
    matchBank.appendChild(draggedEl);

    if (oldParent && oldParent.classList.contains("dropZone")) {
      oldParent.classList.toggle(
        "filled",
        oldParent.querySelectorAll(".draggableItem").length > 0
      );
      oldParent.classList.remove("correct", "wrong");
    }
  });
}

function shouldShowSemiologyHint(q) {
  return q.id === "Atelectasia masiva por tapón mucoso::2";
}

function render() {
  clearTimeout(autoAdvanceTimer);
  clearQuestionTimer();

  const q = quiz[idx];
  if (!q) {
    showResults();
    return;
  }

  elNum.textContent = String(idx + 1);
  elTotal.textContent = String(quiz.length);
  elScore.textContent = String(score);
  elStreak.textContent = String(streak);
  elPrompt.textContent = q.prompt;

  const hasImages = Boolean((q.imgs && q.imgs.length) || q.img);
  const hasCase = Boolean(q.caseText);
  const isTextOnly = !hasImages && !hasCase;

  questionHintWrap.style.display = "none";
  questionHintBtn.textContent = "Pista";

  if (hasImages) {
    elImgWrap.style.display = "block";
    elImgTip.style.display = "block";
    elImgs.innerHTML = "";

    const imageList = (q.imgs && q.imgs.length) ? q.imgs : [q.img];
    elImgs.className = imageList.length === 2 ? "twoImages" : "";

    imageList.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = q.alt || "Imagen de la pregunta";
      elImgs.appendChild(img);
    });

    elOpen.href = imageList[0];
  } else {
    elImgWrap.style.display = "none";
    elImgTip.style.display = "none";
    elImgs.innerHTML = "";
  }

  if (hasCase) {
    elCaseWrap.style.display = "block";
    elCaseText.textContent = q.caseText;
  } else {
    elCaseWrap.style.display = "none";
    elCaseText.textContent = "";
  }

  if (q.partTotal > 1) {
    elPartPill.style.display = "inline-flex";
    elPartNum.textContent = String(q.part);
    elPartTotal.textContent = String(q.partTotal);
  } else {
    elPartPill.style.display = "none";
  }

  elFeedback.style.display = "none";
  elFeedback.className = "feedback";
  elFeedback.innerHTML = "";

  if (q.type === "matching") {
  quizRow.classList.add("matchingMode");
  quizRow.classList.remove("textOnlyMode");

  questionHintControls.style.display = "none";
  elChoices.style.display = "none";
  elChoices.innerHTML = "";
  elMatchQuestionWrap.style.display = "block";

  renderMatchBoard(q);
  resetMatchQuestion(q);
} else {
    quizRow.classList.remove("matchingMode");

    if (isTextOnly) {
      quizRow.classList.add("textOnlyMode");
    } else {
      quizRow.classList.remove("textOnlyMode");
    }

    elMatchQuestionWrap.style.display = "none";
    questionHintControls.style.display = isTestMode ? "none" : (shouldShowSemiologyHint(q) ? "flex" : "none");
    elChoices.style.display = "grid";

    const opts = shuffle(q.options);
    elChoices.innerHTML = "";

    opts.forEach(opt => {
      const b = document.createElement("button");
      b.className = "choice";
      b.type = "button";
      b.textContent = opt;
      b.addEventListener("click", () => onPick(opt, q));
      elChoices.appendChild(b);
    });
  }

if (isTestMode) {
  prevBtn.style.display = "none";
  shuffleBtn.style.display = "none";
  resetBtn.style.display = "none";

  if (elTimerStat) {
    elTimerStat.style.display = (testConfig && testConfig.timed) ? "block" : "none";
  }
} else {
  prevBtn.style.display = "";
  shuffleBtn.style.display = "";
  resetBtn.style.display = "";

  if (elTimerStat) {
    elTimerStat.style.display = "none";
  }
}

  prevBtn.disabled = (idx === 0);
  nextBtn.textContent = (idx === quiz.length - 1) ? "Finalizar" : "Siguiente ▶";

  if (isTestMode && testConfig && testConfig.timed) {
    beginQuestionTimer();
  }
}

function onPick(opt, q) {
  clearQuestionTimer();

  const buttons = Array.from(document.querySelectorAll("button.choice"));
  buttons.forEach(b => b.disabled = true);

  const correct = (opt === q.answer);

  buttons.forEach(b => {
    if (b.textContent === q.answer) b.classList.add("correct");
    if (b.textContent === opt && !correct) b.classList.add("wrong");
  });

  if (correct) {
    score += 1;
    streak += 1;
    elFeedback.className = "feedback ok";
    elFeedback.innerHTML = "<b>Correcto.</b><div class='explain'>" + escapeHtml(q.why) + "</div>";
  } else {
    if (!missedQuestions.some(item => item.id === q.id)) {
      missedQuestions.push(q);
    }
    streak = 0;
    elFeedback.className = "feedback no";
    elFeedback.innerHTML = "<b>No es correcto.</b> Respuesta correcta: <b>" + escapeHtml(q.answer) + "</b><div class='explain'>" + escapeHtml(q.why) + "</div>";
  }

  elFeedback.style.display = "block";
  elScore.textContent = String(score);
  elStreak.textContent = String(streak);

  const nextQuestion = quiz[idx + 1];
  const isLinkedNext = correct && nextQuestion && nextQuestion.groupId === q.groupId && !isTestMode;

  if (isLinkedNext) {
    autoAdvanceTimer = setTimeout(() => {
      idx += 1;
      render();
    }, 900);
  }
}

function showResults() {
  clearQuestionTimer();

  quizCard.style.display = "none";
  resultsScreen.style.display = "block";

  const total = quiz.length;
  const percent = total > 0 ? Math.round((score / total) * 100) : 0;
  finalScoreText.textContent = `Obtuviste ${score} de ${total} correctas (${percent}%). Incorrectas: ${missedQuestions.length}.`;

  retryMissedBtn.disabled = missedQuestions.length === 0;
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

prevBtn.addEventListener("click", () => {
  if (idx > 0) {
    idx -= 1;
    render();
  }
});

nextBtn.addEventListener("click", () => {
  clearQuestionTimer();

  if (idx < quiz.length - 1) {
    idx += 1;
    render();
  } else {
    showResults();
  }
});

shuffleBtn.addEventListener("click", () => start(BANK, true));

resetBtn.addEventListener("click", () => {
  clearQuestionTimer();
  score = 0;
  streak = 0;
  missedQuestions = [];
  render();
});

questionHintBtn.addEventListener("click", () => {
  if (questionHintWrap.style.display === "none") {
    questionHintWrap.style.display = "block";
    questionHintBtn.textContent = "Ocultar pista";
  } else {
    questionHintWrap.style.display = "none";
    questionHintBtn.textContent = "Pista";
  }
});

checkMatchBtn.addEventListener("click", () => {
  const q = quiz[idx];
  checkMatchQuestion(q);
});

resetMatchBtn.addEventListener("click", () => {
  const q = quiz[idx];
  resetMatchQuestion(q);

  if (isTestMode && testConfig && testConfig.timed) {
    beginQuestionTimer();
  }
});

restartQuizBtn.addEventListener("click", () => {
  if (isTestMode && testConfig) {
    startTest(testConfig);
  } else {
    start(BANK, true);
  }
});

retryMissedBtn.addEventListener("click", () => {
  if (missedQuestions.length === 0) return;
  start(missedQuestions, true);
});

attachMatchDropEvents();

if (isTestMode && testConfig) {
  startTest(testConfig);
} else {
  start(BANK, true);
}