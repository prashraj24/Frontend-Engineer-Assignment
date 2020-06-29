import React, {Component, useState, setState} from 'react';
import fampaylogo from '../images/fampaylogo.png';
import { Card, Icon, Image, Button, CardHeader, CardContent, CardGroup, Segment } from 'semantic-ui-react';
import {fetchCardData} from '../api/fetchCardData';
import { render } from '@testing-library/react';
import '../cardstyles/smalldisplaycards.css';
import SpinCardArrowIcon from '../images/SpinCardArrowIcon.png';
import PerfectScrollbar from 'react-perfect-scrollbar'

export default class SmallDisplayCards extends Component{

//test

  constructor(props){

    super(props);
    this.state = {
        
    }
}

  render(){

    console.log('DATA ' + this.props.data);
    

    var objectNo = this.props.data;
    var length = objectNo.length;
    console.log('Length:  ' + length)

      return (
        <div>
          
         {/* First Card */} 
        
       
        <div className="scroll">
         <Card className="small-display-card-s-1-container">
         <Image className="smalldisplaycard-s-icon"
          src={ this.props.data[5].cards[1].icon.image_url }
         />
        <Card.Description className="smalldisplaycard-s-title">
        { this.props.data[5].cards[0].formatted_title.text }
        </Card.Description>
        <Card.Description className="smalldisplaycard-s-name">
        { this.props.data[5].cards[1].formatted_description.entities[0].text }
        </Card.Description>
        </Card>
        

        <Card className="small-display-card-s-2-container">
         <Image className="smalldisplaycard-s-icon"
          src={ this.props.data[5].cards[1].icon.image_url }
         />
        <Card.Description className="smalldisplaycard-s-title">
        { this.props.data[5].cards[0].formatted_title.text }
        </Card.Description>
        <Card.Description className="smalldisplaycard-s-name">
        { this.props.data[5].cards[1].formatted_description.entities[0].text }
        </Card.Description>
        </Card>
        </div>
       
       
       
       {/* Not Scrollable Cards */}

        <Card className="small-display-card-ns-1-container">

         <Image className="smalldisplaycard-ns-1-icon"
          src={ this.props.data[4].cards[0].icon.image_url }
         />
            
        <Card.Description className="smalldisplaycard-ns-1-title">
         Small card {/* { this.props.data[4].cards[1].formatted_title.text } */}
        </Card.Description>

        </Card>   
        
    
        <Card className="small-display-card-ns-2-container">

         <Image className="smalldisplaycard-ns-2-icon"
          src={ this.props.data[4].cards[1].icon.image_url }
         />
            
        <Card.Description className="smalldisplaycard-ns-2-title">
         Small card {/* { this.props.data[4].cards[1].formatted_title.text } */}
        </Card.Description>

        <Card.Description className="smalldisplaycard-ns-2-name">
        { this.props.data[4].cards[1].formatted_description.entities[0].text }
        </Card.Description>

        </Card>


       


         </div>
  
      ) 
 
      
    }  
  }