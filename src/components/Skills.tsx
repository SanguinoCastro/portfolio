'use client';
import nextWhite from '../assets/icons/Next_white.png';
import nextGreen from '../assets/icons/Next_green.png';
import typescriptWhite from '../assets/icons/Typescript--white.svg';
import typescriptGreen from '../assets/icons/Typescript--green.svg';
import tailwindWhite from '../assets/icons/Tailwind--white.svg';
import tailwindGreen from '../assets/icons/Tailwind--green.svg';
import javascriptWhite from '../assets/icons/JavaScript_white.png';
import javascriptGreen from '../assets/icons/JavaScript_green.png';
import html5White from '../assets/icons/HTML5--white.svg';
import html5Green from '../assets/icons/HTML5--green.svg';
import css3White from '../assets/icons/CSS3--white.svg';
import css3Green from '../assets/icons/CSS3--green.svg';
import bootstrapWhite from '../assets/icons/Bootstrap-white.svg';
import bootstrapGreen from '../assets/icons/Bootstrap-green.svg';
import nodeWhite from '../assets/icons/Node_white.png';
import nodeGreen from '../assets/icons/Node_green.png';
import gitWhite from '../assets/icons/github--white.svg';
import gitGreen from '../assets/icons/github--green.svg';
import jiraWhite from '../assets/icons/Jira_white.png';
import jiraGreen from '../assets/icons/Jira_green.png';
import reactWhite from '../assets/icons/React_white.png';
import reactGreen from '../assets/icons/React_green.png';
import sassWhite from '../assets/icons/Sass_white.png';
import sassGreen from '../assets/icons/Sass_green.png';
import Image from 'next/image';
import { useDarkMode } from '@/app/context/DarkModeContext';

const whiteSkills = [
  nextWhite,
  reactWhite,
  typescriptWhite,
  tailwindWhite,
  javascriptWhite,
  html5White,
  css3White,
  bootstrapWhite,
  nodeWhite,
  gitWhite,
  jiraWhite,
  sassWhite,
];

const greenSkills = [
  nextGreen,
  reactGreen,
  typescriptGreen,
  tailwindGreen,
  javascriptGreen,
  html5Green,
  css3Green,
  bootstrapGreen,
  nodeGreen,
  gitGreen,
  jiraGreen,
  sassGreen,
];
const Skills = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className='content__technologies w-full px-[2rem]  flex justify-around items-center'>
      {!isDarkMode
        ? whiteSkills.map((skill, index) => (
            <Image
              src={skill}
              alt='skill'
              height={50}
              key={index}
              className='skills__icon'
            />
          ))
        : greenSkills.map((skill, index) => (
            <Image
              src={skill}
              alt='skill'
              height={50}
              key={index}
              className='skills__icon'
            />
          ))}
    </div>
  );
};
export default Skills;
