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


class Orderpage extends Component {
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
    // console.log(params.id);
    return (
        <div>
            <Container fluid={true} style={{backgroundColor:"#003060",position:"-webkit-sticky",position:"sticky",top:0,zIndex:998,paddingTop:10,paddingBottom:10}}>
              <Row>
                <Col xs="2" sm="2" md="2" style={{display:"flex",justifyContent:"center",alignItems:"center",color:"#FFFFFF",paddingTop:10,paddingBottom:10}} onClick={() => this.props.history.push({ pathname: "/" })}>
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
            <Container fluid={true} style={{backgroundColor:"#FFFFFF",paddingBottom:"8vh"}}>
                <Row>
                    {this.state.testKategory.length > 0 && this.state.testKategory.map((testKategory,index) =>
                        <Col xs="6" sm="6" md="6" className="p-2" key={index} onClick={() => this.props.history.push({ pathname: "/order_detail_page" })}>
                            <div className="kategoryColumn myFont">
                                {testKategory}
                            </div>
                        </Col>
                    )}
                </Row>
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

export default withRouter(connect(mapStateToProps)(Orderpage));