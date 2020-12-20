import React,{Fragment, useState} from 'react';
import  "./ELClub.css";
import book1 from "./Book 1.pdf";
import book2 from "./Book 2.pdf";
import book3 from "./Book 3.pdf";
import book4 from "./Book 4.pdf";
import book5 from  "./Book 5.pdf";
import bookimage1 from "./Book image1.jpg";
import bookimage2 from "./Book image2.jpg";
import bookimage3 from "./Book image3.jpg";
import bookimage4 from "./Book image4.jpg";
import bookimage5 from "./Book image5.jpg";
import movieimage1 from "./movie image1.jpg";
import movieimage2 from "./movie image2.jpg";
import movieimage3 from "./movie image3.jpg";
import movieimage4 from "./movie image4.jpg";
import movieimage5 from "./movie image5.jpg";
import Logo from "./ELClub logo.jpg";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import {  Card,  Row, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default function ElClub () {
      const[count1,setCount1]=useState(0);
      const[count2,setCount2]=useState(0);
      const[count3,setCount3]=useState(0);
      const[count4,setCount4]=useState(0);
      const[count5,setCount5]=useState(0);
      const[count6,setCount6]=useState(0);
      const[count7,setCount7]=useState(0);
      const[count8,setCount8]=useState(0);
      const[count9,setCount9]=useState(0);
      const[count10,setCount10]=useState(0);
     const  handleClick1=()=>{
         setCount1 (count1+1);
        };
      const handleClick2=()=>{  
         setCount2 (count2+1);};
      const handleClick3=()=>{  
         setCount3 (count3+1);};
      const handleClick4=()=>{  
         setCount4 (count4+1);};
      const handleClick5=()=>{ 
         setCount5 (count5+1);};
      const handleClick6=()=>{
         setCount6 (count6+1);};
      const handleClick7=()=>{   
         setCount7 (count7+1);};
      const handleClick8=()=>{
         setCount8 (count8+1);};
      const handleClick9=()=>{   
         setCount9 (count9+1);};
      const handleClick10=()=>{   
         setCount10 (count10+1);};



         
    return (
        <Fragment>  
         
            
          <Nav>
               < Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand >
                 <img
                  alt=""
                  src="/ELClub logo.jpg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                    />{' '}
                   English Learning Club
                </Navbar.Brand>
                
               </ Navbar> 
               <Navbar bg="light" expand="lg">
                        <Navbar.Toggle aria-controls="responsive-Navbar-Nav" />
                        <Navbar.Collapse id="responsive-Navbar-Nav">
                           <Nav className="xs-auto" variant="success">
                           <Nav.Link href="./App.js" variant="success">HOME</Nav.Link>
                           <NavLink href="./App.js" variant="success">ABOUT US</NavLink>
                           <Navbar bg="light" variant="light" expand="lg"></Navbar>
                              <Navbar bg="light" variant="light" expand="lg"></Navbar>
                              <Navbar bg="light" variant="light" expand="lg"></Navbar>
                              <Navbar bg="light" variant="light" expand="lg"></Navbar>
                              <Navbar bg="light" variant="light" expand="lg"></Navbar>
                              <Navbar bg="light" variant="light" expand="lg"></Navbar>
                              <Navbar bg="light" variant="light" expand="lg"></Navbar>
                              <Navbar bg="light" variant="light" expand="lg"></Navbar>
                              <Navbar bg="light" variant="light" expand="lg"></Navbar>
                              <Navbar bg="light" variant="light" expand="lg"></Navbar>
                              <Navbar bg="light" variant="light" expand="lg"></Navbar>
                              <Navbar bg="light" variant="light" expand="lg"></Navbar>
                              <Navbar bg="light" variant="light" expand="lg"></Navbar>
                              <Navbar bg="light" variant="light" expand="lg"></Navbar>
                              <Navbar bg="light" variant="light" expand="lg"></Navbar>
                              <Navbar bg="light" variant="light" expand="lg"></Navbar>
                              <Navbar bg="light" variant="light" expand="lg"></Navbar>
                              <Navbar bg="light" variant="light" expand="lg"></Navbar>
                              <Navbar bg="light" variant="light" expand="lg"></Navbar>
                              <Navbar bg="light" variant="light" expand="lg"></Navbar>
                              <Navbar bg="light" variant="light" expand="lg"></Navbar>
                              <Navbar bg="light" variant="light" expand="lg"></Navbar>
                              <Navbar bg="light" variant="light" expand="lg"></Navbar>
                              <Navbar bg="light" variant="light" expand="lg"></Navbar>
                              <Navbar bg="light" variant="light" expand="lg"></Navbar>
                              <Navbar bg="light" variant="light" expand="lg"></Navbar>
                              <Navbar bg="light" variant="light" expand="lg"></Navbar>
                              <Navbar bg="light" variant="light" expand="lg"></Navbar>
                              <Navbar bg="light" variant="light" expand="lg"></Navbar>
                              <Navbar bg="light" variant="light" expand="lg"></Navbar>
                           <NavLink href="./App.js" variant="success"><Link to="/">LOGOUT</Link></NavLink>
                           </Nav>
                           </Navbar.Collapse>
                           </  Navbar>
                        
                        </Nav>
                       
                       
                       
                        <div className="Background4">
                            <div className="container" align="center"><br/><br/>
                            <img src={Logo} alt= "" width="200px" /><br/><br/>
                            <h1><b><i>WELCOME  TO  OUR  CLUB</i></b></h1><br/>
                            <h3><b>!!!!Happy Learning!!!!</b></h3>

                            <br/><br/>

                           
                            
                            
                            
                            
                            <Col><br/>
                            <h2 align="center"><b><i>MOVIES</i></b></h2><br/><br/>
                            <Row>
                            <div align="left">
                            <h3><b>1. Venom</b></h3><br/>
                            <img src={movieimage1} alt= "" width="400px" height="400px"/><br/><br/>
                            <Button href="https://www.youtube.com/watch?v=sle6fEvWiaw" id="Movie" className="btn btn-secondary"><h5><b>Watch Movie</b></h5></Button><> </>
                            <button onClick={handleClick1} className="btn btn-light "><b>Like</b></button><> </>
                            <b>{count1}</b>
                            </div>
                            </Row><br/>
                            <Row>
                            <div align="left">
                            <h3><b>2. P.S I Love You</b></h3><br/>
                            <img src={movieimage2} alt= "" width="400px" height="400px"/><br/><br/>
                            <Button href="https://www.youtube.com/watch?v=rMds5Dc8ZMk" id="Movie" className="btn btn-warning"><h5><b>Watch Movie</b></h5></Button><>   </>
                            <button onClick={handleClick2} className="btn btn-light "><b>Like</b></button><> </>
                            <b>{count2}</b></div>
                            </Row><br/>
                            <Row>
                            <div align="left">
                            <h3><b>3. The Fault In Our Start</b></h3><br/>
                            <img src={movieimage3} alt= "" width="400px"height="400px" /><br/><br/>
                            <Button href="https://www.youtube.com/watch?v=kYYuC6Sz8SQ" id="Movie" className="btn btn-success"><h5><b>Watch Movie</b></h5></Button><> </>
                            <button onClick={handleClick3} className="btn btn-light "><b>Like</b></button><> </>
                            <b>{count3}</b></div>
                            </Row><br/>
                            <Row>
                            <div align="left">
                            <h3><b>4. Wall-E</b></h3><br/>
                            <img src={movieimage4} alt= "" width="400px" height="400px"/><br/><br/>
                            <Button href="https://www.youtube.com/watch?v=D7iqUEWEPOA" id="Movie" className="btn btn-info"><h5><b>Watch Movie</b></h5></Button><> </>
                            <button onClick={handleClick4} className="btn btn-light "><b>Like</b></button><> </>
                            <b>{count4}</b></div>
                            </Row><br/>
                            <Row>
                            <div align="left">
                            <h3><b>5. The Martian</b></h3><br/>
                            <img src={movieimage5} alt= "" width="400px"height="400px" /><br/><br/>
                           <Button href="https://www.youtube.com/watch?v=ICvVEeeuCTQ" id="Movie" className="btn btn-danger"><h5><b>Watch Movie</b></h5></Button><> </>
                            <button onClick={handleClick5} className="btn btn-light " ><b>Like</b></button><> </>
                            <b>{count5}</b></div>
                            </Row><br/>
                            </Col><br/>




                           
                           
                            <Col align="right"><br/><br/>
                            <h2 align="center"><b><i>BOOKS</i></b></h2><br/><br/>
                            <Row >
                               <div align="left">
                               <h3><b>1. The Wind in the Willows ....Kenneth Grahamae</b></h3><br/>
                               <img src={bookimage1} alt= "" width="400px"height="400px" /><br/><br/>
                               <Button href={book1} id="Book" className="btn btn-success"><h5><b>Download Book</b></h5></Button>
                               <> </>
                                <button onClick={handleClick6} className="btn btn-light "><b>Like</b></button><>   </>
                                <b>{count6}</b></div>
                            </Row><br/>
                            <Row>
                                <div align="left">
                                <h3><b>2. Lord of the Files.....William Golding</b></h3><br/>
                                <img src={bookimage2} alt= "" width="400px"height="400px" /><br/><br/>
                                <Button href={book2} id="Book" className="btn btn-danger"><h5><b>Download Book</b></h5></Button><> </>
                                <button onClick={handleClick7} className="btn btn-light "><b>Like</b></button><> </>
                                <b>{count7}</b></div>
                            </Row><br/>
                            <Row>
                               <div align="left">
                               <h3><b>3. The Old Man and the Sea.....Ernest Hemingway</b></h3><br/>
                               <img src={bookimage3} alt= "" width="400px" height="400px"/><br/><br/>
                               <Button href={book3} id="Book" className="btn btn-warning"><h5><b>Download Book</b></h5></Button><> </>
                                <button onClick={handleClick8} className="btn btn-light "><b>Like</b></button><> </>
                                <b>{count8}</b></div>
                            </Row><br/>
                            <Row>
                                <div align ="left"> 
                                <h3><b>4. Tuesdays with Morrie.....Mitch Alborm</b></h3><br/>
                                <img src={bookimage4} alt= "" width="400px" height="400px"/><br/><br/>
                                <Button href={book4} id="Book" className="btn btn-info"><h5><b>Download Book</b></h5></Button><> </>
                                <button onClick={handleClick9} className="btn btn-light "><b>Like</b></button><> </>
                                <b>{count9}</b></div>
                            </Row><br/>
                            <Row>
                                <div align ="left">
                                <h3><b>5. High Fidelity........Nick Hornby</b></h3><br/>
                                <img src={bookimage5} alt= "" height="400px" width="400px" /><br/><br/>
                                <Button href={book5} id="Book" className="btn btn-secondary"><h5><b>Download Book</b></h5></Button><> </>
                                <button onClick={handleClick10} className="btn btn-light " ><b>Like</b></button><> </>
                                <b>{count10}</b></div>
                            </Row><br/>
                            </Col><br/><br/>
                            <h4><b><i>!!!!!Thanks for joining our Club!!!!!</i></b></h4>
                            </div>
                             <br/><br/>
                            
                            
                            
                            
                            
                            
                            <div className="third">
                                <div className="container"><br/><br/>
                                     <Row align="center">
                                     <Col >
                                     <Card id="card1" style={{ width: '18rem' }}>
                                     <Card.Text>
                                     <h6><b>COMPANY</b></h6>
                                     <a href="App.js"> Website </a><br/>
                                        Terms and Conditions<br/>
                                        Privacy Policy <br/>
                                        Do Not Sell My Personal Information
                                     </Card.Text>
                                     </Card></Col>
                                     <Col align="center">
                                      <Card id="card1" style={{ width:'18rem'}}>
                                        <Card.Text>
                                           <h6><b>OUR SERVICES</b></h6>
                                                Our Service
                                        </Card.Text>
                                     </Card></Col>
                                     <Col >
                                      <Card id="card1" style={{ width:'18rem'}}>
                                      <Card.Text>
                                        <h6><b>OUR MEMBER</b></h6>
                                             Our Member
                                      </Card.Text>
                                      </Card>
            
                                     </Col></Row>
                                        <div className="footer-copyright text-center py-3"><br/><br/>
                                         <Container fluid>
                                            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.react-bootstrap.com"> React-Bootstrap.com </a>
                                         </Container>
                                        </div>
                                      <br/><br/>

                                    </div>    
                                </div>
                                </div>
                        </Fragment>  
    );
}