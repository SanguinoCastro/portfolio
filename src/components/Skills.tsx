'use client';
import nextWhite from '../assets/icons/Next-white.svg';
import nextGreen from '../assets/icons/Next-green.svg';
import typescriptWhite from '../assets/icons/Typescript--white.svg';
import typescriptGreen from '../assets/icons/Typescript--green.svg';
import tailwindWhite from '../assets/icons/Tailwind--white.svg';
import tailwindGreen from '../assets/icons/Tailwind--green.svg';
import javascriptWhite from '../assets/icons/JavaScript-white.svg';
import javascriptGreen from '../assets/icons/JavaScript-green.svg';
import html5White from '../assets/icons/HTML5--white.svg';
import html5Green from '../assets/icons/HTML5--green.svg';
import css3White from '../assets/icons/CSS3--white.svg';
import css3Green from '../assets/icons/CSS3--green.svg';
import bootstrapWhite from '../assets/icons/Bootstrap-white.svg';
import bootstrapGreen from '../assets/icons/Bootstrap-green.svg';
import nodeWhite from '../assets/icons/Node-white.svg';
import nodeGreen from '../assets/icons/Node-green.svg';
import githubWhite from '../assets/icons/github--white.svg';
import githubGreen from '../assets/icons/github--green.svg';
import gitWhite from '../assets/icons/Git-white.svg';
import gitGreen from '../assets/icons/Git-green.svg';
import jiraWhite from '../assets/icons/Jira-white.svg';
import jiraGreen from '../assets/icons/Jira-green.svg';
import reactWhite from '../assets/icons/React-white.svg';
import reactGreen from '../assets/icons/React-green.svg';
import sassWhite from '../assets/icons/Sass-white.svg';
import sassGreen from '../assets/icons/Sass-green.svg';
import Image from 'next/image';
import { useDarkMode } from '@/app/context/DarkModeContext';

// fbfbfbff white
// e2e2e2ff darkWhite
// 688B93 blue
// #222D11 green
// 010200ff darkgreen
// #F6D069 yellow
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
  githubWhite,
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
  githubGreen,
  jiraGreen,
  sassGreen,
];
const Skills = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className='content__technologies w-full px-[2rem]  flex justify-around items-center'>
      {isDarkMode
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
