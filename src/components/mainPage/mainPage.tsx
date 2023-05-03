import React from 'react';
import { OpponentsPanel } from '../opponentsPanel';
import { CommonGameArea } from '../commonGameArea';

export function MainPage() {
  return (
    <div>
      <OpponentsPanel />
      <CommonGameArea />
    </div>
  );
}
