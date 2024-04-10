'use client';

import React, { useEffect } from 'react';

const Animation = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const el = document.getElementById('animation');

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!el) return;
      const { clientHeight, clientWidth } = el;

      const rect = el.getBoundingClientRect();
      let offsetX = 0,
        offsetY = 0;

      if ('touches' in e && e.touches && e.touches[0]) {
        offsetX = e.touches[0].clientX - rect.left;
        offsetY = e.touches[0].clientY - rect.top;
      } else if (e instanceof MouseEvent) {
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
      }

      const yRotation = ((offsetX - clientWidth / 2) / clientWidth) * 20;
      const xRotation = ((offsetY - clientHeight / 2) / clientHeight) * 20;
      const transformString = `perspective(500px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;

      el.style.transform = transformString;

      // Deshabilitar el scroll al manipular la imagen
      document.body.classList.add('no-scroll');
    };

    const handleReset = () => {
      if (!el) return;
      el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';

      // Habilitar el scroll cuando se termina de manipular la imagen
      document.body.classList.remove('no-scroll');
    };

    if (el) {
      el.addEventListener('mousemove', handleMove);
      el.addEventListener('mouseleave', handleReset);

      const options = { passive: true } as EventListenerOptions;
      el.addEventListener('touchmove', handleMove, options);
      el.addEventListener('touchend', handleReset);

      return () => {
        el.removeEventListener('mousemove', handleMove);
        el.removeEventListener('mouseleave', handleReset);
        el.removeEventListener('touchmove', handleMove, options);
        el.removeEventListener('touchend', handleReset);
      };
    }
  }, []);

  return <div id='animation' className='border-rad'></div>;
};

export default Animation;

// import React, { useEffect } from 'react';

// const Animation = () => {
//   useEffect(() => {
//     if (typeof window === 'undefined') return;
//     const el = document.getElementById('animation');

//     const handleMouseMove = (e: MouseEvent) => {
//       // if (typeof window === 'undefined') return;
//       if (!el) return;
//       const { clientHeight, clientWidth } = el;

//       const rect = el.getBoundingClientRect();
//       const offsetX = e.clientX - rect.left;
//       const offsetY = e.clientY - rect.top;

//       const yRotation = ((offsetX - clientWidth / 2) / clientWidth) * 20;

//       const xRotation = ((offsetY - clientHeight / 2) / clientHeight) * 20;

//       const transformString = `perspective(500px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;

//       el.style.transform = transformString;
//     };

//     const handleMouseOut = () => {
//       if (!el) return;
//       el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
//     };

//     if (el) {
//       el.addEventListener('mousemove', handleMouseMove);
//       el.addEventListener('mouseout', handleMouseOut);

//       return () => {
//         el.removeEventListener('mousemove', handleMouseMove);
//         el.removeEventListener('mouseout', handleMouseOut);
//       };
//     }
//   }, []);

//   return <div id='animation' className='border-rad'></div>;
// };

// export default Animation;
