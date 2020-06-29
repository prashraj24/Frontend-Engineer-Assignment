import React, {Component, useState, setState} from 'react';
import fampaylogo from '../images/fampaylogo.png';
import imagecarddetails from '../images/imagecarddetails.png';
import { Card, Icon, Image, Button, CardHeader } from 'semantic-ui-react';
import {fetchCardData} from '../api/fetchCardData';
import { render } from '@testing-library/react';
import '../cardstyles/imagecard.css';
import { NavLink} from 'react-router-dom';

export default class ImageCard extends Component{

  revealdetails = () => {
     
    document.getElementsByClassName('image-card-container')[0].style.top = '84px';
    document.getElementsByClassName('image-card-container')[0].style.height = '500px';
    document.getElementsByClassName('image-card-container')[0].style.width = '360px';
    document.getElementsByClassName('image-card-container')[0].style.marginLeft = '0px';
    document.getElementsByClassName('image-card-container')[0].style.backgroundColor = 'white';
    document.getElementsByClassName('image-card-details-style')[0].style.visibility = 'visible';
    
  }

  render(){

    console.log('DATA ' + this.props.data);

      return (
        <div className="maindiv">
          
         {/* First Card */} 
        
        <div className="image-card-container"  >
        <Card className="HC5" onClick={this.revealdetails}>
         <Image className = "HC5"
          src={ this.props.data[2].cards[0].bg_image.image_url }
         />
        </Card>
        </div>

         </div>
  
      )
      
    }
        
  }