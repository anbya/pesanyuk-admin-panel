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
import { FaStoreAlt , FaEdit } from "react-icons/fa";

class outletPage extends Component {
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
      <div>
        <Container fluid={true}>
          <Row>
            <Col>
              <div className="card" style={{marginTop:15}}>
                <div className="card-header">
                  <Row>
                    <Col xs="10" sm="10" md="10" style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                      <span style={{fontWeight:"bold"}}>Outlet list</span>
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
                                <Col xs="2" sm="2" md="2" style={{color:"#003060",display:"flex",justifyContent:"center",alignItems:"center",borderRight:"#003060 3px solid"}}>
                                  <FaStoreAlt size="5vh" />
                                </Col>
                                <Col xs="10" sm="10" md="10" style={{color:"#000000",display:"flex",flexDirection:"column"}}>
                                    <span className="myFont-title myFontbold myColor">NAHMTHAISUKI & BBQ</span>
                                    <span className="myFont-subtitle myColor">JL K.H WAHID HASYIM No 79-81 Gondangdia, Menteng, Jakarta pusat</span>
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

export default withRouter(connect(mapStateToProps)(outletPage));