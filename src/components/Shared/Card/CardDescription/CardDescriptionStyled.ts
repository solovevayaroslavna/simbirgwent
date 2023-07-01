import styled from 'styled-components';
import {
  Typography, Card,
} from '@material-ui/core';

export const CardStyled = styled(Card)`
  background-color: var(--color-text-main);
  padding: 2% 0;
  margin-left: 2%;
  color: var(--color-text-second);
  width: 100%;
  height: 20%;
  border-radius: 0;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const HeaderStyled = styled(Typography)`
  width: 100%;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
`;
