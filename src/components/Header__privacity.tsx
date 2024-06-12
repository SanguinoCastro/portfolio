'use client';
import { useLanguage } from '@/app/context/LanguageContext';
import { useDarkMode } from '../app/context/DarkModeContext';
import es from '../assets/icons/es.svg';
import esWhite from '../assets/icons/es-white.svg';
import Image from 'next/image';

const Header__privacity: React.FC = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useDarkMode();

  return (
    <header className='content__header content shadow w-full h-[6rem] flex px-[5rem] !justify-between items-center   border-rad overflow-auto'>
      <div className='flex items-center gap-10'>
        <a href='/'>
          {!isDarkMode ? (
            <Image
              src={es}
              alt='es'
              width={55}
              height={55}
              className='scale-[115%]'
            />
          ) : (
            <Image
              src={esWhite}
              alt='es'
              width={55}
              height={55}
              className='scale-[115%]'
            />
          )}
        </a>
        {language === 'es' ? (
          <p>
            <span className='capital font-bold'>E</span>ncuentra{' '}
            <span className='capital font-bold'>S</span>olución a tus proyectos
            web
          </p>
        ) : language === 'ca' ? (
          <p>
            <span className='capital font-bold'>E</span>mpesca{' '}
            <span className='capital font-bold'>S</span>olucions als teus
            projectes web
          </p>
        ) : (
          <p>
            <span className='capital font-bold'>E</span>ncounter{' '}
            <span className='capital font-bold'>S</span>olutions for your web
            projects
          </p>
        )}
      </div>
    </header>
  );
};
export default Header__privacity;
