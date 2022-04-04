import styled from 'styled-components';
import { tokens } from '../UI';

export const CardWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CardYear = styled.div`
  padding: 10px;
  text-align: right;
  min-width: 100px;

  @media (max-width: 768px) {
    text-align: left;
    padding: 10px 10px 10px 0;
  }
`;

export const CardContent = styled.div`
  background: ${tokens.colors.primaryWhite};
  padding: 10px 20px;
  border: 1px solid ${tokens.colors.primaryWhite};
  cursor: pointer;
  transition: 200ms ease;
  min-width: 300px;
  border-radius: 4px;

  &:hover {
    border: 1px solid ${tokens.colors.primaryLight2};
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;
