import styled from 'styled-components';

export const IndicatorStyled = styled.div <{ fs: number, minimized: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.minimized ? '15%' : '18%')};
  width: '100%';
  font-size: ${(props) => `${props.fs}px`};
  border-radius: 50%;
  border : 0.1px solid var(--color-black);
  background-color: var(--color-text-main);
  color: var(--color-text-second);
  font-weight: bold;
`;
