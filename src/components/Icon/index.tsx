import React from 'react';
import IconFont from 'react-native-vector-icons/AntDesign';

interface IIcon {
  name: string;
  size: number;
  color: string;
}

const Icon: React.FC<IIcon> = ({ color, name, size }) => {
  return <IconFont name={name} size={size} color={color} />;
};

export default Icon;
