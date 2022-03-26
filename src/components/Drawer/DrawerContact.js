import { contacts } from '../../data/contactInfo';
import { Description } from '../UI';

const DrawerContact = () => {
  return (
    <>
      {contacts.map((contact) => (
        <Description
          key={contact.key}
          icon={contact.icon}
          content={contact.content}
        />
      ))}
    </>
  );
};

export default DrawerContact;
