import React, {useState, useMemo} from 'react';
import './styles/index.css'
import ListItem from './components/ListItems';
import ItemForm from './components/ItemForm';
import Select from './components/UI/select/Select';
import Input from './components/UI/input/Input';

function App() {
  const [items, setItems] = useState([
    {id: 1, title: 'Item 1', body: 'Description'},
    {id: 2, title: 'Item 2', body: 'Description'},
    {id: 3, title: 'Item 3', body: 'Description'}
  ])
  const [selectedSort, setSelectedSort] = useState('')

  const [searchQuery, setsearchQuery] = useState('')


  const sortedItems = useMemo(() => {
    if (selectedSort) {
      return [...items].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return items
  }, [selectedSort, items])

  const sortedAndSearchedItems = useMemo(() =>{
    return sortedItems.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, sortedItems])

  const createItem = (newItem) => {
    setItems([...items, newItem])
  }
  
  const removeItem = (item) => {
    setItems(items.filter(it => it.id !== item.id))
  }

  const sortItems = (sort) => {
    setSelectedSort(sort);
  }

  return (
    <div className="App">
      <ItemForm create={createItem} />
      <hr style={{margin: '15px 0'}}></hr>
      <div>
        <Input
          value={searchQuery}
          onChange={i => setsearchQuery(i.target.value)}
          placeholder='Search...'
        ></Input>
        <Select
        value={selectedSort}
        onChange={sortItems} 
        defaultV="Sort by:"
        options={[
          {value: 'title', name: 'By name'},
          {value: 'body', name: 'By description'},
        ]}
        ></Select>
      </div>
      {sortedAndSearchedItems.length !== 0
      ? 
      <ListItem remove={removeItem} items = {sortedAndSearchedItems} title="List of items 1:" />
      : 
      <h1 
      style={{textAlign: 'center'}}> 
      No items in a list 
      </h1>
    }
    </div>
  );
}

export default App;
