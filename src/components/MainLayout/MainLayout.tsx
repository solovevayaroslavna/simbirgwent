import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './NavBar';
import { MainPage } from './MainPage';
import { Deck } from '../RoutesComponents/Deck';
import { Auth } from '../RoutesComponents/Auth';
import { Results } from '../RoutesComponents/Results';
import { MainLayoutStyled } from './MainLayoutStyled';

export function MainLayout() {
  return (
    <MainLayoutStyled>
      <NavBar />
      <Routes>
        <Route path="/" element={<Deck />} />
        <Route path="/game" element={<MainPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </MainLayoutStyled>
  );
}
