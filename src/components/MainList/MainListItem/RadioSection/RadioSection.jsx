import React from 'react';
import s from './RadioSection.module.scss'
import { Switch } from 'antd';
const RadioSection = ({name, text, flag, id, update}) => {
    function onChange(checked) {
        console.log(`switch to ${checked}`);
        update(id, name, !flag)
      }
    return (
        <section className={s.radiosection}>
            <p>{text}</p>
            <Switch size='small' onChange={onChange} checked={flag}/>
        </section>
    );
};

export default RadioSection;