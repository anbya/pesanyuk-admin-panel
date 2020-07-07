import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import {
  Row,
  Col,
} from "reactstrap";
// import pict300x300 from '../assets/img/300x300.png';
import pdf from '../assets/pdf/anbyaarmyali.pdf'

class jumbotron extends Component {
    constructor(props) {
      super(props);
      this.state = {
        typeText:["A full stack developer", "having 5+ years of experience."]
      };
    }
    render() {
        return (
            <div style={{position:"relative"}}>
            <Row>
                <Col xs="12" sm="12" md="12" style={{padding:"30px",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                    <div style={{minHeight:"75vh",paddingTop:"30px"}}>
                        <h1 className="display-3" style={{color:"#FFFFFF"}}>Hello I am</h1>
                        <h1 className="display-5" style={{color:"#FFFFFF"}}>ANBYA ARMY ALI</h1>
                        <hr className="my-2" style={{color:"#FFFFFF"}} />
                        <p style={{color:"#FFFFFF"}}>
                        <ReactTypingEffect
                            speed={50}
                            eraseDelay={2500}
                            typingDelay={100}
                            text={this.state.typeText}
                        />
                        </p>
                        <p className="lead">
                        <a class="btn btn-danger" href={pdf} role="button" target="_blank" rel="noopener noreferrer" >
                            <i
                                className="fa fa-download"
                                aria-hidden="true"
                                style={{ textTransform: "capitalize" }}
                            >
                            </i> Download my CV
                        </a>
                        </p>
                    </div>
                </Col>
            </Row>
            </div>
        );
    }
}

export default jumbotron;