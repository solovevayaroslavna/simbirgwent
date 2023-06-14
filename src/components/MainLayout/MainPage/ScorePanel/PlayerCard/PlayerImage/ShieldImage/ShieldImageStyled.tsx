import styled from 'styled-components';

export const ShieldImageStyled = styled.div< { $fraction } >`
  background-image: url(${(props) => props.$fraction});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 40%;
  height: 40%;
  position: absolute;
  top: 70%;
`;
