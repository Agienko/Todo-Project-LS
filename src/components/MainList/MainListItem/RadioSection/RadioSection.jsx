import React from 'react';
import s from './RadioSection.module.scss'

const RadioSection = ({name, text, flag, id, update}) => {

    return (
        <section className={s.radiosection} onChange={() => update(id, name, !flag)}>
            <label forhtml={name + id} >
                <p>{text}</p>
                <input type="radio" name={name + id} checked={flag} readOnly/>
            </label>
            <label forhtml={name + id} >
                <p>НЕ {text} </p>
                <input type="radio" name={name + id} checked={!flag} readOnly/>
            </label>
       </section>
    );
};

export default RadioSection;