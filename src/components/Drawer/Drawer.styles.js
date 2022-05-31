import styled from 'styled-components';
import avatar from '../../assets/avatar.jpg';
import { tokens } from '../UI';

export const DrawerBody = styled.div`
  background: ${tokens.colors.primaryWhite};
  min-width: 250px;
  max-width: 250px;

  @media (max-width: 768px) {
    position: fixed;
    left: ${(props) => (props.show ? 0 : '-250px')};
    top: 0;
    bottom: 0;
    transition: 250ms ease;
    z-index: 4;
    overflow: scroll;
    height: 100vh;

    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 190px;
  top: 8px;
  outline: 0;
  border: 0;
  background: ${tokens.colors.primaryWhite};
  border-radius: 4px;
  padding: 4px 12px;
  color: ${tokens.colors.primary};
  cursor: pointer;

  @media (min-width: 768px) {
    visibility: hidden;
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

export const ContentWrapper = styled.div``;

export const Button = styled.div`
  margin: 20px;
  background: ${tokens.colors.primaryDark1};
  padding: 8px;
  border-radius: 4px;
  text-align: center;
  transition: 250ms ease;
  cursor: pointer;

  &:hover {
    background: ${tokens.colors.primaryDark2};
  }

  a {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;
