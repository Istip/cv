import { BigTitle, Card, Header } from './';
import { BadgeContainer, ContentBox, HeaderWrapper } from './Main.styles';
import { education, workExperience } from '../../data/experience';
import { badges } from '../../data/badges';
import { Badge } from '../UI';

const Main = () => {
  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <ContentBox>
        <BigTitle>Education</BigTitle>
        {education.map((item) => (
          <Card key={item.key} item={item} />
        ))}

        <BigTitle>Work Experience</BigTitle>
        {workExperience.map((item) => (
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
    </>
  );
};

export default Main;
