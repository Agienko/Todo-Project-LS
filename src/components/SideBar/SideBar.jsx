import { Button } from 'antd';
import React, { useContext, useState } from 'react';
import StoreContext from '../../context/storeContext';
import s from './SideBar.module.scss'
import '../../globalStyles/transition.scss'
import SideBarItem from './SideBarItem/SideBarItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


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
            <TransitionGroup className="todo-list">
            {lists.map(name => 
                <CSSTransition key={name} timeout={250} classNames="item">
                    <SideBarItem name={name} deleteList={handlerDeleteList} 
                                    renameList={handlerRenameList}/>
                </CSSTransition>)}
            </TransitionGroup>   
          </ul>
          <Button ghost type='primary' size='small' onClick={handlerAddList}>Добавить</Button>
        </div>
    );
};

export default SideBar;