import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadModal } from "../redux/action";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";

function BigImg(props) {
  const bigImg = useSelector((state) => state.modal.items.url);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.modal.loading);
  const params = useParams();

  useEffect(() => {
    dispatch(loadModal(params.id));
  }, [params]);

  if (loading) {
    return (
      <div className="big-img-loading">
        <ReactLoading type="spin" width={100} height={100} color="darkgrey" />
      </div>
    );
  }

  return (
    <div>
      <div className="big-img">
        <img src={bigImg} />
      </div>
    </div>
  );
}

export default BigImg;
