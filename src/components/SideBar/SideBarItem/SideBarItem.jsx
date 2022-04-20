import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import s from './SideBarItem.module.scss'

const SideBarItem = ({name, deleteList, renameList}) => {
    const [toggle, setToggle] = useState(false)
    const [listName, setListName] = useState(name)
    const handleRename = () =>{
        renameList(name, listName)
        setToggle(!toggle)
    }
    const path = useLocation().pathname.split('/')[1]
    return (
        <li className={s.sidebarItem}> 
            <Link to={`${path}/${listName}`}>
            {toggle
            ?   
                <>
                    <input autoFocus value={listName} onChange={(e) => setListName(e.target.value)} onBlur={handleRename}/>
                    <button onClick={handleRename}>Ок</button>
                </>
            : 
                <>
                    <h4 onDoubleClick={() => setToggle(!toggle)}>{name}</h4> 
                    <button onClick={() =>deleteList(name)}>Удалить</button>
                </>
            }
            
            
            </Link> 
        </li>
    );
};

export default SideBarItem