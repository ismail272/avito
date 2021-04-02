import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadModal} from "../redux/action";
import { useParams } from "react-router-dom";

function BigImg(props) {
    const bigImg = useSelector(state => state.modal.items.url);
    const dispatch = useDispatch()
    const params = useParams();

    useEffect(() => {
        dispatch(loadModal(params.id))
    }, [params])

    return (
        <div>
            <div className="big-img">
              <img src={bigImg} />
            </div>



        </div>
    );
}

export default BigImg;