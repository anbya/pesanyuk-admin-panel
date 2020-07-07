import React, { Component } from 'react';
import {
    Row,
    Col
} from "reactstrap";

class services extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col className="text-center">
                        <div className="section-title mb-30">
                            <h4>What i do</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="12" md="4" style={{padding:"30px",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                        <div className="single-service" style={{width:"100%",minHeight:"48vh"}}>
                            <i className="fa fa-laptop"></i>
                            <h4>Web Application Development</h4>
                            <p>Fast, responsive and engaging apps that bring your ideas to life.</p>
                        </div>
                    </Col>
                    <Col xs="12" sm="12" md="4" style={{padding:"30px",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                        <div className="single-service" style={{width:"100%",minHeight:"48vh"}}>
                            <i className="fa fa-laptop"></i>
                            <h4>Mobile Application Development</h4>
                            <p>Cross-platform apps built with efficiency and speed for Android and iOS at once.</p>
                        </div>
                    </Col>
                    <Col xs="12" sm="12" md="4" style={{padding:"30px",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                        <div className="single-service" style={{width:"100%",minHeight:"48vh"}}>
                            <i className="fa fa-laptop"></i>
                            <h4>API Integration & Development</h4>
                            <p>REST API development with Node.js.</p>
                        </div>
                    </Col>
                    <Col xs="12" sm="12" md="4" style={{padding:"30px",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                        <div className="single-service" style={{width:"100%",minHeight:"48vh"}}>
                            <i className="fa fa-laptop"></i>
                            <h4>Database Design</h4>
                            <p>Database architectures in MongoDB or MySQL Server, always aiming for performance, scale and stability.</p>
                        </div>
                    </Col>
                    <Col xs="12" sm="12" md="4" style={{padding:"30px",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                        <div className="single-service" style={{width:"100%",minHeight:"48vh"}}>
                            <i className="fa fa-laptop"></i>
                            <h4>Cloud Integration</h4>
                            <p>Deployment of NodeJS apps, ReactJS apps and databases to leading cloud platforms such as Heroku and Amazon AWS.</p>
                        </div>
                    </Col>
                    <Col xs="12" sm="12" md="4" style={{padding:"30px",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                        <div className="single-service" style={{width:"100%",minHeight:"48vh"}}>
                            <i className="fa fa-laptop"></i>
                            <h4>Payment Gateway Integration</h4>
                            <p>Integration with the most popular Payment Gateways such as Doku, Midtrans and Paypal.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default services;