import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StoreContext from '../../context/storeContext';
import s from './MainWindow.module.scss'
const MainWindow = ({setName}) => {
    let listName = useParams()['*']
    listName = listName === 'undefined' ? '' : listName
    console.log(listName, typeof listName)
    const {localStore: store} = useContext(StoreContext)
    const [items, setItems] = useState(store.getListItems(listName))

    useEffect(() => {
        setItems(store.getListItems(listName))
        setName(listName)
    },[listName])



    return (
        <div className={s.mainWindow}>
        <section className={s.IU}>
            {items.filter(i => i.important).filter(i => i.urgent).map(i => 
                <div key ={i.id}>{i.text}</div>)}
        </section>
        <section className={s.InU}>
            {items.filter(i => i.important).filter(i => !i.urgent).map(i => 
                <div key ={i.id}>{i.text}</div>)}
        </section>
        <section className={s.nIU}>
            {items.filter(i => !i.important).filter(i => i.urgent).map(i => 
                <div key ={i.id}>{i.text}</div>)}
        </section>
        <section className={s.nInU}>
            {items.filter(i => !i.important).filter(i => !i.urgent).map(i => 
                <div key ={i.id}>{i.text}</div>)}
        </section>
        </div>
    );
};

export default MainWindow;