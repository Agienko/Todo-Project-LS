import React from 'react';
import s from './MainListItem.module.scss';
import RadioSection from './RadioSection/RadioSection';

const MainListItem = () => {
  return (
    <li className={s.mainlistitem}>
      <header>
        <h3> Сделть принтер </h3>
        <h4>дата</h4>
      </header>
       
       <RadioSection name="important" text={'ВАЖНО'}/>
       <RadioSection name="urgent" text={'СРОЧНО'}/>
      <footer>
      <button>сделано</button>
        <button>удалить</button>
      </footer>
       
      
    </li>
  );
};

export default MainListItem;
