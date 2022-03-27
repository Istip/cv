import styled from 'styled-components';
import { Text, tokens } from './';

const Badge = ({ title, color, text }) => {
  return (
    <BadgeWrapper bg={color}>
      <Text
        variant="medium12"
        color={text ? `#${text}` : `${tokens.colors.white}`}
      >
        {title}
      </Text>
    </BadgeWrapper>
  );
};

const BadgeWrapper = styled.div`
  padding: 2px 10px;
  border-radius: 12px;
  background: ${(props) => `#${props.bg}`};

  opacity: 1;
  cursor: pointer;
  transition: 200ms ease;
`;

export default Badge;
