'use client';
import { useLanguage } from '@/app/context/LanguageContext';
const Footer = () => {
  const { language } = useLanguage();
  return (
    <footer className='footer content shadow flex justify-center items-center w-full h-[6rem] px-7 rounded-[1.6rem] '>
      <p>
        {language === 'es'
          ? 'Web realizada por '
          : language === 'ca'
            ? 'Web realitzada per '
            : 'Web created by '}
        <span className='capital font-bold'>E</span>duard{' '}
        <span className='capital font-bold'>S</span>anguino{' '}
      </p>
    </footer>
  );
};
export default Footer;
