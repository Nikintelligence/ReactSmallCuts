import React, {useState, useRef} from 'react';
import './styles/index.css'
import ListItem from './components/ListItems';
import Button from "./components/UI/button/Button"
import Input from "./components/UI/input/Input"

function App() {
  const [items] = useState([
    {id: 1, title: 'Item 1', body: 'Description'},
    {id: 2, title: 'Item 2', body: 'Description'},
    {id: 3, title: 'Item 3', body: 'Description'}
  ])

  const [title, setTitle] = useState('')

  const inputRef = useRef();

  const addNewItem = (i) => {
    i.preventDefault()
    console.log(title)
    console.log(inputRef.current.value)
  }

  return (
    <div className="App">
      <form>

        {/*  Controlled component */}

        <Input 
        value={title}
        onChange={i => setTitle(i.target.value)}
        type="text" 
        placeholder="Title of item"></Input>

        {/* Uncontrolled component  */}
        
        <Input 
        ref={inputRef}
        type="text" 
        placeholder="Description of item"></Input>
        <Button onClick={addNewItem} >Create item</Button>
      </form>
      <ListItem items = {items} title="List of items 1:" />
    </div>
  );
}

export default App;
