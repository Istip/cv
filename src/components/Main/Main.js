import { BigTitle, Card } from './';
import { ContentBox } from './Main.styles';
import { education, workExperience } from '../../data/experience';

const Main = () => {
  return (
    <>
      <ContentBox>
        <BigTitle>Education</BigTitle>
        {education.map((item) => (
          <Card key={item.key} item={item} />
        ))}

        <BigTitle>Work Experience</BigTitle>
        {workExperience.map((item) => (
          <Card key={item.key} item={item} />
        ))}
      </ContentBox>
    </>
  );
};

export default Main;
