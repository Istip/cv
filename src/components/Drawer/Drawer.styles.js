import styled from 'styled-components';
import avatar from '../../assets/avatar.png';
import { tokens } from '../UI';

export const DrawerBody = styled.div`
  background: ${tokens.colors.primaryWhite};
  width: 200px;
  height: 100vh;
`;

export const DrawerImage = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
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
