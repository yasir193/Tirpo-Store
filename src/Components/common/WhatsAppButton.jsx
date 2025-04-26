import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css'; // Create this CSS file

const WhatsAppButton = ({ phoneNumber = "+2001000178117", message = "مرحبا، أود الاستفسار عن..." }) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="whatsapp-button" onClick={handleClick}>
      <FaWhatsapp className="whatsapp-icon" />
      <span className="whatsapp-tooltip">تواصل معنا عبر واتساب</span>
    </div>
  );
};

export default WhatsAppButton;