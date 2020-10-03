import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';


class ContactForm extends Component{

    constructor(props) {
        super(props);

        //contact
        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);

        //property settings
        this.onChangeBuySell = this.onChangeBuySell.bind(this);
        this.onChangePropertyType = this.onChangePropertyType.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeZip = this.onChangeZip.bind(this);
        this.onChangeBuyDescription = this.onChangeBuyDescription.bind(this);


        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            buySell: 'Buy',
            propertyType: 'Residential',
            address: '',
            city: '',
            state: '',
            zip: '',
            buyDescription: '',
            contacts: [],
            submit: 'submit',
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

    onChangeBuySell(e) {
        this.setState({
            buySell: e.target.value
        });
    }

    onChangePropertyType(e) {
        this.setState({
            propertyType: e.target.value
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

    onChangeBuyDescription(e) {
        this.setState({
            buyDescription: e.target.value
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
            buySell: this.state.buySell,
            propertyType: this.state.propertyType,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            buyDescription: this.state.buyDescription
        }
        

        console.log(contact);


        axios.all([
            axios.post('/contacts/add', contact),
            axios.post('/properties/add', property),
            axios.post('/send/send', {
                firstName: contact.firstName, 
                lastName: contact.lastName,
                email: contact.email, 
                buySell: property.buySell,
                propertyType: property.propertyType,
                address: property.address,
                city: property.city,
                state: property.state,
                zip: property.zip,
                buyDescription: property.buyDescription
            })
          ])
          .then(axios.spread((contactRes, propertyRes, sendRes) => {
              console.log(contactRes.data + propertyRes.data + sendRes.data);
            }));

        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            buySell: 'Buy',
            propertyType: 'Residential',
            address: '',
            city: '',
            state: '',
            zip: '',
            buyDescription: '',
            submit: 'submitted'
        })

    }

    render(){
        return(
                // <Col xs="12" sm="12" md="7" lg="5" xl="3">
                    <div>
                        <Form className="contactForm" onSubmit={this.onSubmit}> 
                            <div className="contactTitle"><FontAwesomeIcon icon={faEnvelopeOpenText} size="lg"></FontAwesomeIcon>  Contact Us</div>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                <label for="emailInput" className="contactLabel">Email</label>
                                <input className="form__input" id="emailInput" type="email" placeholder="Enter email" value={this.state.email} onChange={this.onChangeEmail} required/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridFirst">
                                <Form.Label className="contactLabel">First Name</Form.Label> 
                                <Form.Control  className="form__input" type="text" placeholder="Enter first name" value={this.state.firstName} onChange={this.onChangeFirstname} required/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridLast">
                                <Form.Label className="contactLabel">Last Name</Form.Label>
                                <Form.Control  className="form__input" type="text" placeholder="Enter last name" value={this.state.lastName} onChange={this.onChangeLastname} required/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridBuyText">
                                    <Form.Label className="contactLabel">How can we help?</Form.Label>
                                    <Form.Control as="textarea" className="form__input formText" rows="3" value={this.state.buyDescription} onChange={this.onChangeBuyDescription} required/>
                                </Form.Group>
                            </Form.Row>

                            {this.state.submit === 'submit' ? <Button className="submitBtn" variant="dark" type="submit">  <FontAwesomeIcon icon={faPaperPlane} size="md"></FontAwesomeIcon> Submit</Button> : <p>Sucessfully Submitted!</p>}
                            </Form>
                    </div>
                // </Col>
        );
    }
}
export default ContactForm;