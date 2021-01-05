import React from 'react';
import { AppBar, AppBarTitle, AppBarAction, MoreVertSVGIcon } from 'react-md';
import GameWrapper from './pages/GameWrapper';

const App = () => {
  return (
    <section>
      <AppBar id="simple-usage-app-bar" theme="primary">
        <AppBarTitle
          id="simple-usage-title"
          className="rmd-typography--capitalize"
        >
          Змейка
        </AppBarTitle>
        <AppBarAction id="simple-usage-search" first aria-label="Search">
          <MoreVertSVGIcon />
        </AppBarAction>
      </AppBar>
      <GameWrapper />
    </section>
  );
};

export default App;
