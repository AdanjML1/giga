import React from 'react';
import { FiCopy } from 'react-icons/fi';

export default function CopyButton({ text }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copiado al portapapeles!");
    }).catch((err) => {
      console.error("Error al copiar al portapapeles: ", err);
    });
  };

  return (
    <button 
      onClick={copyToClipboard} 
      className="flex items-center bg-primary text-white px-3 py-2 rounded text-sm hover:bg-primary-dark w-10 h-10"
    >
      <FiCopy className="w-8 h-8 text-2xl " /> {/* Ícono de copiar al portapapeles */}
      {/* Copiar */}
    </button>
  );
}
