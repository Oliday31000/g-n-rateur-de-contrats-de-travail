
import React, { useState, useCallback } from 'react';
import type { ContractType, FormData } from './types';
import { initialFormData } from './constants';
import ContractSelector from './components/ContractSelector';
import ContractForm from './components/ContractForm';
import ContractPreview from './components/ContractPreview';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';

const App: React.FC = () => {
  const [step, setStep] = useState<'selection' | 'form' | 'preview'>('selection');
  const [contractType, setContractType] = useState<ContractType | null>(null);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleContractSelect = useCallback((type: ContractType) => {
    setContractType(type);
    setFormData(initialFormData); // Reset form data when selecting a new contract
    setStep('form');
  }, []);

  const handleFormSubmit = useCallback((data: FormData) => {
    setFormData(data);
    setStep('preview');
  }, []);

  const handleBackToSelection = useCallback(() => {
    setContractType(null);
    setStep('selection');
  }, []);
  
  const handleBackToForm = useCallback(() => {
    setStep('form');
  }, []);

  const renderStep = () => {
    switch (step) {
      case 'selection':
        return <ContractSelector onSelect={handleContractSelect} />;
      case 'form':
        if (!contractType) {
          // Should not happen in normal flow, but as a fallback
          handleBackToSelection();
          return null;
        }
        return (
          <ContractForm
            contractType={contractType}
            initialData={formData}
            onSubmit={handleFormSubmit}
            onBack={handleBackToSelection}
          />
        );
      case 'preview':
        if (!contractType) {
            handleBackToSelection();
            return null;
        }
        return <ContractPreview contractType={contractType} formData={formData} onBack={handleBackToForm} />;
      default:
        return <ContractSelector onSelect={handleContractSelect} />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-light text-brand-dark flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        {renderStep()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
