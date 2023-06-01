import styled from 'styled-components';
import { colors } from '../../../theme/variables';

export const Card = styled.div`
    width: 15%;
    height: 70%;
    margin: 0.1em 0.1em 0.1em 0.1em;
    background-color: ${colors.primaryColor};

  &:hover {
    transform: scale(1.2);
  }
`;
