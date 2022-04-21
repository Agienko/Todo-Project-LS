import React, { useState } from 'react';
import s from './Auth.module.scss'
const Auth = ({setAuthHide, loginUser, setIsLogged}) => {
   

    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const [wrong, setWrong] = useState(false)

    const handlerCancel = (e) =>{
        e.preventDefault()
        setAuthHide(true)
    }
    const handlerOver = (e) => {
        e.stopPropagation()
        if(e.target === e.currentTarget) setAuthHide(true) 
        
    }
    const handlerOk = (e) =>{
        e.preventDefault()
        if(name && pass){
           if(loginUser(name, pass)) {
            setWrong(false)
            setAuthHide(true)
            setIsLogged(true)
           } else {
            setWrong(true)
           }
          
        } 
    }



    return (
        <div className={s.auth} onClick={handlerOver}>
            <form className={s.form}>
                <header>
                    <h3>
                        Вход
                    </h3>
                    <div className={s.close} onClick={handlerCancel}> Х </div>
                </header>
                <main>
                    <label htmlFor="reg">
                        <div>Имя:</div> 
                        <input name='reg' type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
                    </label>
                    <label htmlFor="pas">
                        <div> Пароль:</div> 
                        <input name='pas' type="password" value={pass} onChange={(e)=> setPass(e.target.value)}/>
                    </label>
                    {wrong && <p className={s.alert}> Ошибка! Имя или пароль указаны неправильно!</p>}
                </main>
                <footer>
                    <button onClick={handlerOk}>Ок</button>
                    <button onClick={handlerCancel}>Отмена</button>
                </footer>
            </form>
        </div>   
    );
};

export default Auth;