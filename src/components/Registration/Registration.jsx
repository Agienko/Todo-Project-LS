import { Input, Modal } from 'antd';
import React, { useState } from 'react';

import s from './Registration.module.scss'
const Registration = ({setRegVisible, setNewUser, visible}) => {

    const [passShort, setPassShort] = useState(false)
    const [nameShort, setNameShort] = useState(false)
    const [passWrong, setPassWrong] = useState(false)
    const [passRepeat, setPassRepeat] = useState('')

    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    
    const handlerCancel = () => {
        setRegVisible(false)
        setName('')
        setPass('')
        setPassRepeat('')
    }

    const handlerOk = () => {
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
                setRegVisible(false)
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
        <Modal title="Регистрация" visible={visible} onOk={handlerOk} onCancel={handlerCancel} className={s.mod}>
            <label>
               <div>Имя: </div> 
                <Input value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
                <div>Пароль: </div> 
                <Input.Password value={pass} onChange={(e) => setPass(e.target.value)}/>
            </label>
            <label>
                <div>Повторить пароль: </div>
                <Input.Password value={passRepeat} onChange={(e) => setPassRepeat(e.target.value)}/>
            </label>
            {passShort && <p className={s.alert}>Пароль слишком короткий! Минимальное колличество 5 символов!</p>}
            {passWrong && <p className={s.alert}>Пароли не совпадают! Попробуйте еще</p>}
        </Modal>
    )
}
export default Registration;