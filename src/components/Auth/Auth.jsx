import { Input, Modal } from 'antd';
import React, { useState } from 'react';
import s from './Auth.module.scss'


const Auth = ({setAuthVisible, loginUser, setIsLogged, visible}) => {
   
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const [wrong, setWrong] = useState(false)

    const handlerCancel = (e) =>{ 
        setAuthVisible(false)
        setName('')
        setPass('')
    }
   
    const handlerOk = (e) =>{
        if(name && pass){
           if(loginUser(name, pass)) {
            setWrong(false)
            setAuthVisible(false)
            setIsLogged(true)
            setName('')
            setPass('')
           } else {
            setWrong(true)
            setName('')
            setPass('')
           }
        } 
    }

    return (
            <Modal title="Вход" visible={visible} onOk={handlerOk} onCancel={handlerCancel} className={s.main}>
                <label>
                    <div>Введите имя:</div> 
                    <Input placeholder='Имя' value={name} onChange={(e)=> setName(e.target.value)}/>
                </label>
                <label>
                    <div>Введите пароль:</div> 
                    <Input.Password placeholder='Пароль' value={pass} onChange={(e)=> setPass(e.target.value)}/>
                </label>
                {wrong && <p className={s.alert}> Ошибка! Имя или пароль указаны неправильно!</p>}        
            </Modal>
    );
};

export default Auth;