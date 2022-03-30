import styled from 'styled-components';
import { tokens } from '../UI';

export const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
`;

export const Button = styled.button`
  border: 0;
  outline: 0;
  background: ${tokens.colors.primary}55;
  border: 2px solid ${tokens.colors.primaryLight1};
  padding: 8px;
  border-radius: 16px;
  cursor: pointer;
  z-index: 4;
`;
