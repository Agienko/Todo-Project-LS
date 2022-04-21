import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './globalStyles/App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PlugIsAuth from './components/PlugIsAuth/PlugIsAuth';
import SideBar from './components/SideBar/SideBar';
import localStore from './context/localState';
import StoreContext from './context/storeContext';

function App() {
  const [isLogged, setIsLogged] = useState(localStore.isLogged());

  return (
    <div className="App">
      <BrowserRouter>
        <StoreContext.Provider value={{ localStore, isLogged, setIsLogged }}>
          <Header />
          {isLogged 
          ? <>
              <SideBar />
              <Main />
            </>
          : <PlugIsAuth />}
        </StoreContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
