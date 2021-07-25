import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../components/styles.css"

const WritingPage = () => (
  <Layout>
    <Seo title="Writing" />
    <body>
      <h1>Hi from the Writing page!</h1>
      <section>
        <div class="content">
          <a class="linkbox">link #1 </a>
          <a class="linkbox">link #2 </a>
          <a class="linkbox">link #3 </a>
          <a class="linkbox">link #4 </a>
          <a class="linkbox">link #5 </a>
          <a class="linkbox">link #6 </a>
          <a class="linkbox">link #7 </a>
          <Link to="/" class="linkbox">
            link #8
          </Link>
        </div>
      </section>
      
    </body>
    
  </Layout>
)

export default WritingPage
