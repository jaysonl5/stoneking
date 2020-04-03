import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


class ContactForm extends Component{

    constructor(props) {
        super(props);

        //contact
        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);

        //property settings
        this.onChangePropertyType = this.onChangePropertyType.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeZip = this.onChangeZip.bind(this);


        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            propertType: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            contacts: []
        }
    }

    onChangeFirstname(e) {
        this.setState({
            firstName: e.target.value
        });
    }

    onChangeLastname(e){
        this.setState({
            lastName: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePropertyType(e) {
        this.setState({
            propertType: e.target.value
        });
    }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }

    onChangeCity(e) {
        this.setState({
            city: e.target.value
        });
    }

    onChangeState(e) {
        this.setState({
            state: e.target.value
        });
    }

    onChangeZip(e) {
        this.setState({
            zip: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const contact = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email
        }

        const property = {
            email: this.state.email,
            propertType: this.state.propertType,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        }

        console.log(contact);


        axios.all([
            axios.post('http://localhost:5000/contacts/add', contact),
            axios.post('http://localhost:5000/properties/add', property)
          ])
          .then(axios.spread((contactRes, propertyRes) => {
              console.log(contactRes.data + propertyRes.data);
            }));

        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            propertType: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        })

    }

    render(){
        return(
            <div className="row">
                <div className="col-md-3">
                    <div>
                        <Form className="contactForm" onSubmit={this.onSubmit}> 
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.onChangeEmail} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridFirst">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter first name" value={this.state.firstName} onChange={this.onChangeFirstname} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridLast">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter last name" value={this.state.lastName} onChange={this.onChangeLastname} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group controlId="formGridPropertyType">
                                    <Form.Label>Property Type</Form.Label>
                                    <Form.Control placeholder="Enter property type" value={this.state.propertyType} onChange={this.onChangePropertyType} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" value={this.state.address} onChange={this.onChangeAddress}  />
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control  value={this.state.city} onChange={this.onChangeCity} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" value={this.state.state} onChange={this.onChangeState} >
                                    
                                </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control type="number" value={this.state.zip} onChange={this.onChangeZip} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="dark" type="submit">
                                Submit
                            </Button>
                            </Form>
                    </div>
                </div>
            </div>
        );
    }
}
export default ContactForm;