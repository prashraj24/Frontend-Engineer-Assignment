import React, {Component, useState, setState} from 'react';
import bellicon from '../images/bellicon.png';
import dismissicon from '../images/dismissicon.png';
import { Card, Icon, Image, Button, CardHeader } from 'semantic-ui-react';
import {fetchCardData} from '../api/fetchCardData';
import { render } from '@testing-library/react';
import '../cardstyles/bigdisplaycard.css';

var buttonPressTimer;

export default class BigDisplayCard extends Component{

  constructor() {
    super()
    this.handleButtonPress = this.handleButtonPress.bind(this)
  }

  show () {
    document.getElementsByClassName('big-display-container')[0].style.transform = 'translateX(100px)'
  }

  hide ()  {
  document.getElementsByClassName('big-display-container')[0].style.transform = 'translateX(0px)'
  
  }

  removeCard  () {
    document.getElementsByClassName('parentdiv')[0].style.height= '0px';
    localStorage.setItem('parentdiv', false);
    }

  handleButtonPress () {
    buttonPressTimer = setTimeout(() => document.getElementsByClassName('big-display-container')[0].style.transform = 'translateX(100px)', 1500);
  }

  handleButtonRelease () {
    clearTimeout(buttonPressTimer);
  }


  render(){
    
    console.log('DATA ' + this.props.data);

      return (

        !localStorage.getItem('parentdiv') &&

        <div className="parentdiv">
        
        <Card className="remindmelatercard" 
          onTouchStart={this.handleButtonRelease} 
          onTouchEnd={this.handleButtonRelease} 
          onMouseDown={this.handleButtonRelease} 
          onMouseUp={this.handleButtonRelease} 
          onMouseLeave={this.handleButtonRelease}
          onClick={this.removeCard}>
            <Image className="remindmelatercardicon"  
              src={bellicon} />
         <Card.Content>
            <Card.Header className="remindmelatercardtext" > 
            remind later
            </Card.Header> 
         </Card.Content>
        </Card>

        <Card className="dismissnowcard" 
          onTouchStart={this.handleButtonRelease} 
          onTouchEnd={this.handleButtonRelease} 
          onMouseDown={this.handleButtonRelease} 
          onMouseUp={this.handleButtonRelease} 
          onMouseLeave={this.handleButtonRelease}
          onClick={this.removeCard}>
            <Image className="dismissnowcardicon"  
              src={dismissicon} />
         <Card.Content>
            <Card.Header className="dismissnowcardtext" > 
             dismiss now
            </Card.Header> 
         </Card.Content>
        </Card>


    
    {/* Added on click/press events to the big display card to each element excluding the action button.
        so that user can click the action button without the card moving to the right. Otherwise user will
        be able to click action button only after the card has moved to the right. */}

     <div >

      <div className="big-display-container"  >

        <Card className="HC3">
        
        <Image className="HC3"  
          onTouchStart={this.show} 
          onTouchEnd={this.handleButtonRelease} 
          onMouseDown={this.show} 
          onMouseUp={this.handleButtonRelease} 
          onMouseLeave={this.handleButtonRelease}
          src={this.props.data[0].cards[0].bg_image.image_url}
        />
            
       <Card.Content>
       <Card.Header 
        onTouchStart={this.show} 
        onTouchEnd={this.handleButtonRelease} 
        onMouseDown={this.show} 
        onMouseUp={this.handleButtonRelease} 
        onMouseLeave={this.handleButtonRelease}
       className="title"> { this.props.data[0].cards[0].formatted_title.entities[0].text} <br></br>
       <span className="subTitle">{ this.props.data[0].cards[0].formatted_title.entities[1].text }</span>
       </Card.Header> 
               
      <Card.Description 
       onTouchStart={this.show} 
       onTouchEnd={this.handleButtonRelease} 
       onMouseDown={this.show} 
       onMouseUp={this.handleButtonRelease} 
       onMouseLeave={this.handleButtonRelease}
      className="sampleText">
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