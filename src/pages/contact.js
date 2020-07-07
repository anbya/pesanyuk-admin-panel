import React, { Component } from 'react';
import axios from "axios";
import {
    Form,
    Row,
    Col,
    Button,
    FormGroup,
    Label,
    Input
} from "reactstrap";
import SweetAlert from 'react-bootstrap-sweetalert';
import { EditorState,  convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class contact extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          value: 'true',
          alert: null,
          senderName:'',
          senderEmail:'',
          senderMessage:'',
          editorState: EditorState.createEmpty(),
          testdataeditor: ''
        };
    } 
    
    deleteThisGoal = () =>  {
        const sendid = {
          key: this.props.userinfo.id_user
        };
        axios.post(`https://api.transdeal.co.id/content/gettransbyuserid`, sendid, {
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then(res => {
          this.props.dispatch({ type: "BOOKED_DATA", payload: res.data });
          this.setState({
            placeholder: "none"
          })
        })
        .catch(error => {
          console.log(error);
        });  
    }
    
    hideAlert = () =>  {
        this.setState({
            ...this.state,
            value: 'true',
            senderName:'',
            senderEmail:'',
            senderMessage:'',
            alert: null
        });
    }
    
    onEditorStateChange = (editorState) =>  {
        this.setState({
            ...this.state,
            editorState: editorState
        });
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            ...this.state,
            value: '',
        });
        const dataTosend = {
            sender_name: this.state.senderName,
            sender_email: this.state.senderEmail,
            sender_message: this.state.senderMessage
        };
        axios.post(`https://api.jaygeegroupapp.com/messages`, dataTosend, {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
        })
        .then(result => {
            this.setState({
                ...this.state,
                alert:<SweetAlert success title = "succeed"
                onConfirm = {
                    () => this.hideAlert()
                } >
                We successfully sent your message
                </SweetAlert>
            });
        })
        .catch(error => {
        console.log(error);
        console.log(this.props);
        });
    };
    handleChange = event =>  {
        this.setState({
        ...this.state,
        [event.target.name]: event.target.value
        });
    }
    converEditor = () =>  {
        let convertedData = convertToRaw(this.state.editorState.getCurrentContent())
        console.log(convertedData);
    }
    render() {
        return (
            <div>
                {this.state.alert}
                <Row>
                    <Col className="text-center">
                        <div className="section-title mb-30">
                            <h4>Contact</h4>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginBottom:"30px"}}>
                    <Col className="text-center">
                        <div className="title">
                            <h4 style={{fontStyle:"italic"}}>I'd love to hear from you.</h4>
                        </div>
                    </Col>
                </Row>
                <Form onSubmit={this.handleSubmit}>
                  <fieldset disabled={!this.state.value}>
                    <Row style={{display:"flex",justifyContent:"center"}}>
                        <Col xs="8" sm="4" md="4">
                                <FormGroup>
                                    <Label for="senderName">Name</Label>
                                    <Input
                                        type="text"
                                        name="senderName"
                                        id="senderName"
                                        placeholder="Name"
                                        required
                                        value={this.state.senderName}
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="senderEmail">Email</Label>
                                    <Input
                                        type="email"
                                        name="senderEmail"
                                        id="senderEmail"
                                        placeholder="Email"
                                        required
                                        value={this.state.senderEmail}
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                        </Col>
                        <Col xs="8" sm="4" md="4">
                                <FormGroup>
                                    <Label for="senderMessage">Message</Label>
                                    <Input
                                        type="textarea"
                                        name="senderMessage"
                                        id="senderMessage"
                                        rows={5}
                                        placeholder="Your message"
                                        required
                                        value={this.state.senderMessage}
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                        </Col>
                    </Row>
                    <Row style={{display:"flex",justifyContent:"center"}}>
                        <Col xs="8" sm="8" md="8">
                            <Editor
                                editorState={this.state.editorState}
                                wrapperClassName="demo-wrapper"
                                editorClassName="demo-editor"
                                onEditorStateChange={this.onEditorStateChange}
                            />
                        </Col>
                    </Row>
                    <Row style={{display:"flex",justifyContent:"center"}}>
                        <Col xs="8" sm="8" md="8">
                            <Button style={{backgroundColor:'#d92027'}} block onClick={() => this.converEditor()}>
                                convert
                            </Button>
                        </Col>
                    </Row>
                    <Row style={{display:"flex",justifyContent:"center"}}>
                        <Col xs="8" sm="8" md="8">
                            {this.state.testdataeditor}
                        </Col>
                    </Row>
                    <Row style={{display:"flex",justifyContent:"center"}}>
                        <Col xs="8" sm="8" md="8">
                            <Button style={{backgroundColor:'#d92027'}} block type="submit" >
                                Send message
                            </Button>
                        </Col>
                    </Row>
                  </fieldset>
                </Form>
            </div>
        );
    }
}

export default contact;