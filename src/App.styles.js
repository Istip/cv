import styled from 'styled-components';
import { tokens } from './components/UI';

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  overflow-x: hidden;
`;

export const MainWrapper = styled.div`
  position: relative;
`;

export const MainBackdrop = styled.div`
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.show ? 0.75 : 0)};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${tokens.colors.primaryDark2};
  z-index: 2;
  transition: 250ms ease;
  width: 1000px;
  overflow: hidden;

  @media (min-width: 768px) {
    display: none;
  }
`;
