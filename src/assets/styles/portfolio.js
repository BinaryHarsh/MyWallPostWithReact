// src/components/Portfolio/portfolioData.js

import net from './fullsize/1.jpg';
import c from './fullsize/2.jpg';
import html from './fullsize/3.jpg';
import css from './fullsize/4.jpg';
import javascript from './fullsize/5.jpg';
import react from './fullsize/6.jpg';
import java from './thumbnails/1.jpg';
import nodejs from './thumbnails/2.jpg';
import nextjs from './thumbnails/3.jpg';
import nestjs from './thumbnails/4.jpg';
import python from './thumbnails/5.jpg';

export const images = {
  net,
  c,
  html,
  css,
  javascript,
  react,
  java,
  nodejs,
  nextjs,
  nestjs,
  python,
};

export const portfolioItems = [
  {
    thumbnail: html,
    fullsize: html,
    category: 'HTML',
    name: 'HTML Project',
  },
  {
    thumbnail: css,
    fullsize: css,
    category: 'CSS',
    name: 'CSS Project',
  },
  {
    thumbnail: javascript,
    fullsize: javascript,
    category: 'JavaScript',
    name: 'JS Game App',
  },
  {
    thumbnail: react,
    fullsize: react,
    category: 'React',
    name: 'React Portfolio',
  },
  {
    thumbnail: java,
    fullsize: java,
    category: 'Java',
    name: 'Java Desktop App',
  },
  {
    thumbnail: nodejs,
    fullsize: nodejs,
    category: 'NodeJS',
    name: 'Node API Project',
  },
  {
    thumbnail: nextjs,
    fullsize: nextjs,
    category: 'NextJS',
    name: 'Next Website',
  },
  {
    thumbnail: nestjs,
    fullsize: nestjs,
    category: 'NestJS',
    name: 'Nest Backend',
  },
  {
    thumbnail: python,
    fullsize: python,
    category: 'Python',
    name: 'Python Script',
  },
  {
    thumbnail: net,
    fullsize: net,
    category: '.NET',
    name: '.NET Web App',
  },
  {
    thumbnail: c,
    fullsize: c,
    category: 'C Language',
    name: 'C Compiler Clone',
  },
];
