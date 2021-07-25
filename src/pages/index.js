import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import SunMoon from "../components/sunmoon"

import "../components/styles.css"

const IndexPage = () => (
  <Layout>
    <Seo title="David Lisbonne"/>
    <body class="headline">
      <section class="info">
       

        <div>
          <h1 class="hello">Hi, I'm David.</h1> 
          <h2 class="quick-bio">engineer | writer | photographer</h2>
        </div>
        
        <div class="bio">
          <p>
            This is where the bio would normally, go, talking about who I am, where I grew up, what I'm 
            interested in, how I built the site with Gatsby, etc.
          </p>
        </div>

      </section>

    </body>
    <svg class="sunimg" width="186" height="186" viewBox="0 0 186 186" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="93" cy="93" r="93" fill="url(#paint0_radial)"/>
          <path d="M92.8335 68.4585C94.8647 68.4585 96.5469 66.7764 96.5469 64.7134C96.5469 62.6821 94.8647 61 92.8335 61C90.8022 61 89.1201 62.6821 89.1201 64.7134C89.1201 66.7764 90.8022 68.4585 92.8335 68.4585ZM110.099 75.5996C111.527 77.0278 113.908 77.0278 115.336 75.5996C116.828 74.1396 116.828 71.791 115.336 70.3311C113.908 68.8711 111.527 68.8711 110.099 70.3311C108.639 71.791 108.639 74.1396 110.099 75.5996ZM70.2993 75.6313C71.7593 77.0596 74.1079 77.0596 75.5361 75.6313C77.0278 74.1396 77.0278 71.8228 75.5361 70.3628C74.1079 68.9028 71.7593 68.9028 70.2993 70.3628C68.8394 71.8228 68.8394 74.1396 70.2993 75.6313ZM92.8335 109.083C101.657 109.083 109.02 101.752 109.02 92.897C109.02 84.0737 101.657 76.7422 92.8335 76.7422C84.0103 76.7422 76.6787 84.0737 76.6787 92.897C76.6787 101.752 84.0103 109.083 92.8335 109.083ZM64.7134 96.6104C66.7446 96.6104 68.4268 94.9282 68.4268 92.8652C68.4268 90.834 66.7446 89.1519 64.7134 89.1519C62.6821 89.1519 61 90.834 61 92.8652C61 94.9282 62.6821 96.6104 64.7134 96.6104ZM120.954 96.8325C122.985 96.8325 124.667 95.1504 124.667 93.0874C124.667 91.0562 122.985 89.374 120.954 89.374C118.922 89.374 117.24 91.0562 117.24 93.0874C117.24 95.1504 118.922 96.8325 120.954 96.8325ZM70.3311 115.368C71.791 116.828 74.1396 116.828 75.5679 115.368C77.0278 113.908 77.0278 111.559 75.5679 110.099C74.1396 108.671 71.791 108.671 70.3311 110.099C68.8394 111.559 68.8394 113.908 70.3311 115.368ZM109.909 115.526C111.369 116.986 113.717 116.986 115.177 115.526C116.637 114.098 116.637 111.75 115.177 110.29C113.717 108.83 111.369 108.83 109.909 110.29C108.449 111.75 108.449 114.098 109.909 115.526ZM92.8335 124.667C94.8647 124.667 96.5469 123.017 96.5469 120.954C96.5469 118.922 94.8647 117.24 92.8335 117.24C90.8022 117.24 89.1201 118.922 89.1201 120.954C89.1201 123.017 90.8022 124.667 92.8335 124.667Z" fill="white" fill-opacity="0.95"/>
          <defs>
              <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(93 93) rotate(90) scale(93)">
                  <stop offset="0.333333" stop-color="#FF9900"/>
                  <stop offset="1" stop-color="#C4C4C4" stop-opacity="0"/>
              </radialGradient>
          </defs>
      </svg>
  
  </Layout>
)

export default IndexPage
