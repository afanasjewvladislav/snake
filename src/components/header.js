import React, { useContext } from 'react';
import { AppBar, AppBarTitle, AppBarAction, MoreVertSVGIcon } from 'react-md';
import { SnakeGameContext } from '../context/SnakeGameContext';

const Header = () => {
  const { count, maxCount } = useContext(SnakeGameContext);

  return (
    <AppBar id="simple-usage-app-bar" theme="primary">
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
      {/* <AppBarAction id="simple-usage-search" first aria-label="Search"> */}
      {/*  <MoreVertSVGIcon */}
      {/*    onClick={() => { */}
      {/*      console.log('TEST'); */}
      {/*    }} */}
      {/*  /> */}
      {/* </AppBarAction> */}
    </AppBar>
  );
};

export default Header;
