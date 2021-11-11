import React, {useState} from 'react';
import './styles/index.css'
import ListItem from './components/ListItems';
import ItemForm from './components/ItemForm';

function App() {
  const [items, setItems] = useState([
    {id: 1, title: 'Item 1', body: 'Description'},
    {id: 2, title: 'Item 2', body: 'Description'},
    {id: 3, title: 'Item 3', body: 'Description'}
  ])

  const createItem = (newItem) => {
    setItems([...items, newItem])
  }
  
  const removeItem = (item) => {
    setItems(items.filter(it => it.id !== item.id))
  }

  return (
    <div className="App">
      <ItemForm create={createItem} />
      {items.length !== 0
      ? 
      <ListItem remove={removeItem} items = {items} title="List of items 1:" />
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
