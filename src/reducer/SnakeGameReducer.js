const SnakeGameReducer = (state, { type, payload }) => {
  if (!payload) {
    return state;
  }

  switch (type) {
    case 'SET_SNAKE_BODY':
      return {
        ...state,
        snakeBody: payload.payload,
      };
    case 'SET_DIRECTION':
      return {
        ...state,
        direction: payload.payload,
      };
    case 'SET_IS_ACTIVE':
      return {
        ...state,
        isActive: payload.payload,
      };
    case 'SET_APPLE_CORDS':
      return {
        ...state,
        appleCords: payload.payload,
      };
    default:
      return state;
  }
};

export default SnakeGameReducer;
