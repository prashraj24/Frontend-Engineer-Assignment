import React, {Component, useState, setState} from 'react';
import bellicon from '../images/bellicon.png';
import dismissicon from '../images/dismissicon.png';
import { Card, Icon, Image, Button, CardHeader } from 'semantic-ui-react';
import {fetchCardData} from '../api/fetchCardData';
import { render } from '@testing-library/react';
import '../cardstyles/bigdisplaycard.css';

var buttonTimer;

export default class BigDisplayCard extends Component{


  constructor() {
    super()
    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)
  }

  show () {
    this.buttonTimer= setTimeout(() =>
    document.getElementsByClassName('big-display-container')[0].style.transform = 'translateX(100px)'
    , 100);
  }

  hide = () => {
  document.getElementsByClassName('big-display-container')[0].style.transform = 'translateX(0px)'
  }

  buttonTimerReset = () => {
    clearTimeout(buttonTimer);
  }


  render(){
    
    console.log('DATA ' + this.props.data);

      return (
        <div>

        <div> 
        
        <Card className="remindmelatercard" 
          onTouchStart={this.hide} 
          onTouchEnd={this.buttonTimerReset} 
          onMouseDown={this.hide} 
          onMouseUp={this.buttonTimerReset} 
          onMouseLeave={this.buttonTimerReset}>
            <Image className="remindmelatercardicon"  
              src={bellicon} />
         <Card.Content>
            <Card.Header className="remindmelatercardtext" > 
            remind later
            </Card.Header> 
         </Card.Content>
        </Card>

        <Card className="dismissnowcard" 
          onTouchStart={this.hide} 
          onTouchEnd={this.buttonTimerReset} 
          onMouseDown={this.hide} 
          onMouseUp={this.buttonTimerReset} 
          onMouseLeave={this.buttonTimerReset}>
            <Image className="dismissnowcardicon"  
              src={dismissicon} />
         <Card.Content>
            <Card.Header className="dismissnowcardtext" > 
             dismiss now
            </Card.Header> 
         </Card.Content>
        </Card>

        </div>

        <div 
          onTouchStart={this.show} 
          onTouchEnd={this.buttonTimerReset} 
          onMouseDown={this.show} 
          onMouseUp={this.buttonTimerReset} 
          onMouseLeave={this.buttonTimerReset}
         >
          
         {/* First Card */} 

      <div className="big-display-container" >

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
      
      <a href={this.props.data[0].cards[0].cta[0].url} target="_blank">
          <Button className='action-button' >
            {this.props.data[0].cards[0].cta[0].text}
          </Button>
      </a>
     
      </Card.Content>
     
      
        </Card>

        </div>

         </div>


         </div>
      )
      
    }
        
  }