import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadModal} from "../redux/action";

function Comments(props) {
    const comments = useSelector(state => state.modal.items);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadModal())
    }, [dispatch])

    return (
        comments.map((comment) => {
                return (
                    <div className="comment">
                        <div className="date">{comment.date}</div>
                        <div className="text">{comment.text}</div>
                    </div>
                );
            })

    );
}

export default Comments;