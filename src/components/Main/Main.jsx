import React, { useState } from 'react';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';


import MainList from '../MainList/MainList';
import MainWindow from '../MainWindow/MainWindow';
import s from './Main.module.scss'

const Main = () => {
    const LIST = '/mainList'
    const WINDOW = '/mainWindow'
    const path = `/${useLocation().pathname.split('/')[1]}`
    const [name, setName] = useState('')
    

    return (
        <div className={['Main', s.main].join(' ')}>
        <Link to={path === LIST ? WINDOW : LIST}><button >{ path === LIST ? 'Окно' : 'Список'}</button></Link>   
        <h1>{name}</h1>
        <Routes>
            <Route  path={'/'} element={<Navigate to={'/mainList'}/>}/>
            <Route  path={'/mainList/*'} element={<MainList setName={setName}/>}/>
            <Route  path={'/mainWindow/*'} element={<MainWindow/>}/>
        </Routes>
        </div>
    );
};

export default Main;