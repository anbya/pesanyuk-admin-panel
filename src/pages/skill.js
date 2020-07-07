import React, { Component } from 'react';
import {
    Row,
    Col
} from "reactstrap";
import pictbootstrap from '../assets/img/FRONT-END/bootstrap.png';
import pictcss from '../assets/img/FRONT-END/css.png';
import picthtml from '../assets/img/FRONT-END/html.png';
import pictjavascript from '../assets/img/FRONT-END/javascript.png';
import pictreact from '../assets/img/FRONT-END/react.png';
import pictreactnative from '../assets/img/FRONT-END/reactnative.png';
import pictredux from '../assets/img/FRONT-END/redux.png';
import pictnode from '../assets/img/BACK-END/node.png';
import pictexpress from '../assets/img/BACK-END/express.png';
import pictsequelize from '../assets/img/BACK-END/sequelize.jpg';
import pictmysql from '../assets/img/DATABASES/mysql.jpg';
import pictmongo from '../assets/img/DATABASES/mongo.jpg';
import pictheroku from '../assets/img/CLOUD/heroku.png';
import pictaws from '../assets/img/CLOUD/aws.png';
import pictgooglecloud from '../assets/img/CLOUD/googlecloud.jpg';

class skill extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col className="text-center">
                        <div className="section-title mb-30">
                            <h4>Skills</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="12" md="12" style={{padding:"30px"}}>
                        <div>
                            <Row style={{marginBottom:"30px"}}>
                                <Col xs="12" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <div className="title">
                                        <h4>FRONT-END</h4>
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <Col xs="3" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <img width="50%" src={picthtml} alt="picthtml" />
                                </Col>
                                <Col xs="3" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <img width="50%" src={pictcss} alt="pictcss" />
                                </Col>
                                <Col xs="3" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <img width="50%" src={pictbootstrap} alt="pictbootstrap" />
                                </Col>
                                <Col xs="3" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <img width="50%" src={pictjavascript} alt="pictjavascript" />
                                </Col>
                                <Col xs="3" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <img width="50%" src={pictreact} alt="pictreact" />
                                </Col>
                                <Col xs="3" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <img width="50%" src={pictreactnative} alt="pictreactnative" />
                                </Col>
                                <Col xs="3" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <img width="50%" src={pictredux} alt="pictredux" />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs="12" sm="12" md="12" style={{padding:"30px"}}>
                        <div>
                            <Row style={{marginBottom:"30px"}}>
                                <Col xs="12" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <div className="title">
                                        <h4>BACK-END</h4>
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <Col xs="3" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <img width="50%" src={pictnode} alt="pictnode" />
                                </Col>
                                <Col xs="3" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <img width="50%" src={pictexpress} alt="pictexpress" />
                                </Col>
                                <Col xs="3" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <img width="50%" src={pictsequelize} alt="pictsequelize" />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs="12" sm="12" md="12" style={{padding:"30px"}}>
                        <div>
                            <Row style={{marginBottom:"30px"}}>
                                <Col xs="12" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <div className="title">
                                        <h4>DATABASES</h4>
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <Col xs="3" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <img width="50%" src={pictmysql} alt="pictmysql" />
                                </Col>
                                <Col xs="3" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <img width="50%" src={pictmongo} alt="pictmongo" />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs="12" sm="12" md="12" style={{padding:"30px"}}>
                        <div>
                            <Row style={{marginBottom:"30px"}}>
                                <Col xs="12" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <div className="title">
                                        <h4>CLOUD</h4>
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <Col xs="3" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <img width="50%" src={pictheroku} alt="pictheroku" />
                                </Col>
                                <Col xs="3" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <img width="50%" src={pictaws} alt="pictaws" />
                                </Col>
                                <Col xs="3" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <img width="50%" src={pictgooglecloud} alt="pictgooglecloud" />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default skill;