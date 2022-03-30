import { Icon, Text, tokens } from '../UI';
import { Button, ButtonWrapper } from './Header.styles';

const Header = ({ setShow }) => {
  return (
    <>
      <ButtonWrapper>
        <Button onClick={() => setShow((prevState) => !prevState)}>
          <Icon icon="user" color={tokens.colors.primaryWhite} />
        </Button>
      </ButtonWrapper>

      <Text tag="h3" variant="h3" color={tokens.colors.primaryDark1}>
        Curriculum Vitae
      </Text>
      <Text tag="h1" variant="h1" color={tokens.colors.primaryDark2}>
        PÁSZTOR ISTVÁN
      </Text>
    </>
  );
};

export default Header;
