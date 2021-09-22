import React from 'react';
// import { motion } from "framer-motion";

const Modal = ({ selectedImg, setSelectedImg }) => {

    const handleClickOut = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
    }

    return (
        <div className="backdrop" onClick={handleClickOut}>
            <img src={selectedImg} alt="selected img" />
            {/* <figcaption className="bordertext"> location: san francisco shot on: Minolta SRT101 35mm</figcaption> */}
        </div>
    )
}

export default Modal;