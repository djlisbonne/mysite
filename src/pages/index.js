import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {BsArrowRightShort} from "react-icons/bs"
import {FcHome} from "react-icons/fc"
import {IoSchool, IoLogoFirebase} from "react-icons/io5"
import {GrReactjs, GrGatsbyjs, GrHtml5, GrCss3, GrJs} from "react-icons/gr"

import "../components/styles.css"
import Typewriter from 'typewriter-effect';

const IndexPage = () => (
  <Layout>
    <Seo title="David Lisbonne"/>
    <body class="app">
      <section class="info">
        <div class="hello">
          <Typewriter onInit={(typewriter) => {
              typewriter
                .typeString("Hello!")
                .pauseFor(800)
                .deleteAll()
                .typeString("I'm David.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Thanks for visiting my site,")
                .pauseFor(800)
                .deleteAll()
                .typeString("I hope you enjoy!")
                .pauseFor(4000)
                .deleteAll()
                .pauseFor(1000)
                .typeString("Hi,")
                .pauseFor(500)
                .typeString(" I'm David.")
                .pauseFor(60000)
                .start()
            }}/>
        </div>
        <h2 class="quick-bio">engineer | writer | photographer</h2>
        <div class="bio">
          <p>
            A little bit about myself: I'm a backpacker, tennis player, watch loving 
            car enthusiast, in-over-my-head photographer (thanks medium format), and 
            hobbyist writer.
          </p>
          <p>
            I'm passionate about building products that bring meaningful impacts 
            to consumers. Whether it's through empowering financial freedom, or streamlining
            work life, I want to build tools that expand the world's most valuable resource: <strong><i>human capital</i></strong>.
          </p>
        </div>
      </section>
      <hr></hr>
      <section class="fun-facts">
        <p><b>Some Extras</b></p>
        <ul>
          <li>
            I built this site from scratch! Using:
            <ul>
              <li>
              <span id="icon">Gatsby <GrGatsbyjs size={16}/></span>
              </li>
              <li>
                <span id="icon">Firebase <IoLogoFirebase size={16}/></span>
              </li>
              <li>
                <span id="icon">React <GrReactjs size={16}/></span>
              </li>
              <li>
                <span id="icon"> HTML / CSS / JS        (<GrHtml5 size={16}/> / <GrCss3 size={16}/> / <GrJs size={20}/>)</span>
              </li>
            </ul>
          </li>
          <li>
            <FcHome/> Silicon Valley <BsArrowRightShort/> <IoSchool/> University of Michigan
          </li>
          <li>
            <i>Highly </i> competitive Catan player
          </li>
          <li>
            Formula 1 die-hard
          </li>
        </ul>
      </section>

      
    </body>
  
  </Layout>
)

export default IndexPage
