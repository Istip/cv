import styled from 'styled-components';
import { tokens } from '../UI';

export const BigTitleWrapper = styled.div`
  padding-bottom: 20px;
  width: 100%;
  border-bottom: 1px solid ${tokens.colors.primaryLight1};
  margin-bottom: 20px;

  &:not(:first-child) {
    margin-top: 40px;
  }
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

export const HeaderWrapper = styled.div`
  text-align: center;
  display: none;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const MainContainer = styled.div`
  padding: 20px;
  max-width: 650px;
`;
