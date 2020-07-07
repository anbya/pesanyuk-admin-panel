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
      testKategory:["Item pertama","Item kedua","Item ketiga","Item keempat","Item kelima","Item keenam","Item ketujuh","Item kedelapan","Item kesembilan","Item kesepuluh","Item kesebelas","Item keduabelas"]
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
        <Container fluid={true} style={{backgroundColor:"#FCFFFD",paddingBottom:"29vh",paddingTop:10,paddingLeft:10,paddingRight:10}}>
          {this.state.testKategory.length > 0 && this.state.testKategory.map((testKategory,index) =>
            <div className="card" key={index}>
              <div className="card-body">
                <Row>
                  <Col xs="10" sm="10" md="10">
                    <span style={{fontWeight:"bold"}}>{testKategory}</span>
                  </Col>
                  <Col xs="2" sm="2" md="2">
                      <button className="my-btn-sm"><i className="fa fa-trash" aria-hidden="true"></i></button>
                  </Col>
                </Row>
                <Row >
                  <Col xs="4" sm="4" md="4">
                    <div>
                      <button className="my-btn-sm"><i className="fa fa-minus-square" aria-hidden="true"></i></button>
                      999
                      <button className="my-btn-sm"><i className="fa fa-plus-square" aria-hidden="true"></i></button>
                      {/* <span> x </span><span>xxx.xxx.xxx</span><span> = </span><span style={{fontWeight:"bold"}}>xxx.xxx.xxx</span> */}
                    </div>
                  </Col>
                  <Col xs="8" sm="8" md="8" style={{textAlign:"right"}}>
                    <div>
                      <span style={{fontWeight:"bold"}}>xxx.xxx.xxx</span>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          )}
        </Container>
        {/* <Container style={{backgroundColor:"#F5F5F5",position:"-webkit-sticky",position:"sticky",bottom:0,zIndex:999,padding:10}}> */}
        <Container fluid={true} style={{height:"28vh",backgroundColor:"#F5F5F5",position:"fixed",bottom:0,padding:10}}>
          <div className="card">
            <div className="card-body" style={{padding:10}}>
              <Row style={{paddingTop:10}}>
                <Col xs="6" sm="6" md="6" style={{display:"flex",alignItems:"center"}}>
                  <div style={{textAlign:"left",width:"100%"}}>
                    <span>Total order</span>
                  </div>
                </Col>
                <Col xs="6" sm="6" md="6" style={{display:"flex",alignItems:"center"}}>
                  <div style={{textAlign:"right",width:"100%"}}>
                    <span>xxx.xxx.xxx</span>
                  </div>
                </Col>
              </Row>
              <Row style={{fontWeight:"bold"}}>
                <Col xs="6" sm="6" md="6" style={{display:"flex",alignItems:"center"}}>
                  <div style={{textAlign:"left",width:"100%"}}>
                    <span>Total belanja</span>
                  </div>
                </Col>
                <Col xs="6" sm="6" md="6" style={{display:"flex",alignItems:"center"}}>
                  <div style={{textAlign:"right",width:"100%"}}>
                    <span>xxx.xxx.xxx</span>
                  </div>
                </Col>
              </Row>
              <Row style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Col xs="12" sm="12" md="12" className="p-2">
                <button className="my-btn full-widht" onClick={() => this.props.history.push({ pathname: "/order_page"})}>Tambah item</button>
                </Col>
              </Row>
              <Row style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Col xs="6" sm="6" md="6" className="p-2">
                <button className="my-btn-danger full-widht" onClick={() => this.props.history.push({ pathname: "/"})}>Batalkan</button>
                </Col>
                <Col xs="6" sm="6" md="6" className="p-2">
                  <button className="my-btn-success full-widht" onClick={() => this.props.history.push({ pathname: "/"})}>Proses</button>
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