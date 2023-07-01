import styled from 'styled-components';
import { Box } from '@material-ui/core';
import '../../../theme/colors.css';

export const CardWrapper = styled(Box)`
  height: 100%;
  width: 100%;
  position: relative;
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

export const TypeOfArmyStyled = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  background-color: red;
  height: 90%;
  z-index:-1;
`;
