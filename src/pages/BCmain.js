import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import scrollToComponent from 'react-scroll-to-component';
import "../App.css";
import {
  InputGroup,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
import pict300x300 from '../assets/img/300x300.png';
// import pictarmyali from '../assets/img/armyali-white.png';
// import pictbg from '../assets/img/bg.jpg';
// import Jumbotron from "./jumbotron";
// import Skills from "./skill";
// import Experience from "./experience";
// import Portofolio from "./portofolio";
// import Services from "./services";
// import Clients from "./clients";
// import Testimonial from "./testimonial";
// import Contact from "./contact";
import queryString from 'query-string';


class mainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navCollapse:false,
      navState:"",
      theposition:"",
      listItem:["Item pertama","Item kedua","Item ketiga","Item keempat","Item kelima","Item keenam","Item ketujuh","Item kedelapan","Item kesembilan","Item kesepuluh","Item kesebelas","Item keduabelas"]
    };
  }
  navToggle = () =>  {
    this.setState({
      ...this.state,
      navCollapse: !this.state.navCollapse
    });
  }
  render() {
    let url = this.props.location.search;
    let params = queryString.parse(url);
    // console.log(params.id);
    return (
      <div style={{backgroundColor:"#F5F5F5"}}>
        <Container fluid={true} style={{backgroundColor:"#F5F5F5",position:"-webkit-sticky",position:"sticky",top:0,zIndex:998,padding:10}}>
          <div className="card">
            <div className="card-body" style={{padding:10}}>
              <Row>
                <Col xs="12" sm="12" md="12" style={{color:"#000000"}}>
                  <span className="myFont-title myFontbold myColor">NAHMTHAISUKI & BBQ</span><br />
                  <span className="myFont-subtitle myColor">JL K.H WAHID HASYIM No 79-81 Gondangdia, Menteng, Jakarta pusat</span>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
        <Container fluid={true} style={{backgroundColor:"#F5F5F5",padding:10}}>
          <div className="card">
            <div className="card-header">
              <Row>
                <Col xs="10" sm="10" md="10" style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                  <span style={{fontWeight:"bold"}}>Header menu</span>
                </Col>
                <Col xs="2" sm="2" md="2" style={{display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
                  <button className="myBtn"><i className="fa fa-plus-square fa-2x" aria-hidden="true"></i></button>
                </Col>
              </Row>
            </div>
            <div className="card-body" style={{padding:10}}>
              <Row>
                <Col xs="12" sm="12" md="12" style={{color:"#000000"}}>
                  <span className="myFont-title myFontbold myColor">NAHMTHAISUKI & BBQ</span><br />
                  <span className="myFont-subtitle myColor">JL K.H WAHID HASYIM No 79-81 Gondangdia, Menteng, Jakarta pusat</span>
                </Col>
              </Row>
            </div>
          </div>
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