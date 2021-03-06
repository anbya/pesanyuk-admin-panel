import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
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
import pictpesanyuk from '../assets/img/pesanyuk.png';


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
    return (
      <Container fluid={true} style={{backgroundColor:"#003060",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div className="card" style={{backgroundColor:"rgba(255, 255, 255, 0)"}}>
          <div className="card-body" style={{backgroundColor:"rgba(255, 255, 255, 0.6)",borderRadius:10}}>
            <Row style={{paddingTop:30,paddingBottom:30}}>
              <Col style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                {/* <img className="portoimage" width="75%" src={pictpesanyuk} alt="pictpesanyuk" /> */}
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="email" placeholder="Enter email" />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input type="password" name="password" id="password" placeholder="password placeholder" />
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