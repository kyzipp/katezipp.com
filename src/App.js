import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import kate from './containers/kate.png';
import Routes from 'react-static-routes'
import '../node_modules/bulma/css/bulma.css'

const App = () => (
  <Router >
    <div>
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="http://katezipp.com">
            <figure className="image is-24x24">
              <img className="is-rounded" src={kate} />
            </figure>
          </a>
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbar" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="#about">About</Link>
            <Link className="navbar-item" to="#vitae">Vitae</Link>
            <Link className="navbar-item" to="#research">Research</Link>
            <Link className="navbar-item" to="#teaching">Teaching</Link>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="content">
          <Routes />
        </div>
      </div>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>katezipp.com</strong> © {new Date().getFullYear()} by Katherine Y. Zipp, PhD
          </p>
          <p>Last Updated {new Date().toLocaleDateString()}</p>
        </div>
      </footer>
    </div>
  </Router>
)

export default hot(module)(App)
