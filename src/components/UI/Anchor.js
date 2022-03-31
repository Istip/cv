import styled from 'styled-components';
import { Text } from './';
import tokens from './tokens';

const Anchor = ({ ...props }) => {
  return (
    <AnchorWrapper>
      <A {...props}>
        <Text variant="medium10" tag="div">
          {props.children}
        </Text>
      </A>
    </AnchorWrapper>
  );
};

const A = styled.a`
  text-decoration: none;
  color: ${tokens.colors.white};
`;

const AnchorWrapper = styled.div`
  margin-top: 20px;
  background: ${tokens.colors.primaryLight1};
  padding: 4px 8px;
  border-radius: 4px;
  width: 80px;
  text-align: center;
  transition: 250ms ease;

  &:hover {
    background: ${tokens.colors.primary};
  }
`;

export default Anchor;
