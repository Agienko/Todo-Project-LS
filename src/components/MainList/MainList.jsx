import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StoreContext from '../../context/storeContext';
import MainListItem from './MainListItem/MainListItem';

const MainList = ({setName}) => {
    const listName = useParams()['*']
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
         <ul>
             {items.length === 0 && <li>Задач нет...</li>}
             {items.map(item => 
                <MainListItem key={item.id} {...item} 
                    setItems={setItems} 
                    update={handlerUpdateItemClick}
                    remove={handlerRemoveItemClick}
                    />)}
         </ul>
         <div>
                <input type="text"  value={text} onChange={(e) => setText(e.target.value)}/>
                <button onClick={handleAddItemClick}>Добавить</button>   
         </div>
        </>
        
    );
};

export default MainList;