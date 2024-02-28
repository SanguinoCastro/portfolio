'use client';

import Image from 'next/image';
import es from '../assets/flags/flag_spain.svg';
import ca from '../assets/flags/flag_catalan.svg';
import en from '../assets/flags/flag_english.svg';
import { useDarkMode } from '../app/context/DarkModeContext';
import { useLanguage } from '@/app/context/LanguageContext';

const Language = () => {
  const { language, changeLanguage } = useLanguage();
  const { isDarkMode } = useDarkMode();

  return (
    <article className='flex flex-col pt-[2rem]'>
      <div className='flex text-[1.2rem] relative py-0'>
        <button
          className={` w-[3.25rem] h-[3.25rem] flex justify-center items-center rounded-full absolute left-[1.8rem] top-[-3.5rem]  pt-[0.25rem]  ${isDarkMode ? 'bg-zinc-800' : 'bg-white text-zinc-800 font-[800]'}  ${language === 'es' ? 'lang-active' : 'lang'}`}
          onClick={() => changeLanguage('es')}
        >
          ES
        </button>

        <button
          className={`w-[3.25rem] h-[3.25rem] flex justify-center items-center rounded-full left-[5.3rem] top-[-2rem] pt-[0.25rem] pr-[0.25rem] absolute ${isDarkMode ? 'bg-zinc-800' : 'bg-white text-zinc-800 font-[800]'} ${language === 'ca' ? 'lang-active' : 'lang'}`}
          onClick={() => changeLanguage('ca')}
        >
          CA
        </button>

        <button
          className={`w-[3.25rem] h-[3.25rem] flex justify-center items-center rounded-full left-[7.1rem] top-[1.5rem] pt-[0.25rem] ${isDarkMode ? 'bg-zinc-800' : 'bg-white text-zinc-800 font-[800]'} absolute ${language === 'en' ? 'lang-active' : 'lang'} `}
          onClick={() => changeLanguage('en')}
        >
          EN
        </button>
      </div>
      <div
        className={`w-[6.3rem] h-[6.3rem] bg-zinc-300 flex justify-center items-center rounded-full overflow-hidden mr-[1.5rem] shadow-inner ${isDarkMode ? 'shadow-md shadow-[var(--white)]' : ' shadow-md shadow-[var(--olive)]'}`}
      >
        {language === 'es' ? (
          <Image src={es} width={700} alt='es' />
        ) : language === 'ca' ? (
          <Image src={ca} width={700} alt='Català' />
        ) : (
          <Image src={en} width={700} alt='en' />
        )}
      </div>
    </article>
  );
};
export default Language;
