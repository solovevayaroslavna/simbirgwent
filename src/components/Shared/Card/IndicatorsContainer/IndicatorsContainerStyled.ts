import styled from 'styled-components';

export const LeftIndicatorsContainerStyled = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10%;
  //т.к height/width = 15/8, то для того чтобы получить ширину, такую же как высоту, нужно умножить на 15/8
  width: calc(15*15%/8);
  z-index:10;
`;
