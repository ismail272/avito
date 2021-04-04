import React from 'react';

function Comment(props) {
    return (
        <div className="comment">
            <div className="date">{props.comment.date}</div>
            <div className="text">{props.comment.text}</div>
        </div>
    );
}

export default Comment;