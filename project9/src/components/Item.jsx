import React from 'react'
import Button from './UI/button/Button';
import {useNavigate} from 'react-router-dom'

const Item = (props) => {
    const navigate = useNavigate()
    return (
        <div className="item">
            <div className="item__content">
                <strong> {props.item.id}. {props.item.title} </strong>
                <div>
                    {props.item.body}
                </div>
            </div>
            <div className="item__btns">
                <Button onClick={() => navigate(`${props.item.id}`)}> Open </Button>
                <Button onClick={() => props.remove(props.item)}> Delete </Button>
            </div>
      </div>
    );
};
export default Item;