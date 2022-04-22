import { Button, Input } from 'antd';
import React, { useContext, useEffect, useState } from 'react'
import StoreContext from '../../../context/storeContext';
import s from './SideBarItem.module.scss'

const SideBarItem = ({name, deleteList, renameList}) => {

    const {selectedListName, selectListName} = useContext(StoreContext)

    const [toggle, setToggle] = useState(false)
    const [listName, setListName] = useState(name)
    let active = selectedListName === name
    const handleRename = () =>{
        if(name !== listName && listName) renameList(name, listName)
        setListName(name)
        setToggle(!toggle)
    }
    useEffect(() => () => selectListName('') ,[])
    return (
        <li className={ active ? s.sidebarItem + ' ' + s.selected : s.sidebarItem} onClick={() => selectListName(name)}> 
            {toggle
            ?   
            <>
                <Input value={listName} autoFocus maxLength={30}
                        onChange={(e) => {setListName(e.target.value)}} 
                        onBlur={handleRename} onPressEnter={() =>setToggle(!toggle)}
                        />
                <Button size='middle' type='primary' onClick={handleRename}>Ок</Button>
            </>
            : 
                <>
                    <h4 onDoubleClick={() => setToggle(!toggle)}>{name}</h4> 
                    <Button ghost size='small' type='danger' onMouseDown={() => deleteList(name)}>Удалить</Button>
                </>
            }
        </li>
    );
};

export default SideBarItem