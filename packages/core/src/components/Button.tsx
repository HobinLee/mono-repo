import React, { FC } from 'react';

interface Props {
  color: 'black' | 'red';
  fontSize: '10px' | '14px' | '20px';
}

const Button: FC<Props> = ({ color, fontSize, children }) => (
  <button style={{ color, fontSize }}>{children}</button>
);

export default Button;
