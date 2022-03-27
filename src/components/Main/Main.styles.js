import styled from 'styled-components';
import { tokens } from '../UI';

export const BigTitleWrapper = styled.div`
  padding-bottom: 20px;
  width: 100%;
  border-bottom: 1px solid ${tokens.colors.primaryLight1};
  margin-bottom: 20px;
`;

export const ContentBox = styled.div``;

export const BadgeContainer = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  cursor: pointer;

  &:hover > div {
    opacity: 0.5;
  }

  &:hover > div:hover {
    opacity: 1;
  }
`;
