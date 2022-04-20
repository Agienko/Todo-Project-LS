import React, { useContext, useState } from 'react';
import StoreContext from '../../context/storeContext';
import Auth from '../Auth/Auth';
import Registration from '../Registration/Registration';
import s from './Header.module.scss'

const Header = () => {
  const {localStore: store, isLogged, setIsLogged} = useContext(StoreContext)
  console.log(store)
  const [regHide, setRegHide] = useState(true)
  const [authHide, setAuthHide] = useState(true)
  
  const handlelogOutClick = () =>{
    store.logoutUser()
    setIsLogged(false)
  }

    return (
        <div className={['Header', s.header].join(' ')}>
          {!regHide && <Registration  setRegHide={setRegHide} setNewUser={store.setNewUser.bind(store)}/>}
          {!authHide && <Auth setAuthHide={setAuthHide} loginUser={store.loginUser.bind(store)} setIsLogged ={setIsLogged}/>}
          <img src="https://is4-ssl.mzstatic.com/image/thumb/Purple126/v4/df/df/18/dfdf183f-0c66-fbf6-1855-2dd658bf9b19/AppIcon-0-0-1x_U007emarketing-0-0-0-4-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp" alt="logo" />
          <h1>Todo App</h1>
      {!isLogged 
      ?   <div>
            <button onClick={() => setRegHide(false)}>Регистрация</button>
            <button onClick={() => setAuthHide(false)}>Войти</button>
          </div>
      :
          <div>
            <span>{store.getUserName()}</span>
            <button onClick={handlelogOutClick}>Выйти</button>
          </div>
      }
        </div>
    );
};

export default Header;