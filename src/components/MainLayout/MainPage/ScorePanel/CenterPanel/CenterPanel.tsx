import React from 'react';
import {
  CenterPanelStyled, ContentContainer, DeckContainer, ButtonContainer, ButtonStyled,
} from './CenterPanelStyled';

export function CenterPanel() {
  return (
    <CenterPanelStyled>
      <ContentContainer>
        <DeckContainer />
        <ButtonContainer>
          <ButtonStyled>Спасовать</ButtonStyled>
          <ButtonStyled>Сдаться</ButtonStyled>
        </ButtonContainer>
      </ContentContainer>
    </CenterPanelStyled>
  );
}
