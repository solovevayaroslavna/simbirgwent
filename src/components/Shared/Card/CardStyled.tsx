import styled from 'styled-components';
import { colors } from '../../../theme/variables';

export const Card = styled.div`
    width: 10vh;
    height: 15vh;
    margin: 0 0.2%;
    background-color: ${colors.primaryColor};

  &:hover {
    transform: scale(1.2);
  }
`;
