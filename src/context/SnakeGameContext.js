import React, { createContext, useReducer } from 'react';

import SnakeGameReducer from '../reducer/SnakeGameReducer';

export const SnakeGameContext = createContext({});

const SnakeGameProvider = ({ children }) => {
  const [items, dispatch] = useReducer(SnakeGameReducer, {
    isActive: false,
    newGame: true,
    snakeBody: [
      {
        cordX: 200,
        cordY: 200,
      },
    ],
    speed: 100,
    direction: 'right',
    appleCords: null,
    count: 0,
    maxCount: 0,
  });

  const setSnakeBody = (payload) => {
    dispatch({ type: 'SET_SNAKE_BODY', payload: { payload } });
    if (items.snakeBody.length !== payload.length) {
      const count = payload.length - 1;
      dispatch({ type: 'SET_COUNT', payload: { count } });
      if (count > items.maxCount) {
        dispatch({ type: 'SET_MAX_COUNT', payload: { count } });
      }
    }
  };

  const setDirection = (payload) => {
    dispatch({ type: 'SET_DIRECTION', payload: { payload } });
  };

  const setIsActive = (payload) => {
    dispatch({ type: 'SET_IS_ACTIVE', payload: { payload } });
    if (items.newGame) {
      dispatch({ type: 'SET_NOT_NEW_GAME', payload: { payload: false } });
    }
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
        count: items.count,
        maxCount: items.maxCount,
        newGame: items.newGame,
      }}
    >
      {children}
    </SnakeGameContext.Provider>
  );
};

export default SnakeGameProvider;
