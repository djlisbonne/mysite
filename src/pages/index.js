import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import SunMoon from "../components/sunmoon"
import {FaLongArrowAltRight} from "react-icons/fa"
import {BsArrowRightShort} from "react-icons/bs"

import "../components/styles.css"
import Typewriter from "../components/typewriterelem"

const IndexPage = () => (
  <Layout>
    <Seo title="David Lisbonne"/>
    <body class="headline" id="mainapp">
      <section class="info">
        <div>
          <Typewriter></Typewriter>
          <h1 class="hello">Hi, I'm David.</h1> 
          <h2 class="quick-bio">engineer | writer | photographer</h2>
        </div>
        
        <h1> 
            <p class="typewrite" data-period="2000" data-type='[ "Hi, I am Si.", "I am Creative.", "I Love Design.", "I Love to Develop." ]'>
                <span class="wrap"></span>
            </p>
        </h1>


        <div class="bio">
          <p>
            Silicon Valley <BsArrowRightShort/> University of Michigan
          </p>
        </div>

      </section>

      
    </body>
  
  </Layout>
)

export default IndexPage
