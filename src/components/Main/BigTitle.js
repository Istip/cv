import { Text, tokens } from '../UI';
import { BigTitleWrapper } from './Main.styles';

const BigTitle = (props) => {
  return (
    <BigTitleWrapper>
      <Text variant="black18" color={tokens.colors.primary}>
        {props.children}
      </Text>
    </BigTitleWrapper>
  );
};

export default BigTitle;
