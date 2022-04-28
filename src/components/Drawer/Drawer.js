import { useEffect } from 'react';
import { Text, Center, tokens } from '../UI';
import {
  CloseButton,
  Content,
  ContentWrapper,
  DrawerBody,
  DrawerContent,
  DrawerImage,
  Title,
} from './Drawer.styles';
import { DrawerContact, DrawerLanguages, DrawerPersonalInformation } from './';

const Drawer = ({ show, setShow }) => {
  // Disable background scrolling when modal is opened
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [show]);

  return (
    <DrawerBody show={show}>
      <CloseButton onClick={() => setShow(!show)}>
        <Text variant="medium10">Close</Text>
      </CloseButton>

      <DrawerImage />
      <Center margin="20px 0">
        <Text variant="black18" color={tokens.colors.primary}>
          PÁSZTOR ISTVÁN
        </Text>
      </Center>

      <ContentWrapper>
        <Content>
          <Title>
            <Text variant="medium16">INTRODUCTION</Text>
          </Title>
          <Text variant="regular12" lineHeight="1.5" padding="15px">
            My name is <b>Isti</b>. Since I was a kid, I felt passion to create
            something new, something imperishable. I also like to learn new
            things. Using these motivations combined with my competences, I
            would like to find a stable workplace. While I focus to my work, I
            would like to follow my dreams, as I'm moving towards self
            realization!
          </Text>
        </Content>

        <Content>
          <Title>
            <Text variant="medium16">CONTACT</Text>
          </Title>
          <DrawerContent>
            <DrawerContact />
          </DrawerContent>
        </Content>

        <Content>
          <Title>
            <Text variant="medium16">PERSONAL INFORMATION</Text>
          </Title>
          <DrawerContent>
            <DrawerPersonalInformation />
          </DrawerContent>
        </Content>

        <Content>
          <Title>
            <Text variant="medium16">LANGUAGES</Text>
          </Title>
          <DrawerContent>
            <DrawerLanguages />
          </DrawerContent>
        </Content>

        <Content>
          <Title>
            <Text variant="medium16">HOBBIES</Text>
          </Title>
          <DrawerContent>
            <Text tag="div" variant="regular12" lineHeight="1.5">
              Technology, Coding, Traveling, Camping, Design, Music production,
              Witnessing and learning new things, Cooking, Writing, Reading,
              Psychology, Philosophy, Movies, Series, Motorcycles and road
              trips.
            </Text>
          </DrawerContent>
        </Content>
      </ContentWrapper>
    </DrawerBody>
  );
};

export default Drawer;
