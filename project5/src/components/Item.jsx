import React from 'react'
import Button from './UI/button/Button';


const Item = (props) => {
    return (
        <div className="item">
            <div className="item__content">
                <strong> {props.number}. {props.item.title} </strong>
                <div>
                    {props.item.body}
                </div>
            </div>
            <div className="item__btns">
                <Button onClick={() => props.remove(props.item)}> Delete </Button>
            </div>
      </div>
    );
};
export default Item;