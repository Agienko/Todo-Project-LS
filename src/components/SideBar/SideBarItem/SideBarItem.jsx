import React from 'react'
import s from './SideBarItem.module.scss'

const SideBarItem = () => {
    return (
        <li className={s.sidebarItem}>  
            <h4>Задачи по работе </h4> 
            <button>Удалить</button>
        </li>
    );
};

export default SideBarItem