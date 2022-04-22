import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './globalStyles/App.scss';
import Header from './components/Header/Header';
import PlugIsAuth from './components/PlugIsAuth/PlugIsAuth';
import SideBar from './components/SideBar/SideBar';
import localStore from './context/localState';
import StoreContext from './context/storeContext';
import MainList from './components/MainList/MainList';
import FooterMy from './components/Footer/FooterMy'

function App() {
  const [isLogged, setIsLogged] = useState(localStore.isLogged());
  const [selectedListName, selectListName] = useState('');
 
  return (
    <div className="App">
      <BrowserRouter>
        <StoreContext.Provider value={{ localStore, isLogged, setIsLogged, selectListName, selectedListName }}>
          <Header />
          {isLogged 
          ? <>
              <SideBar/>
              <MainList/>
            </>
          : <PlugIsAuth />}
          <FooterMy isLogged={isLogged}/>
          
        </StoreContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
