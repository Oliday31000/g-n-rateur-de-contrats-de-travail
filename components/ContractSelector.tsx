
import React from 'react';
import type { ContractType } from '../types';
import { contractMetadata } from '../constants';
import { Card } from './common/Card';

interface ContractSelectorProps {
  onSelect: (type: ContractType) => void;
}

const ContractSelector: React.FC<ContractSelectorProps> = ({ onSelect }) => {
  return (
    <div>
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-2">Générateur de Contrats de Travail</h1>
        <p className="text-lg text-gray-600">Étape 1 sur 3 : Choisissez un modèle pour commencer.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(contractMetadata).map(([type, meta]) => (
          <Card key={type} className="flex flex-col justify-between hover:border-brand-secondary transition-colors duration-300">
            <div>
              <h2 className="text-xl font-bold text-brand-primary mb-2">{meta.title}</h2>
              <p className="text-gray-600 mb-6">{meta.description}</p>
            </div>
            <button
              onClick={() => onSelect(type as ContractType)}
              className="w-full mt-auto bg-brand-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-colors"
            >
              Choisir ce modèle
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ContractSelector;
