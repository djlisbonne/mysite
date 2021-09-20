import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

// custom stylesheet
import "./styles.css"
// import { FaBlackberry } from "react-icons/fa"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h1>
        <Link
          to="/"
          style={{
            color: `#FF9900`,
            textDecoration: `none`,
            fontWeight: 300,
            fontSize: `1.5rem`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div style={{display: "flex", justifyContent: "flex-end",}}>
        <h2 class="links">
          <Link
            to="/coding/"
            style = {{
              color: `cornflowerblue`,
              textDecoration: `none`,
              fontSize: `1rem`,
              paddingBottom: `5px`,
              borderBottom: `0.8px solid darkgray`,
            }}
          >
            Coding
          </Link>
        </h2>
        <h2 style={{fontWeight: "200", paddingLeft: 5, paddingRight: 5}}> | </h2>
        <h2 class="links">
          <Link
            to="/writing/"
            style = {{
              color: `cornflowerblue`,
              textDecoration: `none`,
              fontSize: `1rem`,
              paddingBottom: `5px`,
              borderBottom: `0.8px solid darkgray`,
            }}
          >
            Writing
          </Link>
        </h2>
        <h2 style={{fontWeight: "200", paddingLeft: 5, paddingRight: 5}}> | </h2>
        <h2 class="links">
          <Link
            to="/photography/"
            style={{
              color: `cornflowerblue`,
              textDecoration: `none`,
              fontSize: `1rem`,
              paddingBottom: `5px`,
              borderBottom: `0.8px solid darkgray`,
            }}
          >
            Photography
          </Link>
        </h2>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
