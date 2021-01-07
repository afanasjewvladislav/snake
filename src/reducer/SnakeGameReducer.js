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
    case 'SET_COUNT':
      return {
        ...state,
        count: payload.count,
      };
    case 'SET_MAX_COUNT':
      return {
        ...state,
        maxCount: payload.count,
      };
    default:
      return state;
  }
};

export default SnakeGameReducer;
