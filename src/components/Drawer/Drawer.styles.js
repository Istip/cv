import styled from 'styled-components';
import avatar from '../../assets/avatar.jpg';
import { tokens } from '../UI';

export const DrawerBody = styled.div`
  background: ${tokens.colors.primaryWhite};
  min-width: 250px;
  max-width: 250px;
  min-height: 100vh;
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const DrawerImage = styled.div`
  width: 100%;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${avatar});
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  background: ${tokens.colors.primary};
  color: ${tokens.colors.white};
`;

export const DrawerContent = styled.div`
  padding: 15px;
`;

export const Content = styled.div`
  opacity: 1;
  cursor: pointer;
  transition: 200ms ease;
`;

export const ContentWrapper = styled.div`
  &:hover > div {
    opacity: 0.5;
  }

  &:hover > div:hover {
    opacity: 1;
  }
`;
