import styled from 'styled-components';
import userImage from '../../../../../../assets/playerCard/user-example.png';

export const PlayerImageStyled = styled.div`
  background-image: url(${userImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 3px white solid;
  border-radius: 100%;
  margin: auto;
  width: 40%;
  aspect-ratio: 1;
  position: relative;
`;
