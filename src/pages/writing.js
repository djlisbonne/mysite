import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../components/styles.css"

const WritingPage = () => (
  <Layout>
    <Seo title="Writing" />
    <main>
      <h1>Hi from the second page</h1>
      <section>
        <h2> inner section</h2>
      </section>
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
      
    </main>
    

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default WritingPage
