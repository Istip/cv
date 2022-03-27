import styled from 'styled-components';
import { tokens } from '../UI';

export const CardWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const CardYear = styled.div`
  padding: 10px;
  text-align: right;
  min-width: 100px;
`;

export const CardContent = styled.div`
  background: ${tokens.colors.primaryWhite};
  padding: 10px 20px;
  border: 1px solid ${tokens.colors.primaryWhite};
  cursor: pointer;
  transition: 200ms ease;

  &:hover {
    border: 1px solid ${tokens.colors.primaryLight2};
  }
`;
