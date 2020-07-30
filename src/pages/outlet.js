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
import { FaStoreAlt , FaEdit } from "react-icons/fa";
import Navbarpage from "./navbar";
import { HashLoader , ScaleLoader } from 'react-spinners';

class outletPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingParam:"none",
      navCollapse:false,
      navState:"",
      theposition:"",
      listItem:["Item pertama","Item kedua","Item ketiga","Item keempat","Item kelima","Item keenam","Item ketujuh","Item kedelapan","Item kesembilan","Item kesepuluh","Item kesebelas","Item keduabelas"],
      prmModaladd:false,
      prmModaledit:false,
      outletList:[],
      addOutletName:"",
      addOutletAddress:"",
      editOutletID:"",
      editOutletName:"",
      editOutletAddress:"",
      buttonSavePrm:false,
      buttonSaveText:"Save"
    };
  }
  componentDidMount = () =>  {
    this.setState({
      ...this.state,
      loadingParam: "block"
    });
    axios
      .get(`http://localhost:3009/virtualorder/outletList`)
      .then(result => {
        this.setState({
          ...this.state,
          outletList: result.data.result,
          loadingParam: "none"
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  refreshPageData = () =>  {
    this.setState({
      ...this.state,
      loadingParam: "block"
    });
    axios
      .get(`http://localhost:3009/virtualorder/outletList`)
      .then(result => {
        this.setState({
          ...this.state,
          outletList: result.data.result,
          loadingParam: "none"
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
  modalAddOpen = () =>  {
    this.setState({
      ...this.state,
      prmModaladd: true
    });
  }
  modalAddClose = () =>  {
    this.setState({
      ...this.state,
      prmModaladd: false
    });
  }
  modalEditOpen = (idoutlet,name,company) =>  {
    this.setState({
      ...this.state,
      prmModaledit: true,
      editOutletID: idoutlet,
      editOutletName: name,
      editOutletAddress: company
    });
  }
  modalEditClose = () =>  {
    this.setState({
      ...this.state,
      prmModaledit: false,
      editOutletID: "",
      editOutletName:"",
      editOutletAddress:""
    });
  }
  handleAddChange = event =>  {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }
  handleEditChange = event =>  {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  } 
  updateData = () => {
    this.setState({
      ...this.state,
      buttonSavePrm:true,
      buttonSaveText:""
    });
    const dataToSend = {
      ID: this.state.editOutletID,
      NAME: this.state.editOutletName,
      ADDRESS: this.state.editOutletAddress
    };
    axios
    .post(`http://localhost:3009/virtualorder/editOutletData`, dataToSend, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
    .then(async result => {
      await this.setState({
        ...this.state,
        buttonSavePrm:false,
        buttonSaveText:"Save"
      });
      alert("data berhasil diupdate")
      this.modalEditClose()
    })
    .catch(error => {
      console.log(error);
      console.log(this.props);
    });
  }
  render() {
    return (
      <div>
        <div style={{display:this.state.loadingParam}}>
          <div style={{position:"fixed",width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",zIndex:"999",background:"rgba(0, 0, 0, 0.7)"}}>
            <div>
              <HashLoader
                size={100}
                color={'#FFFFFF'} 
                loading={true} 
              />
            </div>
          </div>
        </div>
        <Navbarpage />
        <Container fluid={true} style={{paddingBottom:30}}>
          <Modal isOpen={this.state.prmModaladd} backdrop={"static"}>
            <ModalHeader toggle={() => this.modalAddClose()}>Add outlet</ModalHeader>
            <ModalBody>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="name">Outlet name</Label>
                    <Input type="text" name="addOutletName" id="addOutletName" value={this.state.addOutletName} onChange={this.handleAddChange} placeholder="Enter outlet name" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="address">Outlet address</Label>
                    <Input type="textarea" name="addOutletAddress" id="addOutletAddress" value={this.state.addOutletAddress} onChange={this.handleAddChange} />
                  </FormGroup>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button color="success">Add</Button>
              <Button color="danger" onClick={() => this.modalAddClose()}>Cancel</Button>
            </ModalFooter>
          </Modal>
          <Modal isOpen={this.state.prmModaledit} backdrop={"static"}>
            <ModalHeader toggle={() => this.modalEditClose()}>Outlet detail</ModalHeader>
            <ModalBody>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="name">Outlet name</Label>
                    <Input type="text" name="editOutletName" id="editOutletName" value={this.state.editOutletName} onChange={this.handleEditChange} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="address">Outlet address</Label>
                    <Input type="textarea" name="editOutletAddress" id="editOutletAddress" value={this.state.editOutletAddress} onChange={this.handleEditChange} />
                  </FormGroup>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button color="success" onClick={() => this.updateData()}>
                <ScaleLoader
                  height={18}
                  width={4}
                  radius={2}
                  margin={2}
                  color={'#FFFFFF'} 
                  loading={this.state.buttonSavePrm} 
                />
                {this.state.buttonSaveText}
              </Button>
              <Button color="danger" onClick={() => this.modalEditClose()}>Cancel</Button>
            </ModalFooter>
          </Modal>
          <Row>
            <Col>
              <div className="card" style={{marginTop:15}}>
                <div className="card-header">
                  <Row>
                    <Col xs="10" sm="10" md="10" style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                      <span style={{fontWeight:"bold"}}>Outlet list</span>
                    </Col>
                    <Col xs="2" sm="2" md="2" style={{display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
                      <button className="myBtn" onClick={() => this.modalAddOpen()}><i className="fa fa-plus-square fa-2x" aria-hidden="true"></i></button>
                    </Col>
                  </Row>
                </div>
                <div className="card-body" style={{padding:0}}>
                    <Container fluid={true}>
                        <Row>
                          {this.state.outletList.length > 0 && this.state.outletList.map((outletList,index) =>
                            <Col xs="12" sm="12" md="4" style={{padding:5}} key={index}>
                                <div className="card">
                                <div className="card-body">
                                    <Row>
                                    <Col xs="2" sm="2" md="2" style={{color:"#003060",display:"flex",justifyContent:"center",alignItems:"center",borderRight:"#003060 3px solid"}}>
                                      <FaStoreAlt size="5vh" />
                                    </Col>
                                    <Col xs="10" sm="10" md="10" style={{color:"#000000",display:"flex",flexDirection:"column"}}>
                                        <span className="myFont-title myFontbold myColor">{outletList.nama_outlet}</span>
                                        <span className="myFont-subtitle myColor">{outletList.alamat_outlet}</span>
                                    </Col>
                                    </Row>
                                </div>
                                <div className="card-footer" style={{padding:0}}>
                                    <Row>
                                    <Col xs="6" sm="6" md="6" style={{color:"#003060",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                      <button className="myBtn" onClick={() => this.modalEditOpen(outletList.id_outlet,outletList.nama_outlet,outletList.alamat_outlet)}><i className="fa fa-pencil-square fa-2x" aria-hidden="true"></i></button>
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

export default withRouter(connect(mapStateToProps)(outletPage));