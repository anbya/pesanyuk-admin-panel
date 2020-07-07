import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import pict300x150 from '../assets/img/300x150.png';

class navbar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        navCollapse:false,
        fixedNav:""
      };
    }
    componentDidMount() {
      document.addEventListener('scroll', () => {
        if (window.scrollY <= 100) {
          this.setState({ 
            fixedNav:"" 
          })
        } else {
          this.setState({ 
            fixedNav:"top" 
          })
        }
      });
    }
    navToggle = () =>  {
      this.setState({
        ...this.state,
        navCollapse: !this.state.navCollapse
      });
    }
    render() {
        return (
            <div>
              <Navbar color="light" light expand="md" fixed={this.state.fixedNav}>
                <NavbarBrand href="/" style={{width:"150px"}}><img width="100%" src={pict300x150} alt="pict300x150" /></NavbarBrand>
                <NavbarToggler onClick={() => this.navToggle()} />
                <Collapse isOpen={this.state.navCollapse} navbar>
                  <Nav className="ml-auto" navbar >
                    <li className="nav-item">
                      <a className="myNavlinkActive" href="/">HOME</a>
                    </li>
                    <li className="nav-item">
                      <a className="myNavlink" href="/">SKILLS</a>
                    </li>
                    <li className="nav-item">
                      <a className="myNavlink" href="/">EXPERIENCE</a>
                    </li>
                    <li className="nav-item">
                      <a className="myNavlink" href="/">PORTFOLIO</a>
                    </li>
                    <li className="nav-item">
                      <a className="myNavlink" href="/">SERVICES</a>
                    </li>
                    <li className="nav-item">
                      <a className="myNavlink" href="/">CONTACT</a>
                    </li>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
        );
    }
}

export default navbar;