import React from 'react'
import Item from "./Item";

const ListItem = ({items, title}) => {
    return (
        <div>
            <h1 className="heading"> {title} </h1>
      {items.map((item) => 
          <Item item={ item } key={item.id} />
        )} 
        </div>
    );
};

export default ListItem;