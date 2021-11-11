import React from 'react'


const Item = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong> {props.item.id}. {props.item.title} </strong>
                <div>
                    {props.item.description}
                </div>
            </div>
            <div className="post__btns">
                <button className="post__btn"> Delete </button>
            </div>
      </div>
    );
};
export default Item;