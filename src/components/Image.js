import React from 'react';
import {Link} from "react-router-dom";

function Image(props) {
    return (
        <div className="image">
            <Link to={`/${props.image.id}`}>
                <img src={props.image.url} alt="img"
                 onClick={() => props.setModalActive(true)}/>
            </Link>
        </div>
    );
}

export default Image;