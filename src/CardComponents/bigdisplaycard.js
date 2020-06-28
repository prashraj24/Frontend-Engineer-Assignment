import React, {Component, useState, setState} from 'react';
import fampaylogo from '../images/fampaylogo.png';
import { Card, Icon, Image, Button, CardHeader } from 'semantic-ui-react';
import {fetchCardData} from '../api/fetchCardData';
import { render } from '@testing-library/react';
import '../cardstyles/bigdisplaycard.css';

export default class BigDisplayCard extends Component{


  constructor(props){

    super(props);
    this.state = {
        
    }
}


  render(){

    // console.log('Big Card Page: ' + this.props.data.map(e=>e.cards[0].formatted_title.entities
    //                                                     .map(item => item.text)[0]));
    
    console.log('DATA ' + this.props.data);

      return (
        <div className="big-display-container">
          
         {/* First Card */} 
    
        <Card className="HC3">
        
         <Image className="HC3"
          src={this.props.data[0].cards[0].bg_image.image_url}
        />
            
       <Card.Content>
       <Card.Header className="title"> { this.props.data[0].cards[0].formatted_title.entities[0].text} <br></br>
       <span className="subTitle">{ this.props.data[0].cards[0].formatted_title.entities[1].text }</span>
       </Card.Header> 
               
      <Card.Description className="sampleText">
      { this.props.data[0].cards[0].description}
      </Card.Description>
     
      </Card.Content>
     
      <a href={this.props.data[0].cards[0].cta[0].url} target="_blank">
          <Button className='action-button' >
            {this.props.data[0].cards[0].cta[0].text}
          </Button>
      </a>
      
      <Card.Content extra>
            {/* <a>
                <Icon name='user' />
                22 Friends
            </a> */}
        </Card.Content>
        </Card>
         
         </div>
  
      )
      
    }
        
  }