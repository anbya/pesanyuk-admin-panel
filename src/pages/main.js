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
          <div className="card">
            <div className="card-body" style={{padding:5}}>
              <Row style={{fontWeight:"bold"}}>
                <Col xs="6" sm="6" md="6" className="text-left">
                  <span>NOMOR MEJA</span>
                </Col>
                <Col xs="6" sm="6" md="6" className="text-right">
                  <span>00123</span>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
        <Container fluid={true} style={{backgroundColor:"#F5F5F5",paddingTop:0,paddingLeft:10,paddingRight:10,paddingBottom:"25vh",minHeight:"80vh"}}>
          {this.state.listItem.length > 0 && this.state.listItem.map((listItem,index) =>
            <div className="card" key={index}>
              <div className="card-body" style={{paddingTop:5,paddingBottom:5}}>
                <Row>
                  <Col xs="2" sm="2" md="2" style={{padding:2}}>
                    <img className="portoimage" width="100%" src={pict300x300} alt="pict300x300" />
                  </Col>
                  <Col xs="10" sm="10" md="10" style={{padding:2}}>
                    <Row>
                      <Col>
                        <span style={{fontWeight:"bold"}}>{listItem}</span>
                      </Col>
                    </Row>
                    <Row >
                      <Col>
                        <div>
                          <span>xxx.xxx.xxx</span><span> x </span><span>xxx</span><span> = </span><span style={{fontWeight:"bold"}}>xxx.xxx.xxx</span>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </div>
          )}
        </Container>
        <Container fluid={true} style={{height:"25vh",backgroundColor:"#F5F5F5",position:"fixed",bottom:0,padding:10}}>
          <div className="card">
            <div className="card-body" style={{padding:10}}>
              <Row>
                <Col xs="6" sm="6" md="6" style={{display:"flex",alignItems:"center"}}>
                  <div style={{textAlign:"left",width:"100%"}}>
                    <span>Subtotal</span>
                  </div>
                </Col>
                <Col xs="6" sm="6" md="6" style={{display:"flex",alignItems:"center"}}>
                  <div style={{textAlign:"right",width:"100%"}}>
                    <span>xxx.xxx.xxx</span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs="6" sm="6" md="6" style={{display:"flex",alignItems:"center"}}>
                  <div style={{textAlign:"left",width:"100%"}}>
                    <span>Tax</span>
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
                    <span>TOTAL</span>
                  </div>
                </Col>
                <Col xs="6" sm="6" md="6" style={{display:"flex",alignItems:"center"}}>
                  <div style={{textAlign:"right",width:"100%"}}>
                    <span>xxx.xxx.xxx</span>
                  </div>
                </Col>
              </Row>
              <Row style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Col xs="12" sm="12" md="12">
                  <button className="my-btn full-widht" onClick={() => this.props.history.push({ pathname: "/order_page" })}>Tambah order</button>
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