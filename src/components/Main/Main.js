import { BigTitle, Card, Header } from './';
import {
  BadgeContainer,
  ContentBox,
  HeaderWrapper,
  MainContainer,
} from './Main.styles';
import { education, workExperience } from '../../data/experience';
import { badges } from '../../data/badges';
import { Badge } from '../UI';

const Main = ({ setShow }) => {
  return (
    <MainContainer>
      <HeaderWrapper>
        <Header setShow={setShow} />
      </HeaderWrapper>

      <ContentBox>
        <BigTitle>Work Experience</BigTitle>
        {workExperience.map((item) => (
          <Card key={item.key} item={item} />
        ))}

        <BigTitle>Education</BigTitle>
        {education.map((item) => (
          <Card key={item.key} item={item} />
        ))}

        <BigTitle>Skills</BigTitle>
        <BadgeContainer>
          {badges.map((badge) => (
            <Badge
              key={badge.title}
              title={badge.title}
              color={badge.color}
              text={badge.text}
            />
          ))}
        </BadgeContainer>
      </ContentBox>
    </MainContainer>
  );
};

export default Main;
