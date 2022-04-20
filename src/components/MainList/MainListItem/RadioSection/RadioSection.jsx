import React from 'react';
import s from './RadioSection.module.scss'

const RadioSection = ({name, text}) => {
    return (
        <section className={s.radiosection}>
        <label forhtml={name}>
            <p>{text}</p>
            
            <input type="radio" name={name} />
            </label>
            <label forhtml={name}>
                <p>НЕ {text} </p>
            
            <input type="radio" name={name} />
            </label>
       </section>
    );
};

export default RadioSection;