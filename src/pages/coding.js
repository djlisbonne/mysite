import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const CodingPage = () => (
  <Layout>
    <Seo title="Coding" />
    <h1>Hi from the Coding page!</h1>
    <p>Welcome to some of my coding projects</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CodingPage
