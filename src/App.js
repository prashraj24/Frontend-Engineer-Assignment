import React, { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';
import './App.css';
import fampaylogo from './images/fampaylogo.png';
import axios from "axios";
import { Card, Icon, Image, Button } from 'semantic-ui-react';

function App() {
  
  
    return (
      <div className="App">
        
        <img src={fampaylogo} className="App-logo" alt="fampaylogo" />

       <br></br>
       <br></br>
       <br></br>

       {/* First Card */}  

    <Card className="HC1">
      <Image 
      height='81.2'
      width='91'
      src='https://westeros-staging.s3.amazonaws.com/media/images/generic/2a650f966e1f4a2e81bdbbb118fb2e73.png' 
       />
      <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          22 Friends
        </a>
      </Card.Content>
   </Card>

       


    

        
      </div>
    );
  }
  
  export default App;
  