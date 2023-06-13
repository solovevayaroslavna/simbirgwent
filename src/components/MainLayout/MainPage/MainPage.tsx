import React from 'react';
import { ScorePanel } from './ScorePanel';
import { CommonGameArea } from './CommonGameArea';
import { MainPageStyled } from './MainPageStyled';

export function MainPage() {
  return (
    <MainPageStyled>
      <ScorePanel />
      <CommonGameArea />
    </MainPageStyled>
  );
}
