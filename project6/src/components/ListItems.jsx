import React from 'react'
import Item from "./Item";

const ListItem = ({items, title,remove}) => {
    return (
        <div>
            <h1 className="heading"> {title} </h1>
      {items.map((item, index) => 
          <Item remove={remove} number={index + 1} item={item} key={item.id} />
        )} 
        </div>
    );
};

export default ListItem;