import styled from 'styled-components';
import { tokens } from '../UI';

export const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 12px;
  right: 12px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border: 0;
  outline: 0;
  opacity: 1;
  background: ${tokens.colors.primaryLight1};
  border: 2px solid ${tokens.colors.primary};
  padding: 8px;
  border-radius: 16px;
  cursor: pointer;
  transition: 250ms ease;
  z-index: 4;

  &:hover {
    background: ${tokens.colors.primary};
  }
`;
