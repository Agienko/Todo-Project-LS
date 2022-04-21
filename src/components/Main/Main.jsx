import React, { useState } from 'react';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import "antd/dist/antd.css";

import MainList from '../MainList/MainList';
import s from './Main.module.scss'

const Main = () => {

    const [name, setName] = useState('')
    
    return (
        <div className={['Main', s.main].join(' ')}>
        <h2>{name ? name : 'Выберите список'}</h2>
        <Routes>
            <Route  path={'/'} element={<Navigate to={'/mainList'}/>}/>
            <Route  path={'/mainList/*'} element={<MainList setName={setName}/>}/>
        </Routes>
        </div>
    );
};

export default Main;