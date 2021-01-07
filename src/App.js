import React from 'react';
import SnakeGameWrapper from './pages/SnakeGameWrapper';
import Header from './components/header';

const App = () => {
  return (
    <section>
      <Header />
      <SnakeGameWrapper />
    </section>
  );
};

export default App;
