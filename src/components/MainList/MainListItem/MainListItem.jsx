import React from 'react';
import s from './MainListItem.module.scss';
import RadioSection from './RadioSection/RadioSection';

const MainListItem = ({setItem, update, remove, ...props }) => {
  
  return (
    <li className={props.completed ?  s.mainlistitem + ' ' + s.completed : s.mainlistitem } >
      <header>
        <h3>{props.text}</h3>
        <h4>{props.date}</h4>
      </header>
       <RadioSection name="important" text={'ВАЖНО'} flag={props.important} id={props.id} update={update}/>
       <RadioSection name="urgent" text={'СРОЧНО'}flag={props.urgent} id={props.id} update={update}/>
      <footer>
      <button onClick={()=> update(props.id, 'completed', !props.completed)}>сделано</button>
        <button onClick={()=> remove(props.id)}>удалить</button>
      </footer>
    </li>
  );
};

export default MainListItem;
