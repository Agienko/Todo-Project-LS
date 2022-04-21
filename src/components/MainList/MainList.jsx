import { Button, Input } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StoreContext from '../../context/storeContext';
import Filter from '../Filter/Filter';
import MainListItem from './MainListItem/MainListItem';

const MainList = ({setName}) => {
    let listName = useParams()['*']
    listName = listName === 'undefined' ? '' : listName
    const {localStore: store} = useContext(StoreContext)
    const [items, setItems] = useState(store.getListItems(listName))
    const [text, setText] = useState('')
    useEffect(() => {
        setItems(store.getListItems(listName))
        setName(listName)
    },[listName])

    const handleAddItemClick = () => {
        if(text){
            store.addListItem(listName, text)
            setItems(store.getListItems(listName))
            setText('')
        }
    }
    const handlerUpdateItemClick = (id, prop, value) => {
        store.updateListItem(listName, id, prop, value )
        setItems(store.getListItems(listName))
    }
    const handlerRemoveItemClick = id => {
        store.deleteListItem(listName, id)
        setItems(store.getListItems(listName))
    }
    return (
        <>
        <Filter setItems={setItems} items={store.getListItems(listName)}/>
        {items.length === 0 && <div>Заданий нет...</div>}
         <ul>
             {items.map(item => 
                <MainListItem key={item.id} {...item} 
                    setItems={setItems} 
                    update={handlerUpdateItemClick}
                    remove={handlerRemoveItemClick}
                    />)}
         </ul>
         <footer style={{display: 'flex'}}>
                <Input value={text} onChange={(e) => setText(e.target.value)}
                    onPressEnter={handleAddItemClick}
                />
                <Button style={{marginLeft: '5px'}} size='middle' type='primary' 
                    onClick={handleAddItemClick}>Добавить</Button>
         </footer>
        </>
        
    );
};

export default MainList;