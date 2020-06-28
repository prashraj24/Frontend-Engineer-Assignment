import React, {Component, useState, setState} from 'react';
import fampaylogo from '../images/fampaylogo.png';
import { Card, Icon, Image, Button, CardHeader } from 'semantic-ui-react';
import {fetchCardData} from '../api/fetchCardData';
import { render } from '@testing-library/react';
import '../cardstyles/imagecard.css';

export default class ImageCard extends Component{


  constructor(props){

    super(props);
    this.state = {
        
    }
}

  render(){

    console.log('DATA ' + this.props.data);

      return (
        <div className="image-card-container">
          
         {/* First Card */} 
    
        <Card className="HC5">
        
         <Image className = "HC5"
          src={ this.props.data[2].cards[0].bg_image.image_url }
         />
  
        </Card>
         
         </div>
  
      )
      
    }
        
  }