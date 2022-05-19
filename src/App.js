import { useState } from 'react';
import { AppContainer, MainBackdrop, MainWrapper } from './App.styles';
import { Drawer } from './components/Drawer';
import { Main } from './components/Main';

function App() {
  const [show, setShow] = useState(false);

  return (
    <AppContainer>
      <Drawer show={show} setShow={setShow} />
      <MainWrapper>
        <MainBackdrop show={show} onClick={() => setShow(!show)} />
        <Main setShow={setShow} />
      </MainWrapper>
    </AppContainer>
  );
}

export default App;
