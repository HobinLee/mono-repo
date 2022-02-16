import React, { ReactElement } from 'react';
import { MainPage } from './pages/Main';

interface Props {}

function App({}: Props): ReactElement {
  return (
    <>
      <h1>포인트함</h1>
      <MainPage />
    </>
  );
}

export default App;
