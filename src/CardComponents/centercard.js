import React, {Component, useState, setState} from 'react';
import fampaylogo from '../images/fampaylogo.png';
import { Card, Icon, Image, Button, CardHeader } from 'semantic-ui-react';
import {fetchCardData} from '../api/fetchCardData';
import { render } from '@testing-library/react';
import '../cardstyles/centercard.css';

export default class CenterCard extends Component{


  constructor(props){

    super(props);
    this.state = {
        
    }
}


  render(){
    
    console.log('DATA ' + this.props.data);

      return (
        <div className="center-card-container">
          
         {/* First Card */} 
    
        <Card className="HC4">
        
         <Image className="center-card-image"
          src={this.props.data[3].cards[0].icon.image_url}
        />
            
        <Card.Description className="centercardname">
        { this.props.data[3].cards[0].formatted_title.entities[0].text}
        </Card.Description>

        <Card.Description className="centercardtext">
        { this.props.data[3].cards[0].formatted_description.text}
        </Card.Description>
     
        <a href={this.props.data[3].cards[0].cta[0].url} target="_blank">
          <Button className='center-card-act1-button'>
            {this.props.data[3].cards[0].cta[0].text}
          </Button>
          </a>

          <a href={this.props.data[3].cards[0].cta[1].url} target="_blank">
          <Button className='center-card-act2-button'>
            {this.props.data[3].cards[0].cta[1].text}
          </Button>
          </a>

        </Card>
         
         </div>
  
      )
      
    }
        
  }