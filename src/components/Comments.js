import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadModal } from '../redux/action';
import Comment from './Comment';
import ReactLoading from 'react-loading';

function Comments(props) {
  const comments = useSelector((state) => state.modal.items.comments);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.modal.loading);

  useEffect(() => {
    dispatch(loadModal());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="comment-loader">
        <ReactLoading type="spin" width={50} height={50} color="darkgrey" />
      </div>
    );
  }

  return comments === undefined
    ? ''
    : comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      });
}

export default Comments;
