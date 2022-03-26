import React from 'react';
import { fonts } from './tokens';

const Text = ({
  variant,
  tag,
  children,
  color,
  lineHeight,
  padding,
  ...props
}) => {
  const Tag = tag || 'p';
  return (
    <Tag style={{ ...fonts[variant], color, lineHeight, padding }} {...props}>
      {children}
    </Tag>
  );
};

export default Text;
