import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg }) => {

    const { docs } = useFirestore('imagedocs');

    return (
        <div className="img-grid">
            { docs && docs.map(doc => (
                <motion.div className="img-wrap" id={doc.orientation} key={ doc.id }
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.5}}
                    onClick={() => setSelectedImg(doc.url)} >
                    <img src={ doc.url } alt="uploaded pic"/>
                </motion.div>
            ))}
        </div>
    )
}

export { ImageGrid }