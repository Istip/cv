import { Text, tokens } from '../UI';

const Header = () => {
  return (
    <>
      <Text tag="h1" variant="h1" color={tokens.colors.primaryDark2}>
        PASZTOR ISTVAN
      </Text>
      <Text tag="h3" variant="h3" color={tokens.colors.primaryLight2}>
        Curriculum Vitae
      </Text>
    </>
  );
};

export default Header;
