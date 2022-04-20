import React from 'react';

import s from './SideBar.module.scss'
import SideBarItem from './SideBarItem/SideBarItem';

const SideBar = () => {
   
    return (
        <div className={['SideBar', s.sidebar].join(' ')}>
          <h2>Списки:</h2>
          <ul>
              <SideBarItem/>
              <SideBarItem/>
              <SideBarItem/>
              <SideBarItem/>
          </ul>
          <button>Добавить</button>
        </div>
    );
};

export default SideBar;