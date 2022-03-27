import { data } from '../../data/personal';
import { Description } from '../UI';

const DrawerContact = () => {
  return (
    <>
      {data.map((item) => (
        <Description key={item.key} icon={item.icon} content={item.content} />
      ))}
    </>
  );
};

export default DrawerContact;
