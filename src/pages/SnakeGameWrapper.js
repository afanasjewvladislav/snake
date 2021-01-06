import React, { useEffect, useRef, useContext } from 'react';
import { Card } from 'react-md';

import codes from '../entity/buttonCodes';

import { SnakeGameContext } from '../context/SnakeGameContext';

const Snake = () => {
  const ref = useRef(null);

  const {
    snakeBody,
    setSnakeBody,
    speed,
    direction,
    setDirection,
    isActive,
    setIsActive,
    appleCords,
    setAppleCords,
  } = useContext(SnakeGameContext);

  useEffect(() => {
    if (isActive) {
      scene();
    }
  }, [snakeBody, isActive]);

  useEffect(() => {
    random();
  }, []);

  // перехват нажатия кнопки на клавиатуре
  useEffect(() => {
    document.addEventListener('keydown', press);
    return () => {
      document.removeEventListener('keydown', press);
    };
  }, [isActive, direction]);

  const press = (event) => {
    if (!codes.includes(event.code)) {
      return;
    }

    switch (true) {
      case event.code === 'ArrowUp' && direction !== 'down':
        setDirection('up');
        break;
      case event.code === 'ArrowDown' && direction !== 'up':
        setDirection('down');
        break;
      case event.code === 'ArrowLeft' && direction !== 'right':
        setDirection('left');
        break;
      case event.code === 'ArrowRight' && direction !== 'left':
        setDirection('right');
        break;
      case event.code === 'Space': {
        isActive ? setIsActive(false) : setIsActive(true);
        break;
      }
      default:
        break;
    }
  };

  const scene = () => {
    if (ref.current) {
      const canvas = ref.current;
      const context = canvas.getContext('2d');
      const appleCtx = canvas.getContext('2d');
      if (context) {
        setTimeout(() => {
          canvas.width = 800;
          canvas.height = 800;

          const snakeTail = [];
          const snake = snakeBody.map((item, index) => {
            const elem = { ...item };
            const { cordX, cordY } = elem;
            const { appleCordX, appleCordY } = appleCords;
            const isHead = index === 0;

            if (isHead) {
              context.fillStyle = 'rgb(255,255,0)';
            } else {
              context.fillStyle = 'rgb(255,127,80)';
            }

            let { x, y } = changeDirectionSnake(index, cordX, cordY);
            // console.log('x', x);
            // console.log('y', y);

            // если уходит за границы
            if (x > canvas.width) {
              x = 0;
            }

            if (x < 0) {
              x = canvas.width;
            }

            if (y > canvas.height) {
              y = 0;
            }

            if (y < 0) {
              y = canvas.height;
            }

            elem.cordX = x;
            elem.cordY = y;
            context.fillRect(x, y, 20, 20);

            if (x === appleCordX && y === appleCordY) {
              random();
              snakeTail.push({
                cordX: x,
                cordY: y,
              });
            }

            appleCtx.fillStyle = 'red';
            appleCtx.fillRect(appleCordX, appleCordY, 20, 20);
            return elem;
          });
          const result = snake.concat(snakeTail);
          setSnakeBody(result);
        }, speed);
      }
    }
  };

  const changeDirectionSnake = (index, cordX, cordY) => {
    const step = 20;
    const isHead = index === 0;
    let x = cordX;
    let y = cordY;

    if (isHead) {
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
    } else {
      x = snakeBody[index - 1].cordX;
      y = snakeBody[index - 1].cordY;
    }
    return { x, y };
  };

  const random = () => {
    const max = 800;
    const min = 20;
    const num = 20;

    const appleNesCordX =
      Math.floor(Math.floor(Math.random() * (max - min + 1) + min) / num) * num;
    const appleNesCordY =
      Math.floor(Math.floor(Math.random() * (max - min + 1) + min) / num) * num;

    setAppleCords({
      appleCordX: appleNesCordX,
      appleCordY: appleNesCordY,
    });
  };

  return (
    <section>
      <Card
        style={{
          width: '800px',
          height: '800px',
          background: 'rgb(64,179,129)',
        }}
      >
        <canvas id="responsive-canvas" ref={ref} />
      </Card>
    </section>
  );
};

export default Snake;
