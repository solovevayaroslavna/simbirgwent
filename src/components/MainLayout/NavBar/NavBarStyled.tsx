import styled from 'styled-components';
import { colors } from '../../../theme/variables';

export const NavBarStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
  height: 6%;
  background-color: ${colors.commonGameAreaBackgroundColor};
  & > a {
    text-decoration: none;
  }
`;
