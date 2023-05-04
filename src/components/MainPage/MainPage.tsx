import React from 'react';
import { ScorePanel } from './ScorePanel';
import { CommonGameArea } from './CommonGameArea';

export function MainPage() {
  return (
    <div>
      <ScorePanel />
      <CommonGameArea />
    </div>
  );
}
