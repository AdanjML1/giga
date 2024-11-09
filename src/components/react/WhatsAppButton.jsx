// WhatsAppButton.jsx
import React from 'react';

function WhatsAppButton({ phoneNumber, message }) {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      Contactar por WhatsApp
    </button>
  );
}

export default WhatsAppButton;
