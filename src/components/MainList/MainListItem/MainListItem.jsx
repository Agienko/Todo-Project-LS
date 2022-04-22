import { Button, Input } from 'antd';
import React, { useState } from 'react';
import s from './MainListItem.module.scss';
import RadioSection from './RadioSection/RadioSection';

const MainListItem = ({setItem, update, remove, ...props }) => {
  const [toggle, setToggle] = useState(false)
  const [text, setText] = useState(props.text)


  let classNameArr = [s.mainlistitem]

  if(props.important && props.urgent) classNameArr = [s.mainlistitem, s.impUrg]
  if(props.important && !props.urgent) classNameArr = [s.mainlistitem, s.impNurg]
  if(!props.important && props.urgent) classNameArr = [s.mainlistitem, s.nImpUrg]
  if(!props.important && !props.urgent) classNameArr = [s.mainlistitem, s.nImpNurg]
  if(props.completed) classNameArr = [s.mainlistitem, s.completed]
 


  return (
    <li className={classNameArr.join(' ')} >
      <header>
        <h3 className={props.completed ? s.textCompleted : ''} hidden={toggle} 
            onDoubleClick={()=> setToggle(!toggle)}
        >{props.text}</h3>
        <Input hidden={!toggle} value={text} autoFocus maxLength={30}
                onChange={(e) => setText(e.target.value)} onPressEnter={() =>setToggle(!toggle)}
                onBlur={()=> {update(props.id, 'text', text); setToggle(!toggle)}} />
        <p>{props.date}</p>
      </header>
      <main>
        <RadioSection name="important" text={'ВАЖНО'} flag={props.important} id={props.id} update={update}/>
        <RadioSection name="urgent" text={'СРОЧНО'}flag={props.urgent} id={props.id} update={update}/>
      </main>
      <footer>
        <Button ghost size='small' type='primary' 
          onClick={()=> update(props.id, 'completed', !props.completed)}
        >Cделано</Button>
        <Button ghost size='small' type='danger' onClick={()=> remove(props.id)}>Удалить</Button>
      </footer>
    </li>
  );
};

export default MainListItem;
