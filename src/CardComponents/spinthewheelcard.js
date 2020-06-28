import React, {Component, useState, setState} from 'react';
import fampaylogo from '../images/fampaylogo.png';
import { Card, Icon, Image, Button, CardHeader } from 'semantic-ui-react';
import {fetchCardData} from '../api/fetchCardData';
import { render } from '@testing-library/react';
import '../cardstyles/spinthewheelcard.css';
import SpinCardArrowIcon from '../images/SpinCardArrowIcon.png';

export default class SpinTheWheelCard extends Component{


  constructor(props){

    super(props);
    this.state = {
        
    }
}

  render(){

    console.log('DATA ' + this.props.data);

      return (
        <div className="spin-the-wheel-container">
          
         {/* First Card */} 
    
        <Card className="HC6">
        
         <Image className="SpinCardArrowIcon"
          src={SpinCardArrowIcon}
         />
            
        <Card.Description className="spintextstyle">
        { this.props.data[1].cards[0].formatted_title.text }
        </Card.Description>

         <Image className="accounticon"
          src={this.props.data[1].cards[0].icon.image_url}
         />
  
        </Card>
         
         </div>
  
      )
      
    }
        
  }