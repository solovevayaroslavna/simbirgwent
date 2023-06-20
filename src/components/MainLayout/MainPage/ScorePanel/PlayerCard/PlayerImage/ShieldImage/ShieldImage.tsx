import React from 'react';
import { ShieldImageStyled } from './ShieldImageStyled';
import monstersPic from '../../../../../../../assets/playerCard/monsters-shield.png';
import northPic from '../../../../../../../assets/playerCard/north-kingdoms-shield.png';
import { ShieldImageProps, Type } from './ShieldImage.types';

export function ShieldImage({ fraction, type }: ShieldImageProps) {
  let path: String = '';
  if (fraction === 'NORTH_KINGDOMS') {
    path = northPic;
  } else {
    path = monstersPic;
  }

  let typeName: String = '';
  if (type === Type.opponent) {
    typeName = 'opponent';
  } else {
    typeName = 'player';
  }

  return (
    <ShieldImageStyled fraction={path} type={typeName} />
  );
}
