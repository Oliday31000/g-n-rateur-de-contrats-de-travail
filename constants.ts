
import type { FormData } from './types';
import { ContractType } from './types';

export const SALAIRE_SOCLE = 23000;
export const VALEUR_POINT = 55;

export const initialFormData: FormData = {
  employeeCivility: 'Mme',
  employeeFirstName: '',
  employeeLastName: '',
  employeeDob: '',
  employeeBirthPlace: '',
  employeeSocialSecurity: '',
  employeeAddress: '',
  employeeNationality: 'Française',
  isReplacement: true,
  replacedPersonCivility: 'Mme',
  replacedPersonFirstName: '',
  replacedPersonLastName: '',
  replacedPersonJobTitle: '',
  replacementReason: 'Congés payés',
  hasFixedTerm: true,
  startDate: '',
  endDate: '',
  jobTitle: '',
  jobStatus: 'Non-cadre',
  jobDescriptionSummary: '',
  jobBenchmark: '',
  jobFamily: '',
  trialPeriod: '',
  weeklyHours: undefined,
  issuerFirstName: 'Aelis',
  issuerLastName: 'BERTRAND-METAIL',
  issuerQuality: 'présidente',
  signatureDate: new Date().toISOString().split('T')[0],
  signatureLocation: 'Labruguière',

  // New fields with defaults from the provided example
  associationName: 'Le Petit Prince',
  associationAddress: 'Avenue Dunoyer de Segonzac 81290 LABRUGUIERE',
  ccnConsultationLocation: 'Dans la salle de pause',
  responsiblePersonTitle: 'la présidente',
  workLocation: 'Labruguière',
  retirementFundInfo: 'MALAKOFF MEDERIC, 21 rue Lafitte 75317 PARIS CEDEX 9',
  peseePoints: undefined,
  annualGrossSalary: undefined,
  additionalPaidLeaveDays: 1,
};

export const jobRoles = [
  {
    title: 'Auxiliaire de puériculture',
    family: 'Petite enfance',
    benchmark: 'Accompagnement petite enfance et parentalité',
    pesee: 42,
  },
  {
    title: 'Animatrice / Animateur petite enfance',
    family: 'Petite enfance',
    benchmark: 'Animation petite enfance',
    pesee: 11,
  },
  {
    title: 'EJE (Éducateur de jeunes enfants)',
    family: 'Petite enfance',
    benchmark: 'Éducation et accompagnement du jeune enfant',
    pesee: 107,
  },
  {
    title: 'Infirmière (en structure petite enfance)',
    family: 'Santé / soins infirmiers',
    benchmark: 'Soins infirmiers et accompagnement à la santé',
    pesee: 0, // No value provided by user
  },
];


export const contractMetadata = {
  [ContractType.CDD_REMP_PARTIEL_TERME_PRECIS]: {
    title: 'CDD Remplacement - Terme Précis (Temps Partiel)',
    description: 'Contrat à durée déterminée pour remplacer un salarié absent, avec une date de fin clairement définie. Le poste est à temps partiel.',
    isCdd: true,
    isPartTime: true,
    needsFixedTerm: true,
  },
  [ContractType.CDD_REMP_PARTIEL_SANS_TERME_PRECIS]: {
    title: 'CDD Remplacement - Terme Incertain (Temps Partiel)',
    description: 'Contrat à durée déterminée pour remplacer un salarié absent, sans date de fin précise (ex: congé maladie). Le poste est à temps partiel.',
    isCdd: true,
    isPartTime: true,
    needsFixedTerm: false,
  },
  [ContractType.CDI_PARTIEL]: {
    title: 'CDI Temps Partiel',
    description: 'Contrat à durée indéterminée pour un poste à temps partiel.',
    isCdd: false,
    isPartTime: true,
    needsFixedTerm: false,
  },
  [ContractType.CDI_PLEIN]: {
    title: 'CDI Temps Plein',
    description: 'Contrat à durée indéterminée standard pour un poste à temps plein.',
    isCdd: false,
    isPartTime: false,
    needsFixedTerm: false,
  },
};
