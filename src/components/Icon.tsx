import React from 'react';

interface IconProps {
  name: string;
  color: string;
  size: string;
}

const Icon: React.FC<IconProps> = ({ name, color, size }) => {
  const props = `text-${size} flex items-center text-${color}`
  return (
    <div className={props}>
      <ion-icon name={name}></ion-icon>
    </div>
  );
};

export default Icon;
