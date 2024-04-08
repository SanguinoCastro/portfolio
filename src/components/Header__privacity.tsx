'use client';
import { useLanguage } from '@/app/context/LanguageContext';
import NavbarCollapse from './NavbarCollapse';

const Header__privacity: React.FC = () => {
  const { language } = useLanguage();

  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');

    if (targetId) {
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        if (typeof window === 'undefined') return;
        window.scrollTo({
          top: rect.top + window.scrollY,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <header className='content__header content shadow w-full h-[5.2rem] flex px-[5rem] !justify-between items-center   border-rad overflow-auto'>
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
    </header>
  );
};
export default Header__privacity;
