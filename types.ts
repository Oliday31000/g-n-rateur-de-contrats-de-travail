export enum ContractType {
  CDD_REMP_PARTIEL_TERME_PRECIS = 'CDD pour un remplacement avec terme précis à temps partiel',
  CDD_REMP_PARTIEL_SANS_TERME_PRECIS = 'CDD pour un remplacement avec ou sans terme précis à temps partiel',
  CDI_PARTIEL = 'CDI à temps partiel',
  CDI_PLEIN = 'CDI à temps plein',
}

export interface FormData {
  // Employee details
  employeeCivility: 'M.' | 'Mme';
  employeeFirstName: string;
  employeeLastName: string;
  employeeDob: string;
  employeeBirthPlace: string;
  employeeSocialSecurity: string;
  employeeAddress: string;
  employeeNationality: string;

  // Replacement details (for CDD)
  isReplacement: boolean;
  replacedPersonCivility: 'M.' | 'Mme';
  replacedPersonFirstName: string;
  replacedPersonLastName: string;
  replacedPersonJobTitle: string;
  replacementReason: string;

  // Contract details
  hasFixedTerm: boolean;
  startDate: string;
  endDate: string;
  jobTitle: string;
  jobStatus: 'Cadre' | 'Non-cadre';
  jobDescriptionSummary: string;
  jobBenchmark: string;
  jobFamily: string;
  trialPeriod: string;
  weeklyHours?: number;
  
  // Signatory details
  issuerFirstName: string;
  issuerLastName: string;
  issuerQuality: string; // e.g., 'Directeur des Ressources Humaines'
  signatureDate: string;
  signatureLocation: string;

  // Association details
  associationName: string;
  associationAddress: string;
  ccnConsultationLocation: string;
  responsiblePersonTitle: string;
  workLocation: string;
  retirementFundInfo: string;

  // Contract specific for new model
  peseePoints?: number;
  annualGrossSalary?: number;
  additionalPaidLeaveDays?: number;
}