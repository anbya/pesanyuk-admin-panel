import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import scrollToComponent from 'react-scroll-to-component';
import "../App.css";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  FormGroup,
  Label
} from "reactstrap";


class categoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navCollapse:false,
      navState:"",
      theposition:"",
      listItem:["Item pertama","Item kedua","Item ketiga","Item keempat","Item kelima","Item keenam","Item ketujuh","Item kedelapan","Item kesembilan","Item kesepuluh","Item kesebelas","Item keduabelas"],
      prmModaladd:false,
      prmModaledit:false,
      categoryList:[]
    };
  }
  componentDidMount = () =>  {
    axios
      .get(`http://localhost:3009/virtualorder/categoryList`)
      .then(result => {
        this.setState({
          ...this.state,
          categoryList: result.data.result
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  navToggle = () =>  {
    this.setState({
      ...this.state,
      navCollapse: !this.state.navCollapse
    });
  }
  modalAddToggle = () =>  {
    this.setState({
      ...this.state,
      prmModaladd: !this.state.prmModaladd
    });
  }
  modalEditToggle = () =>  {
    this.setState({
      ...this.state,
      prmModaledit: !this.state.prmModaledit
    });
  }
  render() {
    return (
      <div>
        <Container fluid={true} style={{paddingBottom:30}}>
          <Modal isOpen={this.state.prmModaladd} toggle={() => this.modalAddToggle()} backdrop={"static"}>
            <ModalHeader toggle={() => this.modalAddToggle()}>Add Category</ModalHeader>
            <ModalBody>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="name">Category name</Label>
                    <Input type="text" name="name" id="name" placeholder="Enter Category name" />
                  </FormGroup>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button color="success">Add</Button>
              <Button color="danger" onClick={() => this.modalAddToggle()}>Cancel</Button>
            </ModalFooter>
          </Modal>
          <Modal isOpen={this.state.prmModaledit} toggle={() => this.modalEditToggle()} backdrop={"static"}>
            <ModalHeader toggle={() => this.modalEditToggle()}>Category detail</ModalHeader>
            <ModalBody>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="name">Category name</Label>
                    <Input type="text" name="name" id="name" value="Category name" />
                  </FormGroup>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button color="success">Save</Button>
              <Button color="danger" onClick={() => this.modalEditToggle()}>Cancel</Button>
            </ModalFooter>
          </Modal>
          <Row>
            <Col>
              <div className="card" style={{marginTop:15}}>
                <div className="card-header">
                  <Row>
                    <Col xs="10" sm="10" md="10" style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                      <span style={{fontWeight:"bold"}}>Category item</span>
                    </Col>
                    <Col xs="2" sm="2" md="2" style={{display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
                      <button className="myBtn" onClick={() => this.modalAddToggle()}><i className="fa fa-plus-square fa-2x" aria-hidden="true"></i></button>
                    </Col>
                  </Row>
                </div>
                <div className="card-body" style={{padding:0}}>
                    <Container fluid={true}>
                        <Row>
                          {this.state.categoryList.length > 0 && this.state.categoryList.map((categoryList,index) =>
                            <Col xs="12" sm="12" md="4" style={{padding:5}} key={index}>
                              <div className="card">
                                <div className="card-body">
                                    <Row>
                                    <Col xs="2" sm="2" md="2" style={{color:"#003060",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                      <i className="fa fa-square fa-2x" aria-hidden="true"></i>
                                    </Col>
                                    <Col xs="10" sm="10" md="10" style={{color:"#000000",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                                        <span className="myFont-title myFontbold myColor">{categoryList.nama_category}</span>
                                    </Col>
                                    </Row>
                                </div>
                                <div className="card-footer" style={{padding:0}}>
                                    <Row>
                                    <Col xs="6" sm="6" md="6" style={{color:"#003060",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                      <button className="myBtn" onClick={() => this.modalEditToggle()}><i className="fa fa-pencil-square fa-2x" aria-hidden="true"></i></button>
                                    </Col>
                                    <Col xs="6" sm="6" md="6" style={{color:"#003060",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                      <button className="myBtn-danger"><i className="fa fa-ban fa-2x" aria-hidden="true"></i></button>
                                    </Col>
                                    </Row>
                                </div>
                              </div>
                            </Col>
                          )}
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

export default withRouter(connect(mapStateToProps)(categoryPage));