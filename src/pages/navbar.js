import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import pictpesanyuk from '../assets/img/pesanyuk.png';

class navbar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        navCollapse:false,
        fixedNav:""
      };
    }
    navToggle = () =>  {
      this.setState({
        ...this.state,
        navCollapse: !this.state.navCollapse
      });
    }
    render() {
        return (
              <Navbar color="light" light expand="md" style={{position:"sticky",top:0,zIndex:1}}>
                <NavbarBrand href="/home" style={{width:"150px"}}><img className="portoimage" width="100%" src={pictpesanyuk} alt="pictpesanyuk" /></NavbarBrand>
                <NavbarToggler onClick={() => this.navToggle()} />
                <Collapse isOpen={this.state.navCollapse} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="/outlet">Outlet</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/categoryItem">Category item</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/item">Item</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/staff">Staff</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/">Log Out</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
        );
    }
}

export default navbar;