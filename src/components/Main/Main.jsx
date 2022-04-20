import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';


import MainList from '../MainList/MainList';
import MainWindow from '../MainWindow/MainWindow';
import s from './Main.module.scss'

const Main = () => {
    return (
        <div className={['Main', s.main].join(' ')}>
            <button> Окно/список</button>
         <h1>Задачи по работе</h1>
        <Routes>
            <Route  path={'/'} element={<Navigate to={'/mainList'}/>}/>
            <Route  path={'/mainList'} element={<MainList/>}/>
            <Route  path={'/mainWindow'} element={<MainWindow/>}/>
        </Routes>
        </div>
    );
};

export default Main;