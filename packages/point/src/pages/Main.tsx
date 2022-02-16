import { Button, Label, LargeText } from '@hovlee/core/components';
import React from 'react';

export const MainPage = () => <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center', width: 'auto'}}>
  <Button color='blue'>클릭</Button>
  <Label color='pink'/>
  <Label color='yellow'/>
  <LargeText />
  <LargeText />
  <LargeText />
</div>