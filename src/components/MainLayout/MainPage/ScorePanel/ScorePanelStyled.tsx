import styled from 'styled-components';

export const ScorePanelStyled = styled.div`
  display: grid;
  grid-area: left;
  grid-template-rows: 18% 18% 28% 18% 18%;
  grid-template-areas: 
    "enemyLeaderCard"
    "enemyPlayerCard"
    "centerPanel"
    "playerPlayerCard"
    "playerLeaderCard";
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;
