import React from 'react';

interface IconProps {
  name: string;
  color: string;
}

const Icon: React.FC<IconProps> = ({ name, color }) => {
  const props = `text-2xl flex items-center text-${color}`
  return (
    <div className={props}>
      <ion-icon name={name}></ion-icon>
    </div>
  );
};

export default Icon;
