import styled from 'styled-components';

export const ShieldImageStyled = styled.div< { $fraction, $type } >`
  background-image: url(${(props) => props.$fraction});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 40%;
  height: 40%;
  position: absolute;
  top: ${(props) => (props.$type === 'opponent' ? '0%' : '70%')}
`;
