import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import SnakeGameProvider from './context/SnakeGameContext';
import './index.sass';

ReactDOM.render(
  <React.StrictMode>
    <SnakeGameProvider>
      <App />
    </SnakeGameProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
