import React from 'react'

const Item = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong> {props.post.id}. {props.post.title} </strong>
                <div>
                    {props.post.description}
                </div>
            </div>
            <div className="post__btns">
                <button className="post__btn"> Delete </button>
            </div>
      </div>
    );
};
export default Item;