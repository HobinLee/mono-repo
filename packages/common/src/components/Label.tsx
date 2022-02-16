import React from 'react';

interface Props {
  color: 'red' | 'yellow' | 'blue' | 'pink';
  label?: string;
}

export default ({ color, label }: Props) => (
  <span style={{ width:'fit-content',backgroundColor:color, borderRadius: '10px', padding: '0.2rem 1rem', fontSize:'10px', color:'white'}}>{label ?? '라벨'}</span>
);
