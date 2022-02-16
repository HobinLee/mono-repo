import React, { ReactElement } from 'react';
import { MainPage } from './pages/Main';

interface Props {}

function App({}: Props): ReactElement {
  return (
    <>
      <h1>패키지 A</h1>
      <MainPage />
    </>
  );
}

export default App;
