import React from 'react';
import { ScorePanel } from './ScorePanel';
import { CommonGameArea } from './CommonGameArea';
import { MainPageStyled } from './MainPageStyled';

// TODO transform component into hook where MainPage is a childProp
export function MainPage() {
  return (
    <MainPageStyled>
      <ScorePanel />
      <CommonGameArea />
    </MainPageStyled>
  );
}
