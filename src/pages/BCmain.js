import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import scrollToComponent from 'react-scroll-to-component';
import "../App.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Container
} from "reactstrap";
import pictarmyali from '../assets/img/armyali-white.png';
import pictbg from '../assets/img/bg.jpg';
import Jumbotron from "./jumbotron";
import Skills from "./skill";
// import Experience from "./experience";
import Portofolio from "./portofolio";
import Services from "./services";
// import Clients from "./clients";
// import Testimonial from "./testimonial";
import Contact from "./contact";

class mainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navCollapse:false,
      navState:"",
      theposition:""
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
      <div>
        <Container fluid={true} style={{backgroundColor:"#f8f9fa"}}>
          <Navbar light expand="md" fixed="top" style={{backgroundColor:"#2A272A"}}>
            <NavbarBrand href="/" style={{width:"150px"}}>
              <img width="100%" src={pictarmyali} alt="pictarmyali" />
              {/* <h3 className="display-5">ARMYALI</h3> */}
            </NavbarBrand>
            <NavbarToggler className="navbar-dark" onClick={() => this.navToggle()} style={{borderColor:"#FFFFFF"}} />
            <Collapse isOpen={this.state.navCollapse} navbar>
              <Nav className="ml-auto" navbar >
                <li className="nav-item" onClick={(e) => {e.preventDefault();this.setState({...this.state,navState:"HOME"});scrollToComponent(this.HOME, { offset: -100, align: 'top', duration: 500})}}>
                  <a className={(this.state.navState === "HOME" ||this.state.navState === ""?'myNavlinkActive':'myNavlink')} href="/">HOME</a>
                </li>
                <li className="nav-item" onClick={(e) => {e.preventDefault();this.setState({...this.state,navState:"SKILLS"});scrollToComponent(this.SKILLS, { offset: -100, align: 'top', duration: 500})}}>
                  <a className={(this.state.navState === "SKILLS"?'myNavlinkActive':'myNavlink')} href="/">SKILLS</a>
                </li>
                <li className="nav-item" onClick={(e) => {e.preventDefault();this.setState({...this.state,navState:"SERVICES"});scrollToComponent(this.SERVICES, { offset: -100, align: 'top', duration: 500})}}>
                  <a className={(this.state.navState === "SERVICES"?'myNavlinkActive':'myNavlink')} href="/">WHAT I DO</a>
                </li>
                {/* <li className="nav-item" onClick={(e) => {e.preventDefault();this.setState({...this.state,navState:"EXPERIENCE"});scrollToComponent(this.EXPERIENCE, { offset: -100, align: 'top', duration: 500})}}>
                  <a className={(this.state.navState === "EXPERIENCE"?'myNavlinkActive':'myNavlink')} href="/">EXPERIENCE</a>
                </li> */}
                <li className="nav-item" onClick={(e) => {e.preventDefault();this.setState({...this.state,navState:"PORTFOLIO"});scrollToComponent(this.PORTFOLIO, { offset: -100, align: 'top', duration: 500})}}>
                  <a className={(this.state.navState === "PORTFOLIO"?'myNavlinkActive':'myNavlink')} href="/">PROJECTS</a>
                </li>
                <li className="nav-item" onClick={(e) => {e.preventDefault();this.setState({...this.state,navState:"CONTACT"});scrollToComponent(this.CONTACT, { offset: -100, align: 'top', duration: 500})}}>
                  <a className={(this.state.navState === "CONTACT"?'myNavlinkActive':'myNavlink')} href="/">CONTACT</a>
                </li>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
        <Container fluid={true} style={{paddingTop:"17vh",backgroundImage:`url(${pictbg})`,backgroundSize:"cover"}}>
          <section ref={(section) => { this.HOME = section; }}>
            <Jumbotron />
          </section>
        </Container>
        <Container fluid={true}>
          <section ref={(section) => { this.SKILLS = section; }}>
            <Skills />
          </section>
        </Container>
        <Container fluid={true}>
          <section ref={(section) => { this.SERVICES = section; }}>
            <Services />
          </section>
        </Container>
        {/* <Container fluid={true}>
          <section ref={(section) => { this.EXPERIENCE = section; }}>
            <Experience />
          </section>
        </Container> */}
        <Container fluid={true} style={{paddingBottom:"30px"}} onClick={() => {this.setState({...this.state,theposition:"Portofolio"});}}>
          <section ref={(section) => { this.PORTFOLIO = section; }}>
            <Portofolio />
          </section>
        </Container>
        {/* <Container fluid={true}>
          <Clients />
        </Container>
        <Container fluid={true}>
          <Testimonial />
        </Container> */}
        <Container fluid={true} style={{marginBottom:"20vh"}}>
          <section ref={(section) => { this.CONTACT = section; }}>
            <Contact />
          </section>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    anbyaBoilerplate: state.reducer.anbyaBoilerplate
  };
};

export default withRouter(connect(mapStateToProps)(mainPage));