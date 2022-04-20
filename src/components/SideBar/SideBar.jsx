import React, { useContext, useState } from 'react';
import StoreContext from '../../context/storeContext';

import s from './SideBar.module.scss'
import SideBarItem from './SideBarItem/SideBarItem';

const SideBar = () => {
    const {localStore: store} = useContext(StoreContext)
    const [lists, setLists] = useState(store.getLists()) 

    const handlerAddList = () =>{
        store.createNewList()
        setLists(store.getLists())
    }
    const handlerDeleteList = listName =>{
            store.deleteList(listName)
            setLists(store.getLists())
        }
        const handlerRenameList = (lisName, newName) =>{
            store.renameList(lisName, newName)
            setLists(store.getLists())
        }

    return (
        <div className={['SideBar', s.sidebar].join(' ')}>
          <h2>Списки:</h2>
          <ul>
              {lists.map(name => 
                <SideBarItem key={name} name={name} 
                    deleteList={handlerDeleteList} 
                    renameList={handlerRenameList}
                    />)}
          </ul>
          <button onClick={handlerAddList}>Добавить</button>
        </div>
    );
};

export default SideBar;