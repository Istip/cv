import { Center } from '.';

// all the project icons imported here
import {
  Facebook,
  Flag,
  Home,
  Hospital,
  Instagram,
  License,
  Mail,
  Phone,
  User,
  Github,
  Download,
} from './icons';

const Icon = (props) => {
  const icons = {
    home: <Home {...props} />,
    phone: <Phone {...props} />,
    mail: <Mail {...props} />,
    facebook: <Facebook {...props} />,
    instagram: <Instagram {...props} />,
    hospital: <Hospital {...props} />,
    user: <User {...props} />,
    flag: <Flag {...props} />,
    license: <License {...props} />,
    github: <Github {...props} />,
    download: <Download {...props} />,
  };

  return (
    <Center style={{ cursor: 'pointer' }} {...props}>
      {icons[props.icon]}
    </Center>
  );
};

export default Icon;
