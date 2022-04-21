import { Button, Input } from 'antd';
import React, { useState } from 'react';
import s from './MainListItem.module.scss';
import RadioSection from './RadioSection/RadioSection';

const MainListItem = ({setItem, update, remove, ...props }) => {
  const [toggle, setToggle] = useState(false)
  const [text, setText] = useState(props.text)
console.log(props)
  return (
    <li className={props.completed ?  s.mainlistitem + ' ' + s.completed : s.mainlistitem } >
      <header>
        <h3 hidden={toggle} onDoubleClick={()=> setToggle(!toggle)}>{props.text}</h3>
        <Input hidden={!toggle} value={text} autoFocus maxLength={30}
                        onChange={(e) => setText(e.target.value)} 
                        onBlur={()=> update(props.id, 'text', text)} 
                        onPressEnter={() =>setToggle(!toggle)}/>
        <p>Создано: {props.date}</p>
      </header>
      <main>
        <RadioSection name="important" text={'ВАЖНО'} flag={props.important} id={props.id} update={update}/>
        <RadioSection name="urgent" text={'СРОЧНО'}flag={props.urgent} id={props.id} update={update}/>
      </main>
      <footer>
        <Button ghost size='small' type='primary' onClick={()=> update(props.id, 'completed', !props.completed)}>Cделано</Button>
        <Button ghost size='small' type='danger' onClick={()=> remove(props.id)}>Удалить</Button>
      </footer>
    </li>
  );
};

export default MainListItem;
