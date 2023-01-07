import { useState } from 'react';

export const usePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handlePopup = (message: string) => {
    setPopupMessage(message);
    setIsOpen(true);
    setTimeout(() => setIsOpen(false), 4000);
  };

  return { handlePopup, isOpen, popupMessage };
};
