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
    console.log(params.id);
    if(params.id === undefined || params.id === null){
      return (
        <Test />
      );
    } else {
      return (
        <div>
          <Container fluid={true}>
            <Row style={{height:"10vh",backgroundColor:"#003060",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <Col>
                <Row style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <Col xs="12" sm="12" md="12">
                    <InputGroup>
                      <Input placeholder="Search" />
                    </InputGroup>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row style={{height:"80vh",backgroundColor:"#FCFFFD",overflowY:"scroll",overflowX:"hidden"}}>
              <Col>
                <Row>
                  {this.state.testKategory.length > 0 && this.state.testKategory.map((testKategory,index) =>
                    <Col xs="4" sm="4" md="4" className="p-2" key={index}>
                      <div className="kategoryColumn myFont">
                        {testKategory}
                      </div>
                    </Col>
                  )}
                </Row>
              </Col>
            </Row>
            <Row style={{height:"10vh",backgroundColor:"#003060",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <Col>
                <Row style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <Col xs="12" sm="12" md="12">
                    <button className="my-btn full-widht" onClick={() => this.props.history.push({ pathname: "/list_order",search: '?id=3030' })}><i className="fa fa-shopping-cart" aria-hidden="true"></i> Pesanan saya</button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    anbyaBoilerplate: state.reducer.anbyaBoilerplate
  };
};

export default withRouter(connect(mapStateToProps)(Orderpage));