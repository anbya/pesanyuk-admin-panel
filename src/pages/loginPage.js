import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import scrollToComponent from 'react-scroll-to-component';
import "../App.css";
import {
  // InputGroup,
  Input,
  Container,
  Row,
  Col,
  FormGroup,
  Label
} from "reactstrap";
// import pict300x300 from '../assets/img/300x300.png';
import pictpesanyuk from '../assets/img/pesanyuk.png';
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
// import queryString from 'query-string';


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
    // let url = this.props.location.search;
    // let params = queryString.parse(url);
    // console.log(params.id);
    return (
      <Container fluid={true} style={{backgroundColor:"#003060",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div className="card" style={{backgroundColor:"rgba(255, 255, 255, 0)"}}>
          <div className="card-body" style={{backgroundColor:"rgba(255, 255, 255, 0.6)",borderRadius:10}}>
            <Row style={{paddingTop:30,paddingBottom:30}}>
              <Col style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <img className="portoimage" width="75%" src={pictpesanyuk} alt="pictpesanyuk" />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="Enter email" />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </FormGroup>
              </Col>
            </Row>
            <Row style={{paddingBottom:30}}>
              <Col>
                <button className="my-btn full-widht" onClick={() => this.props.history.push({ pathname: "/home" })}>Login</button>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    anbyaBoilerplate: state.reducer.anbyaBoilerplate
  };
};

export default withRouter(connect(mapStateToProps)(mainPage));