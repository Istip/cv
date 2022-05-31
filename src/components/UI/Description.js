import styled from 'styled-components';
import tokens from './tokens';
import { Icon, Text } from './';

const Description = ({ icon, text, content, link }) => {
  return (
    <Wrapper>
      <Circle>
        {icon && <Icon icon={icon} size={16} />}
        {text && <Text variant="black10">{text}</Text>}
      </Circle>

      <Text tag="div" variant="regular12">
        {link ? (
          <Anchor href={link} target="_blank">
            {content}
          </Anchor>
        ) : (
          <>{content}</>
        )}
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`;

const Circle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  background: ${tokens.colors.primaryLight2};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${tokens.colors.white};
`;

const Anchor = styled.a`
  all: unset;
  transition: 250ms ease;

  &:hover {
    text-decoration: underline;
    color: ${tokens.colors.primary};
  }
`;

export default Description;
