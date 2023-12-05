import * as React from 'react'
import Icon from './Icon';

interface Alert {
  text: string;
}

const Alert: React.FC<Alert> = ({ text }) => {
  return (
    <div className="alert w-60 absolute right-1/2 mt-16 h-auto bg-gray-100 p-4 rounded border border-green flex gap-1 translate-x-32 md:translate-x-28">
      <Icon name='checkmark-circle-outline' color='green' size='2xl'/>
      <p>{text}</p>
    </div>
  );
}

export default Alert
