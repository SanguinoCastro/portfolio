'use client';

import { useLanguage } from '@/app/context/LanguageContext';

const About__button = () => {
  const { language } = useLanguage();
  return (
    <button
      onClick={() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }}
      className='olive w-[25.3rem] h-[5rem] border-rad text-[1.8rem] transition-all duration-300'
    >
      {language === 'es' ? (
        <>¡Contáctame!</>
      ) : language === 'ca' ? (
        <>Contacta'm!</>
      ) : (
        <>Contact me!</>
      )}
    </button>
  );
};
export default About__button;
