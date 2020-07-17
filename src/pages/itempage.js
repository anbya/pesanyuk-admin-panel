import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import scrollToComponent from 'react-scroll-to-component';
import "../App.css";
import {
  Container,
  Row,
  Col
} from "reactstrap";
// import pict300x300 from '../assets/img/300x300.png';
// import pictpesanyuk from '../assets/img/pesanyuk.png';
// import pictarmyali from '../assets/img/armyali-white.png';
// import pictbg from '../assets/img/bg.jpg';
// import Jumbotron from "./jumbotron";
// import Skills from "./skill";
// import Experience from "./experience";
// import Portofolio from "./portofolio";
// import Services from "./services";
// import Clients from "./clients";
// import Testimonial from "./testimonial";
// import queryString from 'query-string';


class itemPage extends Component {
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
    return (
      <div>
        <Container fluid={true}>
          <Row>
            <Col>
              <div className="card" style={{marginTop:15}}>
                <div className="card-header">
                  <Row>
                    <Col xs="10" sm="10" md="10" style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                      <span style={{fontWeight:"bold"}}>Item list</span>
                    </Col>
                    <Col xs="2" sm="2" md="2" style={{display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
                      <button className="myBtn"><i className="fa fa-plus-square fa-2x" aria-hidden="true"></i></button>
                    </Col>
                  </Row>
                </div>
                <div className="card-body" style={{padding:0}}>
                    <Container fluid={true}>
                        <Row>
                        <Col xs="12" sm="12" md="4" style={{padding:5}}>
                            <div className="card">
                            <div className="card-body">
                                <Row>
                                <Col xs="2" sm="2" md="2" style={{color:"#003060",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                  <i className="fa fa-square fa-2x" aria-hidden="true"></i>
                                </Col>
                                <Col xs="10" sm="10" md="10" style={{color:"#000000",display:"flex",flexDirection:"column"}}>
                                    <span className="myFont-title myFontbold myColor">NAHMTHAISUKI & BBQ</span>
                                    <span className="myFont-subtitle myColor">Rp xxx.xxx.xxx</span>
                                </Col>
                                </Row>
                            </div>
                            <div className="card-footer" style={{padding:0}}>
                                <Row>
                                <Col xs="6" sm="6" md="6" style={{color:"#003060",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                  <button className="myBtn"><i className="fa fa-pencil-square fa-2x" aria-hidden="true"></i></button>
                                </Col>
                                <Col xs="6" sm="6" md="6" style={{color:"#003060",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                  <button className="myBtn-danger"><i className="fa fa-ban fa-2x" aria-hidden="true"></i></button>
                                </Col>
                                </Row>
                            </div>
                            </div>
                        </Col>
                        </Row>
                    </Container>
                </div>
              </div>
            </Col>
          </Row>
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

export default withRouter(connect(mapStateToProps)(itemPage));