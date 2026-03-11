export const BANK_PARENQUIMATOSOS = [
  {
    id: "Síndrome de condensación",
    unit: "parenquimatosos",
    img: "images/Fig. 42-2-1.png",
    alt: "Imágenes de síndrome de condensación",
    prompt: "Identifica el signo radiográfico característico del síndrome de condensación pulmonar.",
    options: ["Broncograma aéreo", "Signo de la silueta", "Signo del menisco pleural", "Pérdida de volumen con desplazamiento de cisuras"],
    answer: "Broncograma aéreo",
    why: "La ocupación del espacio aéreo distal se visualiza como un infiltrado homogéneo que se interrumpe por líneas oscuras en su interior, correspondientes a estructuras bronquiales aireadas."
  },
  {
    id: "Neumonía Atípica",
    unit: "parenquimatosos",
    img: "images/Fig. 42-2-2.png",
    alt: "Neumonía atípica",
    prompt: "Identifica el signo radiográfico característico de la neumonía atípica.",
    options: ["Consolidación lobar", "Patrón reticular", "Vidrio esmerilado", "Derrame pleural"],
    answer: "Vidrio esmerilado",
    why: "Opacidades en vidrio esmerilado de distribución subpleural tanto en los lóbulos superiores como en los inferiores. Estos hallazgos sugieren un proceso infeccioso viral característico de la enfermedad COVID-19 leve a moderada."
  },
  {
    id: "Neumonía Atípica Severa",
    unit: "parenquimatosos",
    img: "images/Fig. 42-2-3.png",
    alt: "Neumonía atípica severa",
    prompt: "Identifica el signo radiográfico característico de la neumonía atípica.",
    options: ["Consolidación lobar", "Patrón reticular", "Vidrio esmerilado", "Derrame pleural"],
    answer: "Vidrio esmerilado",
    why: "Aumento de la densidad en vidrio esmerilado de distribución subpleural bilateral, con predominio de afectación en ambos lóbulos inferiores, donde se observa tendencia a la consolidación. Los hallazgos sugieren en primer término un proceso infeccioso de origen viral con compromiso pulmonar severo."
  },
  {
    id: "Atelectasia",
    unit: "parenquimatosos",
    img: "images/Fig. 42-2-4.png",
    alt: "Atelectasia pasiva",
    prompt: "¿Qué tipo de atelectasia es?",
    options: ["Atelectasia pasiva", "Atelectasia obstructiva", "Atelectasia cicatrizal", "Atelectasia adhesiva"],
    answer: "Atelectasia pasiva",
    why: "Tomografía computarizada de tórax en ventana mediastínica. La flecha blanca señala un derrame pleural. La flecha negra señala atelectasia pasiva del parénquima pulmonar adyacente al derrame."
  },
  {
    id: "Tumores Pulmonares",
    unit: "parenquimatosos",
    img: "images/Fig. 42-2-5.png",
    alt: "Metástasis pulmonares",
    prompt: "¿Qué patrón radiológico identifica y con qué tipo de cáncer se asocia?",
    options: ["Nódulo pulmonar solitario", "Linfangitis carcinomatosa", "Metástasis pulmonares", "Tumor de Pancoast"],
    answer: "Metástasis pulmonares",
    why: "Radiografía de tórax de frente con imágenes nodulares en \"suelta de globos\", secundarias a metástasis de adenocarcinoma gástrico en una mujer de 57 años."
  },
  {
    id: "SDRA COVID-19",
    unit: "parenquimatosos",
    case: "Douglas, de 30 años y obeso, es de nacionalidad venezolana y vive en la Argentina desde hace 3 años con su esposa y tres hijos en un departamento de dos ambientes. Tiene estudios universitarios completos (periodista), pero trabaja como taxista. Comenzó su enfermedad actual el 15 de marzo de 2020 con un síndrome febril con hipertermia de 39 °C y tos seca. A las 48 horas agregó mialgias intensas y a los 5 días del inicio de los síntomas dificultad respiratoria, por lo que consultó en un servicio de urgencias. En el examen físico se encontraba febril, taquicárdico, taquipneico y con una saturación del 84% en la oximetría de pulso. Se auscultaban crepitantes bibasales aislados. La radiografía de tórax mostró infiltrados pulmonares bilaterales de los vértices a las bases. Se solicitaron gases en sangre arterial respirando aire ambiente: pH 7,48; PCO2 27 mmHg; PO2 54 mmHg; HCO3 24 mEq/L; saturación de O2 85%.",
    questions: [
      {
        prompt: "¿Cuál es el diagnóstico presuntivo?",
        options: ["SDRA", "Neumonía bacteriana típica", "Tromboembolismo pulmonar", "Tuberculosis pulmonar"],
        answer: "SDRA",
        why: "Se trata de un paciente joven obeso con fiebre, tos seca, mialgias, dificultad respiratoria, hipoxemia e infiltrados pulmonares bilaterales. El diagnóstico sindrómico presuntivo es síndrome de distrés respiratorio agudo."
      },
      {
        prompt: "¿Cómo lo confirmaría?",
        options: ["Gasometría arterial", "Hemocultivos", "Angiotomografía de tórax", "Baciloscopía seriada de esputo"],
        answer: "Gasometría arterial",
        why: "La gasometría arterial permite definir insuficiencia respiratoria y valorar la gravedad del compromiso respiratorio."
      }
    ]
  },
  {
    id: "Atelectasia masiva por tapón mucoso",
    unit: "parenquimatosos",
    case: "Vitalis, de 50 años, se encuentra internado en la sala de clínica médica por una neumonía aspirativa. Al cuarto día de internación presenta dificultad respiratoria. En el examen físico se constata FC 130 lat/min, TA 110/80 mmHg, FR 36/min, temperatura axilar 37 °C y SaO2 76% con fracción inspirada de oxígeno del 24%. El examen del aparato respiratorio revela utilización de los músculos accesorios y, en el hemitórax derecho, menor expansión y ausencia del murmullo vesicular. En dicha región, las vibraciones vocales están abolidas y la percusión es mate con columna sonora.",
    questions: [
      {
        prompt: "¿Cuál es su diagnóstico presuntivo?",
        options: [
          "Atelectasia masiva derecha",
          "Derrame pleural derecho",
          "Neumotórax derecho",
          "Edema agudo de pulmón"
        ],
        answer: "Atelectasia masiva derecha",
        why: "Los hallazgos del examen físico sugieren fuertemente un síndrome de condensación secundario a una atelectasia masiva."
      },
      {
        prompt: "¿Qué datos son de valor para el diagnóstico diferencial?",
        options: [
          "En el derrame pleural la percusión de la columna es mate, se encuentra el signo del desnivel y se puede auscultar un soplo pleurítico",
          "La fiebre, la taquicardia y la hipoxemia",
          "La presencia de tiraje y uso de músculos accesorios",
          "La neumonía aspirativa previa y la internación prolongada"
        ],
        answer: "En el derrame pleural la percusión de la columna es mate, se encuentra el signo del desnivel y se puede auscultar un soplo pleurítico",
        why: "Esos datos ayudan a diferenciar atelectasia de derrame pleural."
      },
      {
        prompt: "¿Cómo lo confirmaría?",
        options: [
          "Radiografía de tórax de frente",
          "Gasometría arterial",
          "Ecografía pleural",
          "Tomografía computada con contraste"
        ],
        answer: "Radiografía de tórax de frente",
        why: "La radiografía de tórax de frente mostró una opacidad completa del hemitórax derecho con desplazamiento de las estructuras mediastínicas en forma homolateral, lo que confirmó el diagnóstico de atelectasia."
      }
    ]
  },
  {
    id: "Semiología comparativa de síndromes respiratorios",
    unit: "parenquimatosos",
    type: "matching",
    prompt: "Arrastre cada hallazgo al síndrome respiratorio correspondiente.",
    matchItems: [
      { id: "m1", text: "Patrón restrictivo: taquipnea con hipopnea", syndrome: "neumonia", slot: "inspeccion" },
      { id: "m2", text: "Patrón restrictivo: taquipnea con hipopnea", syndrome: "atelectasia", slot: "inspeccion" },
      { id: "m3", text: "Patrón restrictivo: taquipnea con hipopnea", syndrome: "derrame", slot: "inspeccion" },

      { id: "m4", text: "Aumentadas", syndrome: "neumonia", slot: "palpacion" },
      { id: "m5", text: "Abolidas", syndrome: "atelectasia", slot: "palpacion" },
      { id: "m6", text: "Disminuidas o abolidas", syndrome: "derrame", slot: "palpacion" },

      { id: "m7", text: "Mate", syndrome: "neumonia", slot: "percusion_pulmonar" },
      { id: "m8", text: "Mate", syndrome: "atelectasia", slot: "percusion_pulmonar" },
      { id: "m9", text: "Mate", syndrome: "derrame", slot: "percusion_pulmonar" },

      { id: "m10", text: "Sonora", syndrome: "neumonia", slot: "percusion_columna" },
      { id: "m11", text: "Sonora", syndrome: "atelectasia", slot: "percusion_columna" },
      { id: "m12", text: "Mate", syndrome: "derrame", slot: "percusion_columna" },

      { id: "m13", text: "Estertores crepitantes y soplo tubario o brónquico según la etapa", syndrome: "neumonia", slot: "auscultacion" },
      { id: "m14", text: "Silencio respiratorio", syndrome: "atelectasia", slot: "auscultacion" },
      { id: "m15", text: "Abolición del murmullo vesicular / Soplo en “E” en el límite superior del derrame", syndrome: "derrame", slot: "auscultacion" }
    ],
    why: "La condensación con bronquio permeable aumenta las vibraciones vocales y puede dar soplo tubario; la atelectasia obstructiva abole vibraciones vocales y murmullo vesicular; el derrame pleural disminuye o abole vibraciones vocales y muestra matidez pulmonar y también en la columna."
  },
  {
    id: "Etapas evolutivas",
    unit: "parenquimatosos",
    imgs: [
      "images/Vidrio Esmerilado.png",
      "images/Panal de Abejas.png"
    ],
    alt: "Patrón en vidrio esmerilado y panal de abejas",
    prompt: "¿Cuál es el orden correcto de las etapas evolutivas en el síndrome intersticial?",
    options: [
      "Agente causal o estímulo inductor → Inflamación (alveolitis) → Lesión epitelial-endotelial → Fibrosis (reparación cicatrizal) → Colapso alveolar",
      "Agente causal o estímulo inductor → Inflamación (alveolitis) → Lesión epitelial-endotelial → Colapso alveolar → Fibrosis (reparación cicatrizal)",
      "Agente causal o estímulo inductor → Lesión epitelial-endotelial → Inflamación (alveolitis) → Fibrosis (reparación cicatrizal) → Colapso alveolar",
      "Agente causal o estímulo inductor → Inflamación (alveolitis) → Fibrosis (reparación cicatrizal) → Lesión epitelial-endotelial → Colapso alveolar"
    ],
    answer: "Agente causal o estímulo inductor → Inflamación (alveolitis) → Lesión epitelial-endotelial → Fibrosis (reparación cicatrizal) → Colapso alveolar",
    why: "El orden correcto de las etapas evolutivas es: agente causal o estímulo inductor, inflamación (alveolitis), lesión epitelial-endotelial, fibrosis (reparación cicatrizal) y colapso alveolar."
  },
  {
    id: "Definición de síndrome de condensación",
    unit: "parenquimatosos",
    prompt: "¿Cuál es la definición de síndrome de condensación?",
    options: [
      "Compromiso del espacio aéreo por ocupación alveolar",
      "Disminución del volumen pulmonar total o parcial por pérdida del aire",
      "Acumulación de líquido en el espacio pleural con colapso pulmonar secundario",
      "Engrosamiento intersticial difuso con destrucción de la arquitectura alveolar"
    ],
    answer: "Compromiso del espacio aéreo por ocupación alveolar",
    why: "Transformación del parénquima pulmonar en una contextura densa y compacta, privada total o parcialmente de su contenido gaseoso (ocupación alveolar). Sus principales causas son la neumonía, la atelectasia, los tumores y el infarto de pulmón."
  },
  {
    id: "Definición de neumonía",
    unit: "parenquimatosos",
    prompt: "¿Cuál es la definición de neumonía?",
    options: [
      "Inflamación del parénquima pulmonar (exudado alveolar) debida a la llegada de un microorganismo",
      "Compromiso del intersticio pulmonar por reacción fibroinflamatoria estéril",
      "Obstrucción bronquial con atrapamiento aéreo distal y destrucción alveolar",
      "Disminución del volumen pulmonar por compresión pleural del parénquima"
    ],
    answer: "Inflamación del parénquima pulmonar (exudado alveolar) debida a la llegada de un microorganismo",
    why: ""
  },
  {
    id: "Expresión clínica de neumonía",
    unit: "parenquimatosos",
    prompt: "¿Cómo se expresa la manifestación clínica de la neumonía?",
    options: [
      "Fiebre y tos, con expectoración o no, asociadas a un infiltrado nuevo en la radiografía de tórax o en la tomografía computarizada",
      "Tos seca crónica, pérdida de peso y hemoptisis, asociadas a cavitación apical en la radiografía de tórax",
      "Disnea súbita, dolor pleurítico e hipersonoridad, asociadas a hiperclaridad unilateral en la radiografía de tórax",
      "Sibilancias episódicas, opresión torácica y tos nocturna, con radiografía de tórax normal"
    ],
    answer: "Fiebre y tos, con expectoración o no, asociadas a un infiltrado nuevo en la radiografía de tórax o en la tomografía computarizada",
    why: ""
  },
  {
    id: "Manifestaciones clínicas de neumonía típica",
    unit: "parenquimatosos",
    prompt: "¿Cómo se expresan las manifestaciones clínicas de la neumonía típica?",
    options: [
      "Fiebre, dolor torácico de tipo puntada de costado y tos con expectoración herrumbrosa",
      "Disnea y tos seca, fiebre escasa, cefalea, vómitos, diarrea y mialgias",
      "Tos crónica, sudoración nocturna, hemoptisis y adelgazamiento progresivo",
      "Dolor torácico opresivo, ortopnea, edema periférico y crepitantes bibasales"
    ],
    answer: "Fiebre, dolor torácico de tipo puntada de costado y tos con expectoración herrumbrosa",
    why: ""
  },
  {
    id: "Fascies neumónica",
    unit: "parenquimatosos",
    prompt: "¿Qué es la fascies neumónica?",
    options: [
      "En la neumonía neumocócica, en ocasiones se presenta eritema malar y herpes labial",
      "En la neumonía atípica, es habitual observar cianosis central con aleteo nasal y tiraje",
      "En la neumonía grave, corresponde a facies hipocrática con sudor frío y palidez extrema",
      "En la neumonía intrahospitalaria, consiste en facies abotagada con edema periorbitario"
    ],
    answer: "En la neumonía neumocócica, en ocasiones se presenta eritema malar y herpes labial",
    why: ""
  },
  {
    id: "Manifestaciones clínicas de neumonía atípica",
    unit: "parenquimatosos",
    prompt: "¿Cómo se expresan las manifestaciones clínicas de las neumonías atípicas?",
    options: [
      "Es común la presencia de disnea y tos seca, fiebre escasa, cefalea, vómitos, diarrea, mialgias y deterioro del estado general",
      "Se presentan con fiebre alta, puntada de costado, expectoración herrumbrosa y soplo tubario florido",
      "Predominan el dolor pleurítico intenso, la hemoptisis y el broncospasmo de instalación súbita",
      "Se caracterizan por tos productiva purulenta, escalofríos intensos y consolidación lobar homogénea"
    ],
    answer: "Es común la presencia de disnea y tos seca, fiebre escasa, cefalea, vómitos, diarrea, mialgias y deterioro del estado general",
    why: "Puede existir disociación entre las manifestaciones clínicas floridas del paciente y los escasos o nulos hallazgos semiológicos. La mayoría presenta forma asintomática o enfermedad leve o moderada."
  },
  {
    id: "Etiología de neumonía atípica",
    unit: "parenquimatosos",
    prompt: "¿Cuál es la etiología de la neumonía atípica?",
    options: [
      "Mycoplasma pneumoniae, Coxiella burnetii, Legionella pneumophila, Chlamydophila psittaci, Chlamydophila pneumoniae y virus como influenza y sarampión",
      "Streptococcus pneumoniae, Haemophilus influenzae, Moraxella catarrhalis y Staphylococcus aureus",
      "Klebsiella pneumoniae, Pseudomonas aeruginosa, Acinetobacter baumannii y Enterobacter cloacae",
      "Mycobacterium tuberculosis, Nocardia asteroides, Actinomyces israelii y Pneumocystis jirovecii"
    ],
    answer: "Mycoplasma pneumoniae, Coxiella burnetii, Legionella pneumophila, Chlamydophila psittaci, Chlamydophila pneumoniae y virus como influenza y sarampión",
    why: "En la radiografía de tórax es habitual observar infiltrados, con predominio en las bases pulmonares."
  },
  {
    id: "Complicación de neumonía atípica",
    unit: "parenquimatosos",
    prompt: "¿Cuál es una complicación de la neumonía atípica?",
    options: [
      "Síndrome de distrés respiratorio agudo (SDRA)",
      "Neumotórax espontáneo primario",
      "Derrame pleural quiloso",
      "Cor pulmonale crónico"
    ],
    answer: "Síndrome de distrés respiratorio agudo (SDRA)",
    why: ""
  },
  {
    id: "Neumonía intrahospitalaria criterio",
    unit: "parenquimatosos",
    prompt: "¿Cuál es el criterio de neumonía intrahospitalaria?",
    options: [
      "Neumonía que aparece 48 horas o más después de la internación y que no estaba presente ni en incubación al ingreso",
      "Neumonía diagnosticada dentro de las primeras 24 horas de internación, aunque estuviera incubándose al ingreso",
      "Neumonía que aparece 72 horas después del alta hospitalaria, independientemente de los síntomas previos",
      "Toda neumonía asociada a ventilación mecánica, sin importar el momento de inicio"
    ],
    answer: "Neumonía que aparece 48 horas o más después de la internación y que no estaba presente ni en incubación al ingreso",
    why: "La neumonía intrahospitalaria se define por el inicio 48 horas o más después del ingreso y por no estar presente ni incubándose al momento de la admisión. Los patógenos más habituales incluyen bacilos gramnegativos y Staphylococcus aureus."
  },
  {
    id: "Etiología de neumonía intrahospitalaria",
    unit: "parenquimatosos",
    prompt: "¿Cuál es la etiología más frecuente de la neumonía intrahospitalaria?",
    options: [
      "Bacilos gramnegativos y Staphylococcus aureus",
      "Mycoplasma pneumoniae y Chlamydophila pneumoniae",
      "Streptococcus pneumoniae y Haemophilus influenzae exclusivamente",
      "Virus influenza y virus sincicial respiratorio como causas predominantes"
    ],
    answer: "Bacilos gramnegativos y Staphylococcus aureus",
    why: "En la neumonía intrahospitalaria predominan los bacilos gramnegativos y Staphylococcus aureus, incluidos microorganismos resistentes."
  },
  {
    id: "Definición de atelectasia",
    unit: "parenquimatosos",
    prompt: "¿Cuál es la definición de atelectasia?",
    options: [
      "Disminución del volumen pulmonar total o parcial por pérdida del aire",
      "Aumento irreversible del tamaño de los espacios aéreos distales con destrucción alveolar",
      "Compromiso del espacio aéreo por ocupación alveolar inflamatoria",
      "Acumulación de aire en el espacio pleural con colapso pulmonar secundario"
    ],
    answer: "Disminución del volumen pulmonar total o parcial por pérdida del aire",
    why: ""
  },
  {
    id: "Clasificación de atelectasia",
    unit: "parenquimatosos",
    prompt: "¿Cómo se clasifica la atelectasia?",
    options: [
      "Obstructiva, pasiva, cicatrizal y adhesiva",
      "Obstructiva, exudativa, fibrinosa y necrotizante",
      "Central, periférica, segmentaria y lobar",
      "Aguda, subaguda, crónica y recurrente"
    ],
    answer: "Obstructiva, pasiva, cicatrizal y adhesiva",
    why: ""
  },
  {
    id: "Atelectasia obstructiva",
    unit: "parenquimatosos",
    prompt: "¿Cuál es la definición de atelectasia obstructiva?",
    options: [
      "Obstrucción extrínseca o intrínseca de la vía respiratoria",
      "Compresión del espacio aéreo en contacto con la pleura por líquido o aire",
      "Disminución del surfactante pulmonar con colapso alveolar espiratorio",
      "Retracción pulmonar secundaria a fibrosis o cicatrices bronquiales"
    ],
    answer: "Obstrucción extrínseca o intrínseca de la vía respiratoria",
    why: "La obstrucción intrínseca puede deberse a tapones mucosos, cuerpo extraño o tumor endobronquial; la extrínseca, a tumores, adenopatías o masas mediastínicas. Puede ser proximal/central o distal/periférica."
  },
  {
    id: "Atelectasia pasiva",
    unit: "parenquimatosos",
    prompt: "¿Cuál es la definición de atelectasia pasiva?",
    options: [
      "Compresión del espacio aéreo que se encuentra en contacto con la pleura",
      "Obstrucción intrínseca de la vía aérea por tapones mucosos",
      "Disminución del surfactante pulmonar con colapso alveolar",
      "Retracción del parénquima por secuelas tuberculosas o fibrosis pulmonar"
    ],
    answer: "Compresión del espacio aéreo que se encuentra en contacto con la pleura",
    why: "Se produce cuando el espacio pleural está ocupado por líquido (derrame pleural) o por aire (neumotórax)."
  },
  {
    id: "Atelectasia cicatrizal",
    unit: "parenquimatosos",
    prompt: "¿Cuál es la definición de atelectasia cicatrizal?",
    options: [
      "Cicatrices en los bronquios como secuela tuberculosa o fibrosis pulmonar",
      "Compresión del parénquima pulmonar por derrame pleural o neumotórax",
      "Obstrucción de la vía aérea por causas intrínsecas o extrínsecas",
      "Disminución del surfactante pulmonar con imposibilidad de evitar el colapso alveolar"
    ],
    answer: "Cicatrices en los bronquios como secuela tuberculosa o fibrosis pulmonar",
    why: ""
  },
  {
    id: "Atelectasia adhesiva",
    unit: "parenquimatosos",
    prompt: "¿Cuál es la definición de atelectasia adhesiva?",
    options: [
      "Disminución del surfactante pulmonar o sustancia tensoactiva",
      "Compresión pleural del parénquima por líquido o aire",
      "Obstrucción bronquial intrínseca o extrínseca",
      "Pérdida de volumen por cicatrices broncopulmonares"
    ],
    answer: "Disminución del surfactante pulmonar o sustancia tensoactiva",
    why: "El surfactante impide el colapso de los alvéolos durante la espiración."
  },
  {
    id: "Retracción radiográfica en atelectasia",
    unit: "parenquimatosos",
    prompt: "¿Cuál de las siguientes corresponde a signos radiográficos de retracción por atelectasia según el grado de volumen pulmonar afectado?",
    options: [
      "Disminución del volumen del hemitórax afectado, elevación diafragmática del lado afectado, desplazamiento homolateral del mediastino y de las cisuras, hiperinsuflación compensadora y retracción costal",
      "Aumento del volumen del hemitórax afectado, descenso diafragmático ipsilateral, desplazamiento contralateral del mediastino y borramiento de los ángulos costofrénicos",
      "Hipersonoridad pulmonar, horizontalización costal, ensanchamiento mediastínico y signo del menisco pleural",
      "Cavitación apical, broncograma aéreo, patrón en vidrio esmerilado y adenopatías hiliares bilaterales"
    ],
    answer: "Disminución del volumen del hemitórax afectado, elevación diafragmática del lado afectado, desplazamiento homolateral del mediastino y de las cisuras, hiperinsuflación compensadora y retracción costal",
    why: ""
  },
  {
    id: "Complicaciones clínicas de atelectasia",
    unit: "parenquimatosos",
    prompt: "¿Cuáles son las complicaciones clínicas de la atelectasia?",
    options: [
      "Hipoxemia e incluso insuficiencia respiratoria y neumonía",
      "Hipercapnia crónica, cor pulmonale y neumotórax espontáneo",
      "Hemoptisis masiva, cavitación y absceso pulmonar",
      "Derrame pleural quiloso, bronquiectasias y fibrosis mediastínica"
    ],
    answer: "Hipoxemia e incluso insuficiencia respiratoria y neumonía",
    why: "Se producen por alteración de la relación ventilación/perfusión con zona perfundida pero no ventilada, y por acumulación de moco con disminución del clearance bronquial."
  },
  {
    id: "Situaciones clínicas que alertan atelectasia",
    unit: "parenquimatosos",
    prompt: "¿Qué situaciones clínicas frecuentes deben alertar sobre la presencia de atelectasia?",
    options: [
      "Dificultad respiratoria aguda en el posoperatorio, neumonía que se repite en una misma localización pulmonar en un paciente tabaquista, y crisis asmática que no mejora o empeora a pesar del tratamiento",
      "Dolor pleurítico de inicio súbito, roce pleural y fiebre alta en un paciente joven previamente sano",
      "Hemoptisis crónica, pérdida de peso y sudoración nocturna en una persona con contacto tuberculoso",
      "Ortopnea, edema de miembros inferiores y tercer ruido en un paciente hipertenso"
    ],
    answer: "Dificultad respiratoria aguda en el posoperatorio, neumonía que se repite en una misma localización pulmonar en un paciente tabaquista, y crisis asmática que no mejora o empeora a pesar del tratamiento",
    why: ""
  }
];