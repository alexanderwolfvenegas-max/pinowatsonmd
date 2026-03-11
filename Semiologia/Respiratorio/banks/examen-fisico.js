export const BANK_EXAMEN_FISICO = [

{
  id: "Principales síndromes respiratorios",
  type: "matching",
  prompt: "Arrastre cada hallazgo al síndrome respiratorio correspondiente.",
  matchBoard: [
    {
      syndrome: "bronquitico",
      title: "Síndrome bronquítico",
      rows: [
        { slot: "ventilacion", label: "Ventilación" },
        { slot: "tos", label: "Tos" },
        { slot: "auscultacion", label: "Auscultación" }
      ]
    },
    {
      syndrome: "condensacion",
      title: "Síndrome de condensación con bronquio permeable",
      rows: [
        { slot: "dato_clinico", label: "Dato clínico" },
        { slot: "ventilacion", label: "Ventilación" },
        { slot: "vibraciones_vocales", label: "Vibraciones vocales" },
        { slot: "percusion", label: "Percusión" },
        { slot: "auscultacion", label: "Auscultación" }
      ]
    },
    {
      syndrome: "atelectasico",
      title: "Síndrome atelectásico",
      rows: [
        { slot: "ventilacion", label: "Ventilación" },
        { slot: "vibraciones_vocales", label: "Vibraciones vocales" },
        { slot: "percusion", label: "Percusión" },
        { slot: "auscultacion", label: "Auscultación" }
      ]
    },
    {
      syndrome: "derrame_pleural",
      title: "Síndrome de derrame pleural",
      rows: [
        { slot: "ventilacion", label: "Ventilación" },
        { slot: "vibraciones_vocales", label: "Vibraciones vocales" },
        { slot: "percusion", label: "Percusión" },
        { slot: "auscultacion", label: "Auscultación" }
      ]
    },
    {
      syndrome: "neumotorax",
      title: "Síndrome del neumotórax",
      rows: [
        { slot: "ventilacion", label: "Ventilación" },
        { slot: "vibraciones_vocales", label: "Vibraciones vocales" },
        { slot: "percusion", label: "Percusión" },
        { slot: "auscultacion", label: "Auscultación" }
      ]
    }
  ],
  matchItems: [
    { id: "m1", text: "Alteración ventilatoria con patrón obstructivo", syndrome: "bronquitico", slot: "ventilacion" },
    { id: "m2", text: "Tos húmeda, productiva o no", syndrome: "bronquitico", slot: "tos" },
    { id: "m3", text: "Estertores gruesos o de burbuja debido al componente exudativo", syndrome: "bronquitico", slot: "auscultacion" },
    { id: "m4", text: "Sibilancias y roncus según el grado de broncoespasmo", syndrome: "bronquitico", slot: "auscultacion" },

    { id: "m5", text: "Facies neumónica", syndrome: "condensacion", slot: "dato_clinico" },
    { id: "m6", text: "Alteración ventilatoria restrictiva", syndrome: "condensacion", slot: "ventilacion" },
    { id: "m7", text: "Aumento de las vibraciones vocales", syndrome: "condensacion", slot: "vibraciones_vocales" },
    { id: "m8", text: "Matidez con columna sonora", syndrome: "condensacion", slot: "percusion" },
    { id: "m9", text: "Estertores crepitantes de inicio", syndrome: "condensacion", slot: "auscultacion" },
    { id: "m10", text: "Soplo tubario y aumento de la resonancia vocal (broncofonía, pectoriloquia y egofonía)", syndrome: "condensacion", slot: "auscultacion" },
    { id: "m11", text: "Crepitantes de retorno", syndrome: "condensacion", slot: "auscultacion" },

    { id: "m12", text: "Alteración ventilatoria restrictiva", syndrome: "atelectasico", slot: "ventilacion" },
    { id: "m13", text: "Ausencia de vibraciones vocales", syndrome: "atelectasico", slot: "vibraciones_vocales" },
    { id: "m14", text: "Matidez con columna sonora", syndrome: "atelectasico", slot: "percusion" },
    { id: "m15", text: "Silencio auscultatorio", syndrome: "atelectasico", slot: "auscultacion" },

    { id: "m16", text: "Alteración ventilatoria restrictiva", syndrome: "derrame_pleural", slot: "ventilacion" },
    { id: "m17", text: "Ausencia de vibraciones vocales", syndrome: "derrame_pleural", slot: "vibraciones_vocales" },
    { id: "m18", text: "Matidez desplazable con columna mate", syndrome: "derrame_pleural", slot: "percusion" },
    { id: "m19", text: "Silencio auscultatorio", syndrome: "derrame_pleural", slot: "auscultacion" },
    { id: "m20", text: "Soplo pleurítico y egofonía en el límite superior del derrame", syndrome: "derrame_pleural", slot: "auscultacion" },

    { id: "m21", text: "Alteración ventilatoria restrictiva", syndrome: "neumotorax", slot: "ventilacion" },
    { id: "m22", text: "Ausencia de vibraciones vocales", syndrome: "neumotorax", slot: "vibraciones_vocales" },
    { id: "m23", text: "Hipersonoridad o timpanismo", syndrome: "neumotorax", slot: "percusion" },
    { id: "m24", text: "Silencio auscultatorio", syndrome: "neumotorax", slot: "auscultacion" },
    { id: "m25", text: "Soplo anfórico", syndrome: "neumotorax", slot: "auscultacion" }
  ],
  why: "El síndrome bronquítico muestra patrón obstructivo, tos y ruidos bronquiales; la condensación con bronquio permeable presenta vibraciones vocales aumentadas, matidez con columna sonora y fenómenos de soplo/resonancia vocal; la atelectasia cursa con ausencia de vibraciones vocales y silencio auscultatorio; el derrame pleural con matidez desplazable, columna mate y egofonía en el límite superior; y el neumotórax con hipersonoridad o timpanismo y soplo anfórico."
},


[
  {
    id: "Broncofonia",
    prompt: "¿Cuál describe mejor la broncofonía?",
    options: [
      "Aumento de la resonancia e intensidad de la voz hablada, sin que necesariamente se distingan las palabras con precisión completa",
      "La voz se oye clara, fuerte y perfectamente articulada, como sobre la tráquea",
      "La voz susurrada se transmite con gran nitidez al auscultar el tórax",
      "La voz adquiere un timbre nasal y la 'e' se escucha como 'a'"
    ],
    answer: "Aumento de la resonancia e intensidad de la voz hablada, sin que necesariamente se distingan las palabras con precisión completa",
    why: "La broncofonía es el aumento de la transmisión de la voz hablada; la pectoriloquia implica mayor nitidez y articulación."
  },
  {
    id: "Pectoriloquia",
    prompt: "¿Cuál describe mejor la pectoriloquia?",
    options: [
      "Disminución de la intensidad de la voz por interposición de aire o líquido pleural",
      "La voz se oye clara, fuerte y articulada; las palabras se distinguen con nitidez",
      "La voz susurrada se oye apenas, como ocurre normalmente en el pulmón sano",
      "La voz tiene un carácter tembloroso y nasal, con transformación de la 'e' en 'a'"
    ],
    answer: "La voz se oye clara, fuerte y articulada; las palabras se distinguen con nitidez",
    why: "En la pectoriloquia la voz hablada se transmite con claridad anormal, semejante a lo que se ausculta normalmente sobre laringe o tráquea."
  },
  {
    id: "Pectoriloquia_afona",
    prompt: "¿Cuál describe mejor la pectoriloquia áfona?",
    options: [
      "Aumento del frémito vocal palpable durante la fonación",
      "La voz hablada se transmite con mayor resonancia, pero no se diferencia bien la articulación",
      "La voz susurrada o cuchicheada se ausculta clara y fuerte",
      "La voz presenta un timbre grave y apagado por derrame pleural"
    ],
    answer: "La voz susurrada o cuchicheada se ausculta clara y fuerte",
    why: "La pectoriloquia áfona corresponde a la transmisión nítida de la voz en susurro, hallazgo típico de condensación."
  },
  {
    id: "Egofonia",
    prompt: "¿Cuál describe mejor la egofonía?",
    options: [
      "La voz se ausculta clara y articulada cuando el paciente habla normalmente",
      "La voz tiene un tono nasal o tembloroso; clásicamente la 'e' se oye como 'a'",
      "La voz susurrada desaparece por completo sobre zonas de condensación",
      "Se ausculta un ruido áspero por roce pleural que aumenta con la tos"
    ],
    answer: "La voz tiene un tono nasal o tembloroso; clásicamente la 'e' se oye como 'a'",
    why: "La egofonía es una alteración de la resonancia vocal con cualidad nasal o de balido, clásica de condensación y a veces del borde superior de un derrame pleural."
  }
],

{
  id: "Primer episodio de asma bronquial",
  case: "Olivia, de 21 años, consulta en la guardia de emergencias médicas por presentar dificultad respiratoria de reciente comienzo. No fuma, no ingiere fármacos ni tiene antecedentes clínicos de importancia. En el examen físico usted observa hundimiento de las fosas supraesternal y supraclaviculares durante la inspiración, utilización de músculos accesorios de la respiración y espiración prolongada.",
  questions: [
    {
      prompt: "¿Cuál es su impresión diagnóstica más probable?",
      options: [
        "Primer episodio de asma bronquial",
        "Derrame pleural bilateral",
        "Neumonía lobar derecha",
        "Edema agudo de pulmón"
      ],
      answer: "Primer episodio de asma bronquial",
      why: "Los hallazgos sugieren una obstrucción aérea intratorácica y, por la falta de antecedentes, debe pensarse en un primer episodio de asma bronquial."
    },
    {
      prompt: "¿Qué otro hallazgo del examen físico ayudaría a definir mejor el cuadro?",
      options: [
        "Auscultación de roncus y sibilancias diseminados en ambos campos pulmonares",
        "Frote pleural unilateral",
        "Percusión mate en una base pulmonar",
        "Crepitantes finos bibasales"
      ],
      answer: "Auscultación de roncus y sibilancias diseminados en ambos campos pulmonares",
      why: "La presencia de roncus y sibilancias diseminados confirmaría la presunción clínica."
    },
    {
      prompt: "¿Cómo certificaría el diagnóstico?",
      options: [
        "Examen funcional respiratorio con evaluación de la respuesta a broncodilatadores",
        "Radiografía de tórax de perfil",
        "Gasometría arterial aislada",
        "Tomografía computada de tórax con contraste"
      ],
      answer: "Examen funcional respiratorio con evaluación de la respuesta a broncodilatadores",
      why: "El examen funcional respiratorio con prueba de respuesta a broncodilatadores es el estudio indicado para certificar el diagnóstico."
    }
  ]
},

];

