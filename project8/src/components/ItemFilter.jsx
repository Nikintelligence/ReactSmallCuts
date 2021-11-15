import React from 'react';
import Select from './UI/select/Select';
import Input from './UI/input/Input';

const ItemFilter = ({filter, setFilter}) => {
    return (
        <div>
        <Input
          value={filter.query}
          onChange={i => setFilter({...filter, query: i.target.value})}
          placeholder='Search...'
        ></Input>
        <Select
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})} 
        defaultV="Sort by:"
        options={[
          {value: 'title', name: 'By name'},
          {value: 'body', name: 'By description'},
        ]}
        ></Select>
      </div>
    )
}

export default ItemFilter;

