import React from 'react';
// import ReactDOM from 'react-dom';
import faker from 'faker';

const CommentDetail = (props) =>{
    return (
    <div className="comment">
        <a href="/" className="avatar">
            <img alt="placeholder" src={faker.image.image()}  />
        </a>  
        <div className="content">
            <a href="/" className="author">
                {props.author}   
            </a>
            <div className="metadata">
                <span className="date">{props.time}</span>
            </div>
            <div className="text">
                {props.des}
            </div>
        </div>
    </div>
    )
}
export default CommentDetail;