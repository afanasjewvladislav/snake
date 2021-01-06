import React, { createContext, useReducer } from 'react';

import SnakeGameReducer from '../reducer/SnakeGameReducer';

export const SnakeGameContext = createContext({});

const SnakeGameProvider = ({ children }) => {
  const [items, dispatch] = useReducer(SnakeGameReducer, {
    isActive: false,
    snakeBody: [
      {
        cordX: 200,
        cordY: 200,
      },
    ],
    speed: 100,
    direction: 'right',
    appleCords: null,
  });

  const setSnakeBody = (payload) => {
    dispatch({ type: 'SET_SNAKE_BODY', payload: { payload } });
  };

  const setDirection = (payload) => {
    dispatch({ type: 'SET_DIRECTION', payload: { payload } });
  };

  const setIsActive = (payload) => {
    dispatch({ type: 'SET_IS_ACTIVE', payload: { payload } });
  };

  const setAppleCords = (payload) => {
    dispatch({ type: 'SET_APPLE_CORDS', payload: { payload } });
  };

  return (
    <SnakeGameContext.Provider
      value={{
        dispatch,
        snakeBody: items.snakeBody,
        setSnakeBody,
        speed: items.speed,
        direction: items.direction,
        setDirection,
        isActive: items.isActive,
        setIsActive,
        appleCords: items.appleCords,
        setAppleCords,
      }}
    >
      {children}
    </SnakeGameContext.Provider>
  );
};

export default SnakeGameProvider;
