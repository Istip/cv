import { AppContainer, MainWrapper } from './App.styles';
import { Drawer } from './components/Drawer';
import { Main } from './components/Main';

function App() {
  return (
    <AppContainer>
      <Drawer />
      <MainWrapper>
        <Main />
      </MainWrapper>
    </AppContainer>
  );
}

export default App;
