import { BANK_ANTECEDENTES } from "./antecedentes.js";
import { BANK_EXAMEN_FISICO } from "./examen-fisico.js";

import { BANK_CARDIOPATIA_ISQUEMICA } from "./cardiopatia-isquemica.js";
import { BANK_INSUFICIENCIA_CARDIACA } from "./insuficiencia-cardiaca.js";
import { BANK_ARRITMIAS } from "./arritmias.js";
import { BANK_ENFERMEDADES_VALVULARES } from "./enfermedades-valvulares.js";
import { BANK_ENDOCARDITIS_INFECCIOSA } from "./endocarditis-infecciosa.js";
import { BANK_ENFERMEDADES_PERICARDIO } from "./enfermedades-pericardio.js";
import { BANK_HIPERTENSION_ARTERIAL } from "./hipertension-arterial.js";
import { BANK_SINDROME_METABOLICO } from "./sindrome-metabolico.js";
import { BANK_HIPERTENSION_PULMONAR } from "./hipertension-pulmonar.js";
import { BANK_TROMBOEMBOLISMO_PULMON } from "./tromboembolismo-pulmon.js";
import { BANK_SHOCK } from "./shock.js";
import { BANK_INSUFICIENCIA_VASCULAR_PERIFERICA } from "./insuficiencia-vascular-periferica.js";
import { BANK_CARDIOPATIAS_CONGENITAS_ADULTO } from "./cardiopatias-congenitas-adulto.js";

import { BANK_EXAMENES_COMPLEMENTARIOS } from "./examenes-complementarios.js";
import { BANK_INTERPRETACION_CLINICA } from "./interpretacion-clinica.js";

export const QUIZ_BANKS = {
  antecedentes: BANK_ANTECEDENTES,
  examenFisico: BANK_EXAMEN_FISICO,

  cardiopatiaIsquemica: BANK_CARDIOPATIA_ISQUEMICA,
  insuficienciaCardiaca: BANK_INSUFICIENCIA_CARDIACA,
  arritmias: BANK_ARRITMIAS,
  enfermedadesValvulares: BANK_ENFERMEDADES_VALVULARES,
  endocarditisInfecciosa: BANK_ENDOCARDITIS_INFECCIOSA,
  enfermedadesPericardio: BANK_ENFERMEDADES_PERICARDIO,
  hipertensionArterial: BANK_HIPERTENSION_ARTERIAL,
  sindromeMetabolico: BANK_SINDROME_METABOLICO,
  hipertensionPulmonar: BANK_HIPERTENSION_PULMONAR,
  tromboembolismoPulmon: BANK_TROMBOEMBOLISMO_PULMON,
  shock: BANK_SHOCK,
  insuficienciaVascularPeriferica: BANK_INSUFICIENCIA_VASCULAR_PERIFERICA,
  cardiopatiasCongenitasAdulto: BANK_CARDIOPATIAS_CONGENITAS_ADULTO,

  examenesComplementarios: BANK_EXAMENES_COMPLEMENTARIOS,
  interpretacionClinica: BANK_INTERPRETACION_CLINICA,

  patologiasCardiacas: [
    ...BANK_CARDIOPATIA_ISQUEMICA,
    ...BANK_INSUFICIENCIA_CARDIACA,
    ...BANK_ARRITMIAS,
    ...BANK_ENFERMEDADES_VALVULARES,
    ...BANK_ENDOCARDITIS_INFECCIOSA,
    ...BANK_ENFERMEDADES_PERICARDIO,
    ...BANK_HIPERTENSION_ARTERIAL,
    ...BANK_SINDROME_METABOLICO,
    ...BANK_HIPERTENSION_PULMONAR,
    ...BANK_TROMBOEMBOLISMO_PULMON,
    ...BANK_SHOCK,
    ...BANK_INSUFICIENCIA_VASCULAR_PERIFERICA,
    ...BANK_CARDIOPATIAS_CONGENITAS_ADULTO
  ],

  cardiologiaCompleto: [
    ...BANK_ANTECEDENTES,
    ...BANK_EXAMEN_FISICO,
    ...BANK_CARDIOPATIA_ISQUEMICA,
    ...BANK_INSUFICIENCIA_CARDIACA,
    ...BANK_ARRITMIAS,
    ...BANK_ENFERMEDADES_VALVULARES,
    ...BANK_ENDOCARDITIS_INFECCIOSA,
    ...BANK_ENFERMEDADES_PERICARDIO,
    ...BANK_HIPERTENSION_ARTERIAL,
    ...BANK_SINDROME_METABOLICO,
    ...BANK_HIPERTENSION_PULMONAR,
    ...BANK_TROMBOEMBOLISMO_PULMON,
    ...BANK_SHOCK,
    ...BANK_INSUFICIENCIA_VASCULAR_PERIFERICA,
    ...BANK_CARDIOPATIAS_CONGENITAS_ADULTO,
    ...BANK_EXAMENES_COMPLEMENTARIOS,
    ...BANK_INTERPRETACION_CLINICA
  ]
};