import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StoreContext from '../../context/storeContext';
import s from './MainWindow.module.scss'
const MainWindow = ({setName}) => {
    const listName = useParams()['*']

    const {localStore: store} = useContext(StoreContext)
    const [items, setItems] = useState(store.getListItems(listName))


    console.log(store.getListItems(listName))
    useEffect(() => {
        setItems(store.getListItems(listName))
        setName(listName)
    },[listName])



    return (
        <div className={s.mainWindow}>
        <section className={s.IU}>
            {items.filter(i => i.important).filter(i => i.urgent).map(i => 
                <div>{i.text}</div>)}
        </section>
        <section className={s.InU}>

        </section>
        <section className={s.nIU}>

        </section>
        <section className={s.nInU}>

        </section>
        </div>
    );
};

export default MainWindow;