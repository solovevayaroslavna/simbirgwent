import React from 'react';
import { NavBar } from './NavBar';
import { MainPage } from './MainPage';
import { MainLayoutStyled } from './MainLayoutStyled';

// TODO transform component into hook where MainPage is a childProp
export function MainLayout() {
  return (
    <MainLayoutStyled>
      <NavBar />
      <MainPage />
    </MainLayoutStyled>
  );
}
