import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../components/styles.css"

const PhotographyPage = () => (
  <Layout>
    <Seo title="Photograhy" />
    <h1>Hi from the Photography page!</h1>
    <p>Welcome to my photos</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PhotographyPage
