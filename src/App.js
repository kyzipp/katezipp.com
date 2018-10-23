import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import '../node_modules/bulma/css/bulma.css'
import {TopNav} from './containers/topnav'

const App = () => (
  <Router >
    <div>
      <TopNav></TopNav>
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
