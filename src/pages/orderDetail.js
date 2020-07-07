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
import Test from "./BCmain";
import queryString from 'query-string';


class Orderdetailpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navCollapse:false,
      navState:"",
      theposition:"",
      testKategory:["Kategory pertama","kategory kedua","kategory ketiga","kategory keempat","kategory kelima","kategory keenam","kategory ketujuh","kategory kedelapan","kategory kesembilan"]
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
    return (
        <div>
            <Container fluid={true} style={{backgroundColor:"#003060",position:"-webkit-sticky",position:"sticky",top:0,zIndex:998,paddingTop:10,paddingBottom:10}}>
              <Row>
                <Col xs="2" sm="2" md="2" style={{display:"flex",justifyContent:"center",alignItems:"center",color:"#FFFFFF",paddingTop:10,paddingBottom:10}} onClick={() => this.props.history.push({ pathname: "/order_page" })}>
                  <i className="fa fa-arrow-left" aria-hidden="true"></i>
                </Col>
                <Col xs="10" sm="10" md="10" style={{display:"flex",justifyContent:"flex-start",alignItems:"center",color:"#FFFFFF",paddingTop:10,paddingBottom:10}}>
                  <span style={{fontWeight:"bold"}}>Tambah order</span>
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="12" md="12" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <InputGroup>
                    <Input placeholder="Search" />
                  </InputGroup>
                </Col>
              </Row>
            </Container>
            <Container fluid={true} style={{backgroundColor:"#FCFFFD",paddingBottom:"10vh",paddingTop:"2vh"}}>
                {this.state.testKategory.length > 0 && this.state.testKategory.map((testKategory,index) =>
                    <div className="card" key={index}>
                        <div className="card-body" style={{paddingTop:5,paddingBottom:5}}>
                            <Row >
                                <Col xs="4" sm="4" md="4" style={{padding:2}}>
                                    <img className="portoimage" width="100%" src={pict300x300} alt="pict300x300" />
                                </Col>
                                <Col xs="8" sm="8" md="8" style={{padding:2,display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                                  <div>
                                    <span style={{fontWeight:"bold"}}>{testKategory}</span><br />
                                    <span>Rp xxx.xxx.xxx</span>
                                  </div>
                                </Col>
                            </Row>
                            <Row>
                              <Col style={{padding:0}}>
                                <button className="my-btn full-widht" onClick={() => this.props.history.push({ pathname: "/list_order"})}>Tambah</button>
                              </Col>
                            </Row>
                        </div>
                    </div>
                )}
            </Container>
            {/* <Container fluid={true} style={{backgroundColor:"#003060",position:"-webkit-sticky",position:"sticky",bottom:0,zIndex:998,paddingTop:10,paddingBottom:10}}> */}
            <Container fluid={true} style={{height:"8vh",backgroundColor:"#003060",position:"fixed",bottom:0}}>
                <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <button className="my-btn full-widht" onClick={() => this.props.history.push({ pathname: "/list_order" })}><i className="fa fa-shopping-cart" aria-hidden="true"></i> Pesanan saya</button>
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

export default withRouter(connect(mapStateToProps)(Orderdetailpage));