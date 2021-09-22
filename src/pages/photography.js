import * as React from "react"
import { useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { ImageGrid } from "../components/ImageGrid"

import "../components/styles.css"
import Modal from "../components/modal"

const PhotographyPage = () => {

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <Layout>
      <Seo title="Photography" />
      <div className="phototitle">Some favorites from over the years . . .</div>
      <div class="photoapp">
        <ImageGrid setSelectedImg={setSelectedImg} />
        { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
      </div>
    </Layout>
  )

}

export default PhotographyPage
