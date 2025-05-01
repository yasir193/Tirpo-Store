import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './WhatsAppButton.module.css'; // Import as module

const WhatsAppButton = ({
  phoneNumber = "+2001000178117",
  message = "مرحبا، أود الاستفسار عن..."
}) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className={styles.whatsappButton} onClick={handleClick}>
      <FaWhatsapp className={styles.whatsappIcon} />
      <span className={styles.whatsappTooltip}>تواصل معنا عبر واتساب</span>
    </div>
  );
};

export default WhatsAppButton;
