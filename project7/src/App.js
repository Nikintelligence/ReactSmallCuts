import React, {useState, useMemo} from 'react';
import './styles/index.css'
import ListItem from './components/ListItems';
import ItemForm from './components/ItemForm';
import ItemFilter from './components/ItemFilter';
import Modal from './components/UI/modal/Modal';
import Button from './components/UI/button/Button';

function App() {
  const [items, setItems] = useState([
    {id: 1, title: 'Item 1', body: 'Description'},
    {id: 2, title: 'Item 2', body: 'Description'},
    {id: 3, title: 'Item 3', body: 'Description'}
  ])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);


  const sortedItems = useMemo(() => {
    if (filter.sort) {
      return [...items].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return items
  }, [filter.sort, items])

  const sortedAndSearchedItems = useMemo(() =>{
    return sortedItems.filter(item => item.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedItems])

  const createItem = (newItem) => {
    setItems([...items, newItem])
    setModal(false)
  }
  
  const removeItem = (item) => {
    setItems(items.filter(it => it.id !== item.id))
  }

  return (
    <div className="App">
      <Button style={{marginTop: 30}} onClick={() => setModal(true)}>
        Create User
      </Button>
      <Modal visible={modal} setVisible={setModal}>
        <ItemForm create={createItem} />
      </Modal>
      <hr style={{margin: '15px 0'}}></hr>
      <ItemFilter filter={filter} setFilter={setFilter}></ItemFilter>
      <ListItem remove={removeItem} items = {sortedAndSearchedItems} title="List of items 1:" />
    </div>
  );
}

export default App;
