import React, { PropsWithChildren } from 'react';

interface Props {
  color: 'red' | 'yellow' | 'blue' | 'pink';
}

export const Label = ({ color, children }: PropsWithChildren<Props>) => (
  <span style={{ width:'fit-content',backgroundColor:color, borderRadius: '10px', padding: '0.2rem 1rem', fontSize:'10px', color:'white'}}>{children}</span>
);
