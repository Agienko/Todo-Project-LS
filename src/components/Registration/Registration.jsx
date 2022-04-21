import React, { useState } from 'react';

import s from './Registration.module.scss'
const Registration = ({setRegHide, setNewUser}) => {

    const [passShort, setPassShort] = useState(false)
    const [nameShort, setNameShort] = useState(false)
    const [passWrong, setPassWrong] = useState(false)
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const [passRepeat, setPassRepeat] = useState('')

    const handlerCancel = (e) => {
        e.preventDefault()
        setRegHide(true)
    }
    const handlerOver = (e) => {
        e.stopPropagation()
     if(e.target === e.currentTarget) setRegHide(true)
    }

    const handlerOk = (e) => {
        e.preventDefault();
        (pass === passRepeat && pass.length < 5) ?  setPassShort(true) : setPassShort(false);
        (pass !== passRepeat ) ?  setPassWrong(true) : setPassWrong(false);
        (name.length < 3 ) ?  setNameShort(true) : setNameShort(false);
        if(passShort || passWrong || nameShort) {
            setName('')
            setPass('')
            setPassRepeat('')
        }
        if(pass === passRepeat && pass.length >= 5 && name){
            if(setNewUser(name, pass)) {
                setRegHide(true)
                setName('')
                setPass('')
                setPassRepeat('')
            } else {
                setName('')
                setPass('')
                setPassRepeat('')
            }
        }
    }
    

    return (
        <div className={s.reg} onClick={handlerOver}>
            <form className={s.form} >
                <header>
                    <h3>Регистрация</h3>
                    <div className={s.close} onClick={handlerCancel}> Х </div>
                </header>
                <main>
                    <label htmlFor="reg">
                        <div>Имя:</div>  
                        <input name='reg' type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                    </label>
                    <label htmlFor="pas">
                        <div> Пароль:</div> 
                        <input name='pas' type="password" value={pass} onChange={(e) => setPass(e.target.value)}/>
                    </label>
                    <label htmlFor="pasAgain">
                        <div>Повторить пароль: </div> 
                        <input name='pasAgain' type="password" value={passRepeat} onChange={(e) => setPassRepeat(e.target.value)}/>
                    </label>
                   {passShort && <p className={s.alert}>Пароль слишком короткий! Минимальное колличество 5 символов!</p>}
                   {passWrong && <p className={s.alert}>Пароли не совпадают! Попробуйте еще</p>}
                </main>
                <footer>
                    <button onClick={handlerOk}>Ок</button>
                    <button onClick={handlerCancel}>Отмена</button>
                   
                </footer>
            </form>
        </div>
    )
}
export default Registration;