import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Item from "./Item";

const ListItem = ({items, title,remove}) => {
     if (!items.length) {
         return (
            <h1 
            style={{textAlign: 'center'}}> 
            No items in a list 
            </h1>
         );
     };

    return (
        <div>
            <h1 className="heading"> {title} </h1>
            <TransitionGroup>
                {items.map((item, index) => 
                    <CSSTransition
                        key={item.id}
                        timeout={500}
                        classNames="item"
                    >
                        <Item remove={remove} number={index + 1} item={item} />
                    </CSSTransition>
                )} 
            </TransitionGroup>
        </div>
    );
};

export default ListItem;