'use client';

import { useLanguage } from '@/app/context/LanguageContext';

const About__button = () => {
  const { language } = useLanguage();
  return (
    <button className='olive w-[25.3rem] h-[5rem] border-rad text-[1.8rem] transition-all duration-300'>
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
