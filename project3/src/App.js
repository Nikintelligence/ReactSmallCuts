import React, {useState} from 'react';
import './styles/index.css'
import Item from "./components/Item";

function App() {
  const [items] = useState([
    {id: 1, title: 'Item 1', body: 'Description'},
    {id: 2, title: 'Item 2', body: 'Description'},
    {id: 3, title: 'Item 3', body: 'Description'}
])

  return (
    <div className="App">
      <h1 className="heading"> Items: </h1>
      {items.map( post => 
          <Item post={ post } key={post.id}/>
        )} 
    </div>
  );
}

export default App;
