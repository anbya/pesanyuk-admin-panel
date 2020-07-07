import React, { Component } from 'react';
import {
    Row,
    Col
} from "reactstrap";
// import pict300x300 from '../assets/img/300x300.png';
import picthris from '../assets/img/PROJECTS/hris.jpg';
import pictjaygeegroup from '../assets/img/PROJECTS/jaygeegroup.jpg';
import pictnahmmember from '../assets/img/PROJECTS/nahmmember.jpg';
import pictpos from '../assets/img/PROJECTS/pos.jpg';
import picttransdeal from '../assets/img/PROJECTS/transdeal.jpg';
import picttranspayment from '../assets/img/PROJECTS/transpayment.jpg';

class portofolio extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col className="text-center">
                        <div className="section-title mb-30">
                            <h4>Projects</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="12" md="6" style={{padding:"30px"}}>
                        <div className="portocard" style={{backgroundColor:"#FFFFFF"}}>
                            <Row style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <Col size="6">
                                    <img className="portoimage" width="100%" src={picthris} alt="picthris" />
                                </Col>
                                <Col size="6" style={{padding:"50px"}}>
                                <h4>Web based HRIS</h4>
                                <p>Web based HRIS ( Human resources information system ) at JAYGEEGROUP</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs="12" sm="12" md="6" style={{padding:"30px"}}>
                        <div className="portocard" style={{backgroundColor:"#FFFFFF"}}>
                            <Row style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <Col size="6">
                                    <img className="portoimage" width="100%" src={pictjaygeegroup} alt="pictjaygeegroup" />
                                </Col>
                                <Col size="6" style={{padding:"50px"}}>
                                <h4>Jaygeegroup website</h4>
                                <p>business corporate website at JAYGEEGROUP</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs="12" sm="12" md="6" style={{padding:"30px"}}>
                        <div className="portocard" style={{backgroundColor:"#FFFFFF"}}>
                            <Row style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <Col size="6">
                                    <img className="portoimage" width="100%" src={pictnahmmember} alt="pictnahmmember" />
                                </Col>
                                <Col size="6" style={{padding:"50px"}}>
                                <h4>Jaygeegroup CRM</h4>
                                <p>Web based Jaygeegroup CRM ( Customer relationship management )</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs="12" sm="12" md="6" style={{padding:"30px"}}>
                        <div className="portocard" style={{backgroundColor:"#FFFFFF"}}>
                            <Row style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <Col size="6">
                                    <img className="portoimage" width="100%" src={pictpos} alt="pictpos" />
                                </Col>
                                <Col size="6" style={{padding:"50px"}}>
                                <h4>Web based P.O.S</h4>
                                <p>Web based P.O.S ( Point of sales) at JAYGEEGROUP</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs="12" sm="12" md="6" style={{padding:"30px"}}>
                        <div className="portocard" style={{backgroundColor:"#FFFFFF"}}>
                            <Row style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <Col size={6}>
                                    <img className="portoimage" width="100%" src={picttransdeal} alt="picttransdeal" />
                                </Col>
                                <Col size={6} style={{padding:"50px"}}>
                                <h4>Transdeal</h4>
                                <p>E-voucher marketplace mobile apps</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs="12" sm="12" md="6" style={{padding:"30px"}}>
                        <div className="portocard" style={{backgroundColor:"#FFFFFF"}}>
                            <Row style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <Col size="6">
                                    <img className="portoimage" width="100%" src={picttranspayment} alt="picttranspayment" />
                                </Col>
                                <Col size="6" style={{padding:"50px"}}>
                                <h4>Transpayment</h4>
                                <p>E-wallet mobile apps</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default portofolio;