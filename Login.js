import React, {useState, Fragment } from 'react';
import Logo from "./ELClub logo.jpg";
import "./Login.css";
import { Form } from 'react-bootstrap';
import {FormLabel} from 'react-bootstrap';
import FormGroup from 'react-bootstrap/FormGroup';
import {Link} from 'react-router-dom';

export default function Login (){
    
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
                
                <div className="background3">
                <div className="container" align="left" >
                    <br/><br/><br/><br/><br/><br/>
                    
                     <Form noValidate validated={validated} onSubmit={handleSubmit} align="center"  >
                     
                       <img src={Logo} alt= "" width="150px" /><br/><br/>
                        <h1><b><i>LOGIN</i></b></h1><br/>
                        
                        
                    
                        <FormGroup  md="4" controlId="validationCustomEmail">
                        <FormLabel><b>E-MAIL: </b></FormLabel>
                        <input type="text " placeholder="user@gmail.com"required/>
                        <Form.Control.Feedback>Please enter the email!</Form.Control.Feedback>
                        </FormGroup>
                        
                        <FormGroup  md="4" controlId="validationCustomPassword">
                        <FormLabel><b>PASSWORD:</b> </FormLabel>
                        <input type="password" name="password" placeholder="Password" required/>
                        <Form.Control.Feedback>Please Choose the password!</Form.Control.Feedback>
                        </FormGroup>
                        
                        
                        <FormLabel><input type="checkbox" name="loc" /><b>Remember me</b></FormLabel>
                         <br/><br/>
                        <button type="submit" value="submit"className="btn btn-success btn-lg" ><Link to="/elclub">Submit</Link></button>
                        <br/><br/>
                        
                     </Form>
                     <br/><br/><br/><br/><br/><br/>
                    </div>
                </div>
                
            </Fragment>
        );
    
}
