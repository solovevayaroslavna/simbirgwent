import { Card, styled } from '@material-ui/core';
import '../../theme/test.css';

const CardStyled = styled(Card)({
  backgroundColor: 'var(--background)',
  color: 'var(--color-text-main)',
  width: '30vw',
  height: '5vh',
});

export default CardStyled;
