
import React, { useState, useCallback } from 'react';
import type { ContractType as ContractTypeEnum, FormData } from '../types';
import { contractMetadata, jobRoles, SALAIRE_SOCLE, VALEUR_POINT } from '../constants';
import { ContractType } from '../types';
import { Card } from './common/Card';
import { Input, Select, Checkbox } from './common/FormControls';
import FormSection from './common/FormSection';

interface ContractFormProps {
  contractType: ContractTypeEnum;
  initialData: FormData;
  onSubmit: (data: FormData) => void;
  onBack: () => void;
}

const ContractForm: React.FC<ContractFormProps> = ({ contractType, initialData, onSubmit, onBack }) => {
  const [formData, setFormData] = useState<FormData>(initialData);
  const meta = contractMetadata[contractType];

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    setFormData(prev => {
        const newState = { ...prev };

        if (type === 'checkbox') {
            newState[name] = (e.target as HTMLInputElement).checked;
            return newState;
        }

        const isNumeric = ['peseePoints', 'annualGrossSalary', 'weeklyHours', 'additionalPaidLeaveDays'].includes(name);
        const parsedValue = isNumeric ? (value === '' ? undefined : parseFloat(value)) : value;
        newState[name] = parsedValue;

        if (name === 'jobTitle') {
            const selectedRole = jobRoles.find(role => role.title === value);
            if (selectedRole) {
                const newPesee = selectedRole.pesee;
                newState.jobFamily = selectedRole.family;
                newState.jobBenchmark = selectedRole.benchmark;
                newState.peseePoints = newPesee;
                // For pesee 0 (Infirmière), let user input salary manually
                newState.annualGrossSalary = newPesee > 0 ? SALAIRE_SOCLE + (newPesee * VALEUR_POINT) : undefined;
            } else {
                newState.jobFamily = '';
                newState.jobBenchmark = '';
                newState.peseePoints = undefined;
                newState.annualGrossSalary = undefined;
            }
        } else if (name === 'peseePoints') {
            const newPesee = parsedValue as number | undefined;
            newState.annualGrossSalary = newPesee !== undefined ? SALAIRE_SOCLE + (newPesee * VALEUR_POINT) : undefined;
        } else if (name === 'annualGrossSalary') {
            const newSalary = parsedValue as number | undefined;
            if (newSalary !== undefined) {
                const newPesee = (newSalary - SALAIRE_SOCLE) / VALEUR_POINT;
                newState.peseePoints = Math.round(newPesee * 100) / 100;
            } else {
                newState.peseePoints = undefined;
            }
        }

        return newState;
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const jobTitleOptions = ['Sélectionner un poste...', ...jobRoles.map(r => r.title)];
  
  const HEURES_TEMPS_PLEIN = 35;
  const montantAnnuelBrutTempsPlein = formData.annualGrossSalary || 0;
  
  let montantAnnuelBrutFinal = montantAnnuelBrutTempsPlein;
  if (meta.isPartTime && formData.weeklyHours) {
      const etp = formData.weeklyHours / HEURES_TEMPS_PLEIN;
      montantAnnuelBrutFinal = montantAnnuelBrutTempsPlein * etp;
  }

  return (
    <div>
       <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-2">Renseignements du Contrat</h1>
        <p className="text-lg text-gray-600">Étape 2 sur 3 : Remplissez les informations ci-dessous.</p>
        <p className="font-semibold text-brand-primary mt-1">{meta.title}</p>
      </div>
      <Card>
        <form onSubmit={handleSubmit} className="space-y-8">
          <FormSection title="Informations sur l'employé(e)">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select label="Civilité" name="employeeCivility" value={formData.employeeCivility} onChange={handleChange} options={['M.', 'Mme']} />
              <div/>
              <Input label="Prénom" name="employeeFirstName" value={formData.employeeFirstName} onChange={handleChange} required />
              <Input label="Nom" name="employeeLastName" value={formData.employeeLastName} onChange={handleChange} required />
              <Input label="Date de naissance" name="employeeDob" type="date" value={formData.employeeDob} onChange={handleChange} required />
              <Input label="Lieu de naissance" name="employeeBirthPlace" value={formData.employeeBirthPlace} onChange={handleChange} required />
              <Input label="N° de Sécurité Sociale" name="employeeSocialSecurity" value={formData.employeeSocialSecurity} onChange={handleChange} required />
              <Input label="Nationalité" name="employeeNationality" value={formData.employeeNationality} onChange={handleChange} required />
            </div>
            <Input label="Adresse complète" name="employeeAddress" value={formData.employeeAddress} onChange={handleChange} required />
          </FormSection>

          <FormSection title="Informations sur l'Association">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input label="Nom de l'association" name="associationName" value={formData.associationName} onChange={handleChange} required />
                  <Input label="Adresse de l'association" name="associationAddress" value={formData.associationAddress} onChange={handleChange} required />
                  <Input label="Lieu de consultation CCN" name="ccnConsultationLocation" value={formData.ccnConsultationLocation} onChange={handleChange} required />
                  <Input label="Titre du responsable" name="responsiblePersonTitle" value={formData.responsiblePersonTitle} onChange={handleChange} required />
                  <Input label="Lieu de travail principal" name="workLocation" value={formData.workLocation} onChange={handleChange} required />
                  <Input label="Organisme Retraite & Prévoyance" name="retirementFundInfo" value={formData.retirementFundInfo} onChange={handleChange} required />
              </div>
          </FormSection>

          {meta.isCdd && (
             <FormSection title="Détails du Remplacement">
                <Checkbox label="Est-ce un contrat de remplacement ?" name="isReplacement" checked={formData.isReplacement} onChange={handleChange} />
                {formData.isReplacement && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-l-4 border-brand-secondary pl-4">
                        <Select label="Civilité (personne remplacée)" name="replacedPersonCivility" value={formData.replacedPersonCivility} onChange={handleChange} options={['M.', 'Mme']} />
                        <div/>
                        <Input label="Prénom (personne remplacée)" name="replacedPersonFirstName" value={formData.replacedPersonFirstName} onChange={handleChange} required={formData.isReplacement} />
                        <Input label="Nom (personne remplacée)" name="replacedPersonLastName" value={formData.replacedPersonLastName} onChange={handleChange} required={formData.isReplacement} />
                        <Input label="Qualité (personne remplacée)" name="replacedPersonJobTitle" value={formData.replacedPersonJobTitle} onChange={handleChange} required={formData.isReplacement} />
                        <Input label="Motif du remplacement" name="replacementReason" value={formData.replacementReason} onChange={handleChange} required={formData.isReplacement} />
                    </div>
                )}
             </FormSection>
          )}

          <FormSection title="Conditions du Contrat">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Date de début" name="startDate" type="date" value={formData.startDate} onChange={handleChange} required />
                {meta.isCdd && (
                    <>
                        <Checkbox label="Le contrat a-t-il un terme précis ?" name="hasFixedTerm" checked={formData.hasFixedTerm} onChange={handleChange} />
                        {formData.hasFixedTerm && <Input label="Date de fin" name="endDate" type="date" value={formData.endDate} onChange={handleChange} required={formData.hasFixedTerm} />}
                    </>
                )}
                <Select label="Intitulé du poste" name="jobTitle" value={formData.jobTitle} onChange={handleChange} options={jobTitleOptions} required />
                <Input label="Emploi repère" name="jobBenchmark" value={formData.jobBenchmark} onChange={handleChange} required disabled />
                <Input label="Famille de métier" name="jobFamily" value={formData.jobFamily} onChange={handleChange} required disabled />
                <Select label="Statut" name="jobStatus" value={formData.jobStatus} onChange={handleChange} options={['Non-cadre', 'Cadre']} />
                <Input label="Durée de la période d'essai" name="trialPeriod" placeholder="Ex: 2 mois" value={formData.trialPeriod} onChange={handleChange} required />
                <Input label="Pesée" name="peseePoints" type="number" step="0.01" value={formData.peseePoints ?? ''} onChange={handleChange} />
             </div>
             {!meta.isCdd && (
                <Input label="Description des fonctions" name="jobDescriptionSummary" value={formData.jobDescriptionSummary} onChange={handleChange} required />
             )}
          </FormSection>

          <FormSection title="Rémunération & Temps de travail">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {meta.isPartTime && (
                    <Select 
                        label="Heures par semaine" 
                        name="weeklyHours" 
                        value={formData.weeklyHours || ''} 
                        onChange={handleChange} 
                        options={['35', '30', '25', '20']}
                        placeholder="Sélectionner..."
                        required 
                    />
                )}
                <Input 
                    label="Rémunération annuelle brute (temps plein)" 
                    name="annualGrossSalary" 
                    type="number"
                    step="0.01"
                    value={formData.annualGrossSalary ?? ''}
                    onChange={handleChange}
                    placeholder="Calculé ou à saisir"
                />
                
                {/* For alignment when not part time */}
                {!meta.isPartTime && <div />}
                
                <Input label="Rémunération annuelle brute (calculée)" name="annualGrossSalaryFinal" type="text" value={montantAnnuelBrutFinal.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })} disabled />
                <Input label="Jours de congés sup./mois (Oct-Mai)" name="additionalPaidLeaveDays" type="number" value={formData.additionalPaidLeaveDays || ''} onChange={handleChange} required />
            </div>
          </FormSection>

          <FormSection title="Informations sur le Signataire (Employeur)">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Prénom" name="issuerFirstName" value={formData.issuerFirstName} onChange={handleChange} required />
              <Input label="Nom" name="issuerLastName" value={formData.issuerLastName} onChange={handleChange} required />
              <Input label="Qualité" name="issuerQuality" placeholder="Ex: Gérant" value={formData.issuerQuality} onChange={handleChange} required />
              <Input label="Lieu de signature" name="signatureLocation" value={formData.signatureLocation} onChange={handleChange} required />
              <Input label="Date de signature" name="signatureDate" type="date" value={formData.signatureDate} onChange={handleChange} required />
            </div>
          </FormSection>

          <div className="flex justify-between items-center pt-6 border-t">
            <button type="button" onClick={onBack} className="text-gray-600 hover:text-brand-primary font-medium py-2 px-4 rounded-lg">
              &larr; Retour
            </button>
            <button type="submit" className="bg-brand-secondary text-brand-primary font-bold py-2 px-6 rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-secondary transition-transform transform hover:scale-105">
              Générer l'aperçu &rarr;
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ContractForm;
