import React from 'react';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import saveAs from 'file-saver';
import type { ContractType, FormData } from '../types';
import { fillTemplate } from '../utils/templateProcessor';
import { contractMetadata } from '../constants';

interface ContractPreviewProps {
  contractType: ContractType;
  formData: FormData;
  onBack: () => void;
}

const ContractPreview: React.FC<ContractPreviewProps> = ({ contractType, formData, onBack }) => {
  const contractText = fillTemplate(contractType, formData);
  const meta = contractMetadata[contractType];

  const handleDownload = () => {
    const paragraphs = contractText.split('\n').map(text => 
      new Paragraph({
        children: [new TextRun(text)],
        spacing: { after: 120 },
      })
    );

    const doc = new Document({
      sections: [{
        properties: {},
        children: paragraphs,
      }],
    });

    Packer.toBlob(doc).then(blob => {
      const fileName = `Contrat_${meta.title.replace(/\s/g, '_')}_${formData.employeeFirstName}_${formData.employeeLastName}.docx`;
      saveAs(blob, fileName);
    });
  };

  return (
    <div>
        <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-2">Aperçu du Contrat</h1>
            <p className="text-lg text-gray-600">Étape 3 sur 3 : Vérifiez les informations et téléchargez.</p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-brand-primary mb-4 border-b pb-2">{meta.title}</h2>
            <pre className="whitespace-pre-wrap font-sans text-sm text-gray-800 bg-gray-50 p-4 rounded-md h-96 overflow-y-auto">
                {contractText}
            </pre>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <button onClick={onBack} className="text-gray-600 hover:text-brand-primary font-medium py-2 px-4 rounded-lg order-2 sm:order-1">
                &larr; Modifier les informations
            </button>
            <button onClick={handleDownload} className="w-full sm:w-auto bg-brand-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-transform transform hover:scale-105 order-1 sm:order-2">
                Télécharger en .docx
            </button>
        </div>
    </div>
  );
};

export default ContractPreview;