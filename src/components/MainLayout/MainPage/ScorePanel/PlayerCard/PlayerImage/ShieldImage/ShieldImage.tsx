import React from 'react';
import { ShieldImageStyled } from './ShieldImageStyled';
import monstersPic from '../../../../../../../assets/playerCard/monsters.png';
import northPic from '../../../../../../../assets/playerCard/northern-realms.png';
import { ShieldImageProps } from './ShieldImage.types';

export function ShieldImage(fraction: ShieldImageProps) {
  function chooseImage(fractionName: ShieldImageProps): String {
    if (fractionName.fraction === 'NORTH_KINGDOMS') {
      return northPic;
    }
    return monstersPic;
  }

  const url = chooseImage(fraction);

  return (
    <ShieldImageStyled $fraction={url} />
  );
}
