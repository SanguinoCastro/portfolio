'use client';
import Image from 'next/image';
import image2 from '../assets/images/imagen2.png';

import React, { useEffect } from 'react';

const Animation = () => {
  useEffect(() => {
    const el = document.getElementById('animation');

    const handleMouseMove = (e: MouseEvent) => {
      if (!el) return;
      const { clientHeight, clientWidth } = el;

      const rect = el.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;

      const yRotation = ((offsetX - clientWidth / 2) / clientWidth) * 20;

      const xRotation = ((offsetY - clientHeight / 2) / clientHeight) * 20;

      const transformString = `perspective(500px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;

      el.style.transform = transformString;
    };

    const handleMouseOut = () => {
      if (!el) return;
      el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
    };

    if (el) {
      el.addEventListener('mousemove', handleMouseMove);
      el.addEventListener('mouseout', handleMouseOut);

      return () => {
        el.removeEventListener('mousemove', handleMouseMove);
        el.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, []);

  return <div id='animation' className='border-rad'></div>;
};

export default Animation;
