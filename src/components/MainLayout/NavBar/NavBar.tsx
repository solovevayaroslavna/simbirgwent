import React from 'react';
import { CustomLink } from './CustomLink';
import { NavBarStyled } from './NavBarStyled';

export function NavBar() {
  return (
    <NavBarStyled>
      <CustomLink to="/">Колода</CustomLink>
      <CustomLink to="/game">Играть</CustomLink>
      <CustomLink to="/results">Результаты</CustomLink>
      <CustomLink to="/auth">Авторизация</CustomLink>
    </NavBarStyled>
  );
}
