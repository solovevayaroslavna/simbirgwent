import styled from 'styled-components';
import { Card, Typography } from '@material-ui/core';
import '../../theme/test.css';

export const IndicatorStyled = styled.div<{ Mytop?: string }>`
position: absolute;
display:flex;
justify-content: center;
align-items:center;
left: 0%; 
top: ${(props) => (props.Mytop ? props.Mytop : '0%')};
height: 15%;
width: calc(15*15%/8);
font-size:calc(100vh/15);
border-radius: 50%;
background-color: var(--color-text-main);
color:var(--color-text-second);
`;

export const TypeIndicatorStyled = styled.div`
position: absolute;
display:flex;
justify-content: center;
align-items:center;
left: 0%; 
top: 25%;
height: 15%;
width: calc(15*15%/8);
font-size:calc(100vh/15);
background-color: var(--background-type);
border-radius: 50%;
color:var(--color-text-second);
`;
export const ImgContainer = styled.div<{ backgroundImage?: string }>`
height: 90%;
width: calc(25*15%/8);
background: url(${(props) => props.backgroundImage}) 50% 60% no-repeat;
background-size: contain;
`;

export const CardBody = styled.div<{ backgroundImage?: string }>`
width: 100%;
height: 80vh;
display:block;
background: url(${(props) => props.backgroundImage}) no-repeat;
background-size: cover;
`;

export const CardStyled = styled(Card)({
  backgroundColor: 'var(--color-text-main)',
  color: 'var(--color-text-second)',
  width: 'inherit',
  height: '20vh',
  fontSize: 'calc(100vh/30)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
});

export const TypographyStyled = styled(Typography)({
  fontSize: 'calc(100vh/30)',
  fontWeight: 'bold',
});
