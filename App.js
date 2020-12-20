import React from 'react';
import {  BrowserRouter,Route,Switch } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from "./Login";
import ElClub from "./ELClub";


export default function App () {
          
        return (
          <div>
          <BrowserRouter>
          
    
               <Switch>
                  <Route path="/" component={Home} exact/>
                  <Route exact path="/about" component={Home} />
                  <Route exact path="/register"  component={Register}  />    
                  <Route exact path="/login"  component={Login}/>
                  <Route exact path="/elclub" component={ElClub}/>
               </Switch>
             
          </BrowserRouter> 
          </div> 
          
        );
      }
       
      