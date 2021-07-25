import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

// custom stylesheet
import "./styles.css"

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
      }}
    >
      <h1 class="home">
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h2 class="links">
        <Link
          to="/writing/"
          style = {{
            color: `gray`,
            textDecoration: `none`,
          }}
        >
          Writing
        </Link>
      </h2>
      <h2 class="links">
        <Link
          to="/photography/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          Photography
        </Link>
      </h2>
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
