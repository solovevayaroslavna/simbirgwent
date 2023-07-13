import styled from 'styled-components';
// import { Button } from '@material-ui/core';
import WeatherBoard from '../../../../../assets/weatherCardArea/WeatherBoard.png';
import cardBoard from '../../../../../assets/battlefield/field-item.png';
import { colors } from '../../../../../theme/variables';

export const CenterPanelStyled = styled.div`
  display: flex;
  justify-item: center;
  width: 100%;
  height: 100%;
  background: url(${WeatherBoard}) no-repeat center / cover;
  padding: 10% 10%;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10%;
  width: 100%;
  height: 100%;
`;

export const DeckContainer = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  background: url(${cardBoard}) no-repeat center / cover;
  border: 1px solid ${colors.weatherDeckBackgroundColor};
  box-shadow: inset 0px 0px 10px ${colors.secondaryColor};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5%;
  width: 100%;
  height: 20%;
`;

export const ButtonStyled = styled.button`
  font-size: min(0.8vw, 1.4vh);
  color: ${colors.weatherColor};
  background-color: ${colors.weatherDeckBackgroundColor} ;
  flex-grow: 1;
  border: none;
  border-radius: 5%;
  &:active {
    background-color: ${colors.secondaryColor};
  }
`;
