
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white mt-12 py-4 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Générateur de Contrats. Tous droits réservés.</p>
        <p className="mt-1">Cet outil est fourni à titre indicatif et ne remplace pas un conseil juridique professionnel.</p>
      </div>
    </footer>
  );
};
