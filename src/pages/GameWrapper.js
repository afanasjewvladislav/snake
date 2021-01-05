import React, { useEffect, useRef, useState } from 'react';

import codes from '../entity/buttonCodes';

const GameWrapper = () => {
  const ref = useRef(null);

  const [speed, setSpeed] = useState(100);
  const [cordX, setCordX] = useState(200);
  const [cordY, setCordY] = useState(200);
  const [direction, setDirection] = useState('right');
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      scene();
    }
  }, [cordX, cordY, isActive]);

  // перехват нажатия кнопки на клавиатуре
  useEffect(() => {
    document.addEventListener('keydown', press);
    return () => {
      document.removeEventListener('keydown', press);
    };
  }, [isActive]);

  const scene = () => {
    if (ref.current) {
      const canvas = ref.current;
      const context = canvas.getContext('2d');
      // console.log('RENDER');
      if (context) {
        const step = 10;
        setTimeout(() => {
          // console.log('ЗАДЕРЖКА');
          canvas.width = 1000;
          canvas.height = 800;

          let x = cordX;
          let y = cordY;
          console.log('x', x);
          console.log('y', y);

          // управление клавишами
          if (direction === 'right') {
            x += step;
          }
          if (direction === 'left') {
            x -= step;
          }
          if (direction === 'up') {
            y -= step;
          }
          if (direction === 'down') {
            y += step;
          }

          // если уходит за границы
          if (x > canvas.width) {
            x = 0;
          }

          if (x < 0) {
            x = 1000;
          }

          if (y > canvas.height) {
            y = 0;
          }

          if (y < 0) {
            y = 800;
          }

          setCordX(x);
          setCordY(y);
          context.fillRect(x, y, 10, 10);
        }, speed);
      }
    }
  };

  const press = (event) => {
    if (!codes.includes(event.code)) {
      return;
    }
    switch (event.code) {
      case 'ArrowUp':
        setDirection('up');
        break;
      case 'ArrowDown':
        setDirection('down');
        break;
      case 'ArrowLeft':
        setDirection('left');
        break;
      case 'ArrowRight':
        setDirection('right');
        break;
      case 'Space': {
        isActive ? setIsActive(false) : setIsActive(true);
        break;
      }
      default:
        break;
    }
  };

  return <canvas id="test" ref={ref} />;
};

export default GameWrapper;
