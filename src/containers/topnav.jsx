import React from 'react'
import kate from './kate.png';
import { Router, Link } from 'react-static'

export class TopNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isActive: false };
    }

    onClick = () => {
        const currentState = this.state.isActive
        this.setState({
          isActive: !currentState
        });
      }
      
    render() {
        const menuVis = this.state.isActive ? 'is-active navbar-menu' : 'navbar-menu';
        return (
            <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="http://katezipp.com">
                        <figure className="image is-24x24">
                            <img className="is-rounded" src={kate} />
                        </figure>
                    </a>
                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar" onClick={this.onClick}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbar" className={menuVis}>
                    <div className="navbar-start">
                        <span>{this.state.isActive}</span>
                        <Link className="navbar-item" to="#about">About</Link>
                        <Link className="navbar-item" to="#vitae">Vitae</Link>
                        <Link className="navbar-item" to="#research">Research</Link>
                        <Link className="navbar-item" to="#pubs">Publications</Link>
                        <Link className="navbar-item" to="#teaching">Teaching</Link>
                    </div>
                </div>
            </nav>
        );
    }
}