import React, {useState} from 'react'
import Button from "./UI/button/Button"
import Input from "./UI/input/Input"

const ItemForm = ({create}) => {
    const [item, setItem] = useState({ title:'', body:''})

    const addNewItem = (i) => {
        i.preventDefault()
        const newItem = {
            ...item, id: Date.now()
        }
        create(newItem)
        setItem({title: '', body: ''})
      }
    
    return (
        <form>
        <Input 
        value={item.title}
        onChange={i => setItem({...item, title: i.target.value})}
        type="text" 
        placeholder="Title of item"></Input>

        <Input 
        value={item.body}
        onChange={i => setItem({...item, body: i.target.value})}
        type="text" 
        placeholder="Description of item"></Input>

        <Button onClick={addNewItem} >Create item</Button>
      </form>
    );
};

export default ItemForm;
