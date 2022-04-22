import { Button, Input } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { TransitionGroup , CSSTransition} from 'react-transition-group';
import StoreContext from '../../context/storeContext';
import Filter from '../Filter/Filter';
import MainListItem from './MainListItem/MainListItem';
import '../../globalStyles/transition.scss'
import "antd/dist/antd.css";

const MainList = () => {
   

    const {localStore: store, selectedListName} = useContext(StoreContext)
    const [items, setItems] = useState(store.getListItems(selectedListName))
    const [text, setText] = useState('')
    useEffect(() => {
        setItems(store.getListItems(selectedListName))
    },[selectedListName])

    const handleAddItemClick = () => {
        if(text){
            store.addListItem(selectedListName, text)
            setItems(store.getListItems(selectedListName))
            setText('')
        }
    }
    const handlerUpdateItemClick = (id, prop, value) => {
        store.updateListItem(selectedListName, id, prop, value )
        setItems(store.getListItems(selectedListName))
    }
    const handlerRemoveItemClick = id => {
        store.deleteListItem(selectedListName, id)
        setItems(store.getListItems(selectedListName))
    }
    return (
        <div className='Main'>
        { selectedListName ? <h2>{selectedListName}</h2> : <h3>Выберите, или добавьте список...</h3> }
        {!!selectedListName && <Filter setItems={setItems} items={store.getListItems(selectedListName)}/>}
        {items.length === 0 && <div>Заданий нет...</div>}
        <ul>
            <TransitionGroup className="todo-list">
            {items.map(item => 
                <CSSTransition key={item.id}timeout={300} classNames="item">
                    <MainListItem {...item} setItems={setItems} 
                        update={handlerUpdateItemClick} remove={handlerRemoveItemClick}/>
                </CSSTransition>)}
            </TransitionGroup>
        </ul>
        <footer hidden={!!!selectedListName} style={{display: 'flex'}}>
            <Input value={text} onChange={(e) => setText(e.target.value)}
                onPressEnter={handleAddItemClick}/>
            <Button style={{marginLeft: '5px'}} size='middle' type='primary' 
                onClick={handleAddItemClick}>Добавить</Button>
        </footer>
        </div>
        
    );
};

export default MainList;