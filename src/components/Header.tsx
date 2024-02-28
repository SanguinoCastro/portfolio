'use client';
import { useLanguage } from '@/app/context/LanguageContext';

const Header: React.FC = () => {
  const { language } = useLanguage();

  return (
    <header className='content shadow w-full h-[5.2rem] flex px-[5rem] !justify-between items-center   border-rad'>
      <div className='flex items-center gap-10'>
        <h3 className='capital'>ES</h3>
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

      <nav>
        <ul className='flex justify-between gap-10 text-[1.8rem] ml-[5rem]'>
          <li>
            <a href='#'>
              {language === 'es'
                ? 'Proyectos'
                : language === 'ca'
                  ? 'Projectes'
                  : 'Projects'}
            </a>
          </li>
          <li>
            <a href='#'>
              {language === 'es'
                ? 'Contacto'
                : language === 'ca'
                  ? 'Contacte'
                  : 'Contact'}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
