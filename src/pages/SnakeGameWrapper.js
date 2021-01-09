import React, { useEffect, useRef, useContext } from 'react';
import { Card } from 'react-md';

import codes from '../entity/buttonCodes';

import { SnakeGameContext } from '../context/SnakeGameContext';

import './SnakeGameWrapper.sass';

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
    newGame,
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
    document.addEventListener('keydown', buttonManagement);
    return () => {
      document.removeEventListener('keydown', buttonManagement);
    };
  }, [isActive, direction]);

  const buttonManagement = (event) => {
    if (!codes.includes(event.code)) {
      return;
    }

    const up = ['ArrowUp', 'KeyW'].some((item) => item === event.code);
    const down = ['ArrowDown', 'KeyS'].some((item) => item === event.code);
    const left = ['ArrowLeft', 'KeyA'].some((item) => item === event.code);
    const right = ['ArrowRight', 'KeyD'].some((item) => item === event.code);

    switch (true) {
      case up && direction !== 'down':
        setDirection('up');
        break;
      case down && direction !== 'up':
        setDirection('down');
        break;
      case left && direction !== 'right':
        setDirection('left');
        break;
      case right && direction !== 'left':
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

            const { x, y } = changeDirectionSnake(index, cordX, cordY, canvas);
            // console.log('x', x);
            // console.log('y', y);

            elem.cordX = x;
            elem.cordY = y;

            if (x === appleCordX && y === appleCordY) {
              random();
              snakeTail.push({
                cordX: x,
                cordY: y,
              });
            }

            if (isHead) {
              context.fillStyle = '#FFEB3B';
            } else {
              context.fillStyle = '#009688';
            }

            context.fillRect(x, y, 20, 20);

            appleCtx.fillStyle = 'red';
            appleCtx.fillRect(appleCordX, appleCordY, 20, 20);
            return elem;
          });

          // Проверка на пересечение с хвостом.
          const { cordX, cordY } = snake[0];
          let check = false;
          snakeBody.forEach((item, idx) => {
            if (item.cordX === cordX && item.cordY === cordY) {
              const result = snake.slice(0, idx - 1);
              setSnakeBody(result);
              check = true;
            }
          });

          if (!check) {
            const result = snake.concat(snakeTail);
            setSnakeBody(result);
          }
        }, speed);
      }
    }
  };

  const changeDirectionSnake = (index, cordX, cordY, canvas) => {
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

      // условия выхода за рамки canvas
      if (x >= canvas.width) {
        x = 0;
      }

      if (x < 0) {
        x = canvas.width - step;
      }

      if (y > canvas.height - step) {
        y = 0;
      }

      if (y < 0) {
        y = canvas.height - step;
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
    <section className="snake-game_wrapper">
      <div />
      <div>
        <Card className="snake-game_canvas-wrapper">
          <canvas id="responsive-canvas" ref={ref} />
        </Card>
      </div>
      {!isActive && !newGame && (
        <div className="snake-game_message snake-game_message-pause">ПАУЗА</div>
      )}
      {!isActive && newGame && (
        <div className="snake-game_message snake-game_message-start">
          Для старта нажмите клавишу Space!
        </div>
      )}
    </section>
  );
};

export default Snake;
