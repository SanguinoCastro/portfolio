'use client';

import { useLanguage } from '@/app/context/LanguageContext';
import Image from 'next/image';
import download from '../assets/icons/download.svg';

const CV = () => {
  const { language } = useLanguage();
  const handleDownloadCV = () => {
    const cvUrl = '/EduardSanguinoCastro_CV.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'EduardSanguinoCastro_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <button
      className='button__download olive w-[25.3rem] h-[5rem] rounded-xl text-[1.8rem] transition-all duration-300 flex justify-center items-center gap-5 hover:scale-105'
      onClick={handleDownloadCV}
    >
      <Image src={download} alt='download' width={27} height={27} />
      {language === 'es'
        ? 'Descargar CV'
        : language === 'ca'
          ? 'Descarregar CV'
          : 'Download CV'}
    </button>
  );
};
export default CV;
