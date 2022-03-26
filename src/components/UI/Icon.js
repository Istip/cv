import React from 'react';
import { Center } from '.';

// all the project icons imported here
import { Home } from './icons';

const Icon = (props) => {
  const icons = {
    home: <Home {...props} />,
  };

  return (
    <Center style={{ cursor: 'pointer' }} {...props}>
      {icons[props.icon]}
    </Center>
  );
};

export default Icon;
