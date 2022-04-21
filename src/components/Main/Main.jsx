import React, { useState } from 'react';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import "antd/dist/antd.css";

import MainList from '../MainList/MainList';
import MainWindow from '../MainWindow/MainWindow';
import s from './Main.module.scss'

const Main = () => {
    const pathname = useLocation().pathname
    const [LIST, WINDOW] = ['/mainList', '/mainWindow']
    const path = `/${pathname.split('/')[1]}`
    const end = `/${pathname.split('/')[2]}`
    const [name, setName] = useState('')
  
   
    return (
        <div className={['Main', s.main].join(' ')}>
        <Link to={path === LIST ? WINDOW + end : LIST + end}><button >{ path === LIST ? 'Окно' : 'Список'}</button></Link>   
        <h1>{name ? name : 'Выберите список'}</h1>
        <Routes>
            <Route  path={'/'} element={<Navigate to={'/mainList'}/>}/>
            <Route  path={'/mainList/*'} element={<MainList setName={setName}/>}/>
            <Route  path={'/mainWindow/*'} element={<MainWindow setName={setName}/>}/>
        </Routes>
        </div>
    );
};

export default Main;