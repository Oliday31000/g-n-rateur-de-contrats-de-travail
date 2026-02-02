
import type { FormData, ContractType } from '../types';
import { getContractTemplate } from './contractTemplates';
import { ContractType as CT } from '../types';
import { contractMetadata, SALAIRE_SOCLE, VALEUR_POINT } from '../constants';

export const calculateDuration = (startDate: string, endDate: string): string => {
  if (!startDate || !endDate) return 'non définie';
  const start = new Date(startDate);
  const end = new Date(endDate);
  if (isNaN(start.getTime()) || isNaN(end.getTime()) || end < start) return 'invalide';

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  if (days < 0) {
    months--;
    days += new Date(end.getFullYear(), end.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} an${years > 1 ? 's' : ''}`);
  if (months > 0) parts.push(`${months} mois`);
  if (days > 0) parts.push(`${days} jour${days > 1 ? 's' : ''}`);

  return parts.length > 0 ? parts.join(' ') : '0 jours';
};

export const fillTemplate = (contractType: ContractType, data: FormData): string => {
  let template = getContractTemplate(contractType);
  const meta = contractMetadata[contractType];
  
  const complementaryHoursLimit = data.weeklyHours ? (data.weeklyHours / 3).toFixed(2) : 'N/A';

  // Remuneration calculations based on central constants
  const HEURES_TEMPS_PLEIN = 35;
  
  const peseePoints = data.peseePoints || 0;
  const montantAnnuelBrutTempsPlein = SALAIRE_SOCLE + (peseePoints * VALEUR_POINT);
  
  // Calculate the final salary, prorated for part-time if applicable
  let montantAnnuelBrutFinal = montantAnnuelBrutTempsPlein;
  if (meta.isPartTime && data.weeklyHours) {
      const etp = data.weeklyHours / HEURES_TEMPS_PLEIN;
      montantAnnuelBrutFinal = montantAnnuelBrutTempsPlein * etp;
  }

  const replacements: Record<string, string> = {
    '{{employeeCivility}}': data.employeeCivility,
    '{{employeeFullName}}': `${data.employeeFirstName} ${data.employeeLastName}`,
    '{{employeeAddress}}': data.employeeAddress,
    '{{employeeDob}}': data.employeeDob ? new Date(data.employeeDob).toLocaleDateString('fr-FR') : '',
    '{{employeeBirthPlace}}': data.employeeBirthPlace,
    '{{employeeNationality}}': data.employeeNationality,
    '{{employeeSocialSecurity}}': data.employeeSocialSecurity,
    '{{jobTitle}}': data.jobTitle,
    '{{jobStatus}}': data.jobStatus,
    '{{jobDescriptionSummary}}': data.jobDescriptionSummary,
    '{{jobBenchmark}}': data.jobBenchmark,
    '{{jobFamily}}': data.jobFamily,
    '{{startDate}}': data.startDate ? new Date(data.startDate).toLocaleDateString('fr-FR') : '',
    '{{trialPeriod}}': data.trialPeriod,
    '{{replacedPersonCivility}}': data.replacedPersonCivility,
    '{{replacedPersonFullName}}': `${data.replacedPersonFirstName} ${data.replacedPersonLastName}`,
    '{{replacedPersonJobTitle}}': data.replacedPersonJobTitle,
    '{{replacementReason}}': data.replacementReason,
    '{{endDate}}': data.endDate ? new Date(data.endDate).toLocaleDateString('fr-FR') : 'au retour du salarié remplacé',
    '{{duration}}': calculateDuration(data.startDate, data.endDate),
    '{{weeklyHours}}': data.weeklyHours?.toString() ?? 'N/A',
    '{{complementaryHoursLimit}}': complementaryHoursLimit,
    '{{issuerFullName}}': `${data.issuerFirstName} ${data.issuerLastName}`,
    '{{issuerQuality}}': data.issuerQuality,
    '{{signatureLocation}}': data.signatureLocation,
    '{{signatureDate}}': data.signatureDate ? new Date(data.signatureDate).toLocaleDateString('fr-FR') : '',
    
    // Association replacements
    '{{associationName}}': data.associationName,
    '{{associationAddress}}': data.associationAddress,
    '{{ccnConsultationLocation}}': data.ccnConsultationLocation,
    '{{responsiblePersonTitle}}': data.responsiblePersonTitle,
    '{{workLocation}}': data.workLocation,
    '{{retirementFundInfo}}': data.retirementFundInfo,

    // Remuneration replacements
    '{{salaireSocle}}': SALAIRE_SOCLE.toLocaleString('fr-FR'),
    '{{valeurPoint}}': VALEUR_POINT.toString(),
    '{{peseePoints}}': peseePoints.toString(),
    '{{montantAnnuelBrutTempsPlein}}': montantAnnuelBrutTempsPlein.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    '{{montantAnnuelBrutFinal}}': montantAnnuelBrutFinal.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    
    // Others
    '{{additionalPaidLeaveDays}}': data.additionalPaidLeaveDays?.toString() ?? '1',
  };

  // Conditional blocks
  if (data.isReplacement) {
    template = template.replace(/{{#if_replacement}}([\s\S]*?){{\/if_replacement}}/g, '$1');
  } else {
    template = template.replace(/{{#if_replacement}}([\s\S]*?){{\/if_replacement}}/g, '');
  }

  if (data.hasFixedTerm) {
     template = template.replace(/{{#if_fixed_term}}([\s\S]*?){{\/if_fixed_term}}/g, '$1');
     template = template.replace(/{{#if_not_fixed_term}}([\s\S]*?){{\/if_not_fixed_term}}/g, '');
  } else {
     template = template.replace(/{{#if_fixed_term}}([\s\S]*?){{\/if_fixed_term}}/g, '');
     template = template.replace(/{{#if_not_fixed_term}}([\s\S]*?){{\/if_not_fixed_term}}/g, '$1');
  }
  
  // Simple replacements
  Object.entries(replacements).forEach(([key, value]) => {
    template = template.replace(new RegExp(key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), value);
  });

  return template;
};
