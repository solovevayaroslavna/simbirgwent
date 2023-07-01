import styled from 'styled-components';

export const DownIndicatorsContainerStyled = styled.div`
  position: absolute;
  height: 15%;
  width: 100%;
  top: 80%;
  display: flex;
  flex-direction: row-reverse;
  gap: 10%;
`;

export const CardBodyMinimized = styled.div <{ backgroundImage: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: url(${(props) => props.backgroundImage}) no-repeat;
  background-size: cover;
`;
