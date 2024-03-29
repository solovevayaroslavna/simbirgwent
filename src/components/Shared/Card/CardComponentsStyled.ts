import styled from 'styled-components';
import {
  Typography, Card, Box,
} from '@material-ui/core';
import '../../../theme/colors.css';

export const CardWrapper = styled(Box)`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const LeftIndicatorsContainerStyled = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10%;
  //т.к height/width = 15/8, то для того чтобы получить ширину, такую же как высоту, нужно умножить на 15/8
  width: calc(15*15%/8);
`;

export const DownIndicatorsContainerStyled = styled.div`
  position: absolute;
  height: 15%;
  width: 100%;
  top: 80%;
  display: flex;
  flex-direction: row-reverse;
  gap: 10%;
`;

export const IndicatorStyled = styled.div <{ fs: number, minimized: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.minimized ? '15%' : '18%')};
  width: '100%';
  font-size: ${(props) => `${props.fs}px`};
  border-radius: 50%;
  border : 0.1px solid var(--color-black);
  background-color: var(--color-text-main);
  color: var(--color-text-second);
  font-weight: bold;
  z-index: var(--z-index-indicator);
`;

export const PowerIndicatorStyled = styled.div<{ minimized?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.minimized ? '15%' : '18%')};
  width: '100%';
  border-radius: 50%;
  border : 0.1px solid var(--color-black);
  background-color: var(--color-text-main);
  color: var(--color-text-second);
  z-index: var(--z-index-indicator);
`;

export const TypeIndicatorStyled = styled.div<{ minimized?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.minimized ? '100%' : '18%')};
  width: ${(props) => (props.minimized ? 'calc(15*15%/8)' : '100%')};
  background-color: var(--background-type);
  border-radius: 50%;
  border : 0.1px solid var(--color-black);
  color: var(--color-text-second);
  z-index: var(--z-index-indicator);
`;

export const AbilityStyled = styled.div<{ minimized?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.minimized ? '100%' : '18%')};
  width: ${(props) => (props.minimized ? 'calc(15*15%/8)' : '100%')};
  border-radius: 50%;
  border : 0.1px solid var(--color-black);
  background-color: var(--color-text-main);
  color: var(--color-text-second);
  z-index: var(--z-index-indicator);
`;

export const ImgContainer = styled.div <{ backgroundImage: string }>`
  height: 80%;
  width: 80%;
  background: url(${(props) => props.backgroundImage}) 60% 60% no-repeat;
  background-size: contain;
`;

export const CardBody = styled.div <{ backgroundImage: string }>`
  width: 100%;
  height: 80%;
  display: block;
  background: url(${(props) => props.backgroundImage}) no-repeat;
  background-size: cover;
`;

export const CardBodyMinimized = styled.div <{ backgroundImage: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: url(${(props) => props.backgroundImage}) no-repeat;
  background-size: cover;
`;

export const TypeOfArmyStyled = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  background-color: red;
  height: 90%;
  z-index: var(--z-index-background);
`;

export const CardStyled = styled(Card)`
  background-color: var(--color-text-main);
  padding: 2% 0;
  margin-left: 2%;
  color: var(--color-text-second);
  width: 100%;
  height: 20%;
  border-radius: 0;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const HeaderStyled = styled(Typography)`
  width: 100%;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
`;
