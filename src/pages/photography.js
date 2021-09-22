import * as React from "react"
import { useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { ImageGrid } from "../components/ImageGrid"

import "../components/styles.css"
import Modal from "../components/modal"
import { AnimatePresence, motion } from "framer-motion"

const PhotographyPage = () => {

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <Layout>
      <Seo title="Photography" />
      <div className="phototitle">Some favorites from over the years . . .</div>
      <div class="photoapp">
        <ImageGrid setSelectedImg={setSelectedImg} />
        <AnimatePresence>
          { selectedImg && <motion.div  
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1}}
                exit={{ opacity: 0 }}> 
                <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> </motion.div> }
        </AnimatePresence>
      </div>
    </Layout>
  )

}

export default PhotographyPage
