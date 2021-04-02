import React, {} from 'react';
import Image from "./Image";
import { useSelector } from "react-redux";


function Images(props) {
    const images = useSelector(state => state.images.items);


    return (
        <div className="images-block">
            {images.map((image) => {
                return (
                    <Image key={image.id}
                           image={image}
                           modalActive={props.modalActive}
                           setModalActive={props.setModalActive}/>
                )
            })}
        </div>
    );
}

export default Images;