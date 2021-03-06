import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { FaChess } from "react-icons/fa"

const CodingPage = () => (
  <Layout>
    <Seo title="Coding" />
    <main>
      <body>
        <h1>Hi from the Coding page!</h1>
        <section class="info">
          <p>I'm still building out this page, so check back soon!</p>
          <p>But here's an example of what's to come:</p>
          <div class="content">
            {/* <a class="linkbox">link #1 </a> */}
            {/* <a class="linkbox">link #2 </a> */}
            <Link to="/lichessdistribution/" class="linkbox">
              <FaChess size={36}/>
            </Link>
          </div>
        </section>
        
      </body>
    </main>
  </Layout>
)

export default CodingPage
