import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../components/styles.css"

const WritingPage = () => (
  <Layout>
    <Seo title="Writing" />
    <main>
      <body>
        <h1>Hi from the Writing page!</h1>
        <section class="info">
          <p>I'm still building out this page, so check back soon!</p>
          <p>But here's an example of what's to come:</p>
          <div class="content">
            {/* <a class="linkbox">link #1 </a>
            <a class="linkbox">link #2 </a>
            <a class="linkbox">link #3 </a>
            <a class="linkbox">link #4 </a>
            <a class="linkbox">link #5 </a>
            <a class="linkbox">link #6 </a>
            <a class="linkbox">link #7 </a> */}
            <Link to="/genzwatchenthusiasm/" class="linkbox">
              Gen-Z Watch Enthusiasm
            </Link>
          </div>
        </section>
        
      </body>
    </main>
    
  </Layout>
)

export default WritingPage
