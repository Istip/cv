import { Icon, Text, tokens } from '../UI';
import { Button, ButtonWrapper, TitleWrapper } from './Header.styles';

const Header = ({ setShow }) => {
  return (
    <>
      <ButtonWrapper>
        <Button onClick={() => setShow((prevState) => !prevState)}>
          <Icon icon="user" size={18} color={tokens.colors.primaryWhite} />
          <Text color={tokens.colors.white} variant="medium12">
            Profile
          </Text>
        </Button>
      </ButtonWrapper>

      <TitleWrapper>
        <Text tag="h3" variant="h3" color={tokens.colors.primaryDark1}>
          Curriculum Vitae
        </Text>
        <Text tag="h1" variant="h1" color={tokens.colors.primaryDark2}>
          PÁSZTOR ISTVÁN
        </Text>
      </TitleWrapper>
    </>
  );
};

export default Header;
