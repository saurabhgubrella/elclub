import React, { Fragment,useState } from 'react';
import Logo from "./ELClub logo.jpg";
import "./Register.css";
import { Form, Col } from 'react-bootstrap';
import {FormLabel} from 'react-bootstrap';
import FormGroup from 'react-bootstrap/FormGroup';
import {Link} from 'react-router-dom';

export default function Register (){
    
    const [validated, setValidated] = useState(false);

     const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

        return (
            <Fragment >
                
                <div className="Background1">
                <div className="container" align="left">
                    <br/><br/>
                    
                     <Form noValidate validated={validated} onSubmit={handleSubmit} align ="center">
                     
                       <img src={Logo} alt= "" width="150px" /><br/><br/>
                        <h1><b><i>REGISTER</i></b></h1><br/>
                        <Col>
                        <FormGroup  as={Col} controlId="validationCustom01">
                        <FormLabel Row sm="2"><b>NAME: </b></FormLabel>
                        
                        <input type="text" placeholder="Name"  required/>
                        <Form.Control.Feedback>Please enter the name!</Form.Control.Feedback>
                        </FormGroup></Col>
                        <Col>
                        <FormGroup  as={Col} controlId="validationCustomEmail">
                        <FormLabel><b>E-MAIL: </b></FormLabel>                       
                        
                        <input type="text " placeholder="user@gmail.com"required/>
                        <Form.Control.Feedback>Please enter the email!</Form.Control.Feedback>
                        
                        </FormGroup></Col>
                        <Col>
                        <FormGroup as={Col}  controlId="validationCustom02">
                        <FormLabel><b>PASSWORD:</b> </FormLabel>
                        
                        <input type="password" name="password" placeholder="Password" required/>
                        <Form.Control.Feedback>Please Choose the password!</Form.Control.Feedback>
                        </FormGroup></Col>
                        <Col>
                        <FormGroup  as={Col} controlId="validationCustom03">
                        <FormLabel><b>MOBILE NUMBER: </b></FormLabel>
                        
                        <input type="text" name="mobile number" placeholder="Mobile Number"required/>
                        <Form.Control.Feedback>Enter the mobile number!</Form.Control.Feedback>
                        </FormGroup></Col>
                        <Form.Group>
                        <Form.Check
                            required
                          label="Agree to terms and conditions"
                           feedback="You must agree before submitting." />
                        </Form.Group>
                        <FormLabel><input type="checkbox" name="loc" /><b>Remember me</b></FormLabel>
                         <br/><br/>
                        <button type="submit" value="submit"className="btn btn-success btn-lg" ><Link to="/elclub">Submit</Link></button>
                        <br/><br/>
                        <p><b>Already Have An Account?</b>
                        <a href="/." role="button" aria-pressed="true" ><b id="login"><Link to="/login">LOGIN</Link></b></a></p> 
                        
                     </Form>
                     <br/><br/>
                    </div>
                </div>
                
            </Fragment>
        );
    
}
