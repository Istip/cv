import { languages } from '../../data/contactInfo';
import { Description } from '../UI';

const DrawerLanguages = () => {
  return (
    <div>
      {languages.map((language) => (
        <Description
          key={language.key}
          text={language.text}
          content={language.content}
        />
      ))}
    </div>
  );
};

export default DrawerLanguages;
