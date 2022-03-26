import React from 'react';
import { Center } from '.';

// all the project icons imported here
import { Facebook, Home, Instagram, Mail, Phone } from './icons';

const Icon = (props) => {
  const icons = {
    home: <Home {...props} />,
    phone: <Phone {...props} />,
    mail: <Mail {...props} />,
    facebook: <Facebook {...props} />,
    instagram: <Instagram {...props} />,
  };

  return (
    <Center style={{ cursor: 'pointer' }} {...props}>
      {icons[props.icon]}
    </Center>
  );
};

export default Icon;
