import React from 'react';
import BigImg from "./BigImg";
import Comments from "./Comments";
import {Link} from "react-router-dom";


function ModalWindow(props) {

    return (
        <div className={props.modalActive ? 'modal active' : 'modal'}>
            <div className='modal-content'>
                <div className="btn">
                    <Link to="/">
                        <button onClick={() => props.setModalActive(false)}>✕</button>
                    </Link>
                </div>
            <div >
                <BigImg />
            <div className="add-name">
                <input type="text" placeholder='Ваше имя'/>
            </div>
                <div className="add-name">
                    <input type="text" placeholder='Ваш комментарий'/>
                </div>
                <div className="add-commentary">
                    <button>Оставить комментарий</button>
                </div>
            </div>
            <div>
                <Comments/>
            </div>
            </div>
        </div>
    );
}

export default ModalWindow;