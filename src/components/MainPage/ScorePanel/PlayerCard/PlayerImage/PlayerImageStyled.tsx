import styled from 'styled-components';
import userImage from '../../../../../assets/playerCard/user-example.png';

export const PlayerImageStyled = styled.div`
  background-image: url(${userImage});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border: 3px white solid;
  border-radius: 100%;
  align-items: center;
  margin: auto 0.5em;
  width: 40%;
  height: 70%;
  max-width: 100%;
  max-height: 100%;
  position: relative;
`;
