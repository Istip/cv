import { personalInformations } from '../../data/personal';
import { Description } from '../UI';

const DrawerPersonalInformation = () => {
  return (
    <div>
      {personalInformations.map((personalInformation) => (
        <Description
          key={personalInformation.key}
          icon={personalInformation.icon}
          content={personalInformation.content}
        />
      ))}
    </div>
  );
};

export default DrawerPersonalInformation;
