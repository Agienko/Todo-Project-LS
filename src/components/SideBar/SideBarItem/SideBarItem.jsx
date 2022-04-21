import { Button, Input } from 'antd';
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import s from './SideBarItem.module.scss'

const SideBarItem = ({name, deleteList, renameList}) => {
    const [toggle, setToggle] = useState(false)
    const [listName, setListName] = useState(name)

    const handleRename = () =>{
        if(name !== listName && listName) renameList(name, listName)
        setListName(name)
        setToggle(!toggle)
    }
 
    const path = useLocation().pathname.split('/')[1]
    return (
        <li className={s.sidebarItem}> 
            <Link to={`${path}/${listName}`}>
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
            </Link> 
        </li>
    );
};

export default SideBarItem