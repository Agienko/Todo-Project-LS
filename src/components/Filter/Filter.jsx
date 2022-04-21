import {Select } from 'antd';
import React from 'react';

const { Option } = Select;

const Filter = ({setItems, items}) => {

    const handleChange = (value) =>{
        switch (value) {
            case "ALL":
                setItems(items)
                break;
            case "IMP_URG":
                setItems(items.filter(i => i.important).filter(i => i.urgent))
                break;
            case "IMP_nURG":
                setItems(items.filter(i => i.important).filter(i => !i.urgent))
                break;
            case "nIMP_URG":
                setItems(items.filter(i => !i.important).filter(i => i.urgent))
                break;
            case "nIMP_nURG":
                setItems(items.filter(i => !i.important).filter(i => !i.urgent))
                break;
            default:
                break;
        }
    }

    return (
      
    <Select defaultValue="ALL" style={{ width: 210}} onChange={handleChange}>
      <Option value="ALL">Все</Option>
      <Option value="IMP_URG">Важные и Срочные</Option>
      <Option value="IMP_nURG">Важные и Не срочные</Option>
      <Option value="nIMP_URG">Не Важные и Срочные</Option>
      <Option value="nIMP_nURG">Не Важные и Не срочные</Option>
    </Select>
    );
};

export default Filter;