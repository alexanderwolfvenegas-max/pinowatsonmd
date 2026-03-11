import { BANK_MOTIVOS_CONSULTA } from "./motivos-consulta.js";
import { BANK_ANTECEDENTES } from "./antecedentes.js";
import { BANK_EXAMEN_FISICO } from "./examen-fisico.js";
import { BANK_VIA_AEREA } from "./via-aerea.js";
import { BANK_PARENQUIMATOSOS } from "./parenquimatosos.js";
import { BANK_PLEURALES } from "./pleurales.js";
import { BANK_MEDIASTINICO } from "./mediastinico.js";
import { BANK_INSUFICIENCIA_RESPIRATORIA } from "./insuficiencia-respiratoria.js";
import { BANK_EXAMENES_COMPLEMENTARIOS } from "./examenes-complementarios.js";
import { BANK_INTERPRETACION_CLINICA } from "./interpretacion-clinica.js";

export const QUIZ_BANKS = {
  motivosConsulta: BANK_MOTIVOS_CONSULTA,
  antecedentes: BANK_ANTECEDENTES,
  examenFisico: BANK_EXAMEN_FISICO,

  viaAerea: BANK_VIA_AEREA,
  parenquimatosos: BANK_PARENQUIMATOSOS,
  pleurales: BANK_PLEURALES,
  mediastinico: BANK_MEDIASTINICO,
  insuficienciaRespiratoria: BANK_INSUFICIENCIA_RESPIRATORIA,

  examenesComplementarios: BANK_EXAMENES_COMPLEMENTARIOS,
  interpretacionClinica: BANK_INTERPRETACION_CLINICA,

  sindromesPatologias: [
    ...BANK_VIA_AEREA,
    ...BANK_PARENQUIMATOSOS,
    ...BANK_PLEURALES,
    ...BANK_MEDIASTINICO,
    ...BANK_INSUFICIENCIA_RESPIRATORIA
  ],

  respiratorioCompleto: [
    ...BANK_MOTIVOS_CONSULTA,
    ...BANK_ANTECEDENTES,
    ...BANK_EXAMEN_FISICO,
    ...BANK_VIA_AEREA,
    ...BANK_PARENQUIMATOSOS,
    ...BANK_PLEURALES,
    ...BANK_MEDIASTINICO,
    ...BANK_INSUFICIENCIA_RESPIRATORIA,
    ...BANK_EXAMENES_COMPLEMENTARIOS,
    ...BANK_INTERPRETACION_CLINICA
  ]
};