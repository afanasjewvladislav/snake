import React, { useContext } from 'react';
import { AppBar, AppBarTitle, AppBarAction, MoreVertSVGIcon } from 'react-md';
import SnakeGameWrapper from './pages/SnakeGameWrapper';
import { SnakeGameContext } from './context/SnakeGameContext';

const App = () => {
  const { count, maxCount } = useContext(SnakeGameContext);

  return (
    <section>
      <AppBar id="simple-usage-app-bar" theme="primary">
        <AppBarTitle
          id="simple-usage-title"
          className="rmd-typography--capitalize"
        >
          Змейка
        </AppBarTitle>
        <AppBarTitle
          id="simple-usage-title"
          className="rmd-typography--capitalize"
        >
          Текущий счет: {count}
        </AppBarTitle>
        <AppBarTitle
          id="simple-usage-title"
          className="rmd-typography--capitalize"
        >
          Рекорд: {maxCount}
        </AppBarTitle>
        <AppBarAction id="simple-usage-search" first aria-label="Search">
          <MoreVertSVGIcon />
        </AppBarAction>
      </AppBar>
      <SnakeGameWrapper />
    </section>
  );
};

export default App;
