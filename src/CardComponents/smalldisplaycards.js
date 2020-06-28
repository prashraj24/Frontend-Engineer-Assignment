import React, {Component, useState, setState} from 'react';
import fampaylogo from '../images/fampaylogo.png';
import { Card, Icon, Image, Button, CardHeader } from 'semantic-ui-react';
import {fetchCardData} from '../api/fetchCardData';
import { render } from '@testing-library/react';
import '../cardstyles/smalldisplaycard_ns.css';
import SpinCardArrowIcon from '../images/SpinCardArrowIcon.png';

export default class SmallDisplayCards extends Component{

//test

  constructor(props){

    super(props);
    this.state = {
        
    }
}

  render(){

    console.log('DATA ' + this.props.data);

    if(this.props.data[5].is_scrollable == "false"){

      return (
        <div className="small-display-card-ns-container">
          
         {/* First Card */} 
    
        <Card className="HC1">
        
         <Image className="smalldisplaycard-ns-icon"
          src={ this.props.data[5].cards[1].icon.image_url }
         />
            
        <Card.Description className="smalldisplaycard-ns-title">
        { this.props.data[5].cards[1].formatted_title.text }
        </Card.Description>

        <Card.Description className="smalldisplaycard-ns-name">
        { this.props.data[5].cards[1].formatted_description.entities[0].text }
        </Card.Description>

        </Card>
         
         </div>
  
      ) 
    } else {

      return (
        <div className="small-display-card-ns-container">
          
         {/* First Card */} 
    
        <Card className="HC1">
        
         <Image className="smalldisplaycard-ns-icon"
          src={ this.props.data[5].cards[1].icon.image_url }
         />
            
        <Card.Description className="smalldisplaycard-ns-title">
        { this.props.data[5].cards[1].formatted_title.text }
        </Card.Description>

        <Card.Description className="smalldisplaycard-ns-name">
        { this.props.data[5].cards[1].formatted_description.entities[0].text }
        </Card.Description>

        </Card>
         
         </div>
  
      ) 

    }
      
    }
        
  }