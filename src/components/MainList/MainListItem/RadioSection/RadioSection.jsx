import React from 'react';
import s from './RadioSection.module.scss'
import { Switch } from 'antd';

const RadioSection = ({name, text, flag, id, update}) => {
   
    return (
        <section className={s.radiosection}>
            <p>{text}</p>
            <Switch size='small' onChange={() => update(id, name, !flag)} checked={flag}/>
        </section>
    );
};

export default RadioSection;