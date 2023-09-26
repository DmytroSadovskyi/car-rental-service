import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Translator = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'uk' : 'en';
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <>
      <button
        onClick={toggleLanguage}
        style={{ border: 'none', backgroundColor: 'transparent' }}
      >
        <span
          className={currentLanguage === 'en' ? 'fi fi-ua' : 'fi fi-gb'}
        ></span>
      </button>
    </>
  );
};

export default Translator;
