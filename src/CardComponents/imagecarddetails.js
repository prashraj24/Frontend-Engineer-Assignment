import React, {Component, useState, setState} from 'react';
import fampaylogo from '../images/fampaylogo.png';
import imagecarddetails from '../images/imagecarddetails.png';
import { Card, Icon, Image, Button, CardHeader } from 'semantic-ui-react';
import {fetchCardData} from '../api/fetchCardData';
import { render } from '@testing-library/react';
import '../cardstyles/imagecarddetails.css';
import {BrowserRouter, Router, Switch, Route, Link} from 'react-router-dom';
import SpinCardArrowIcon from '../images/SpinCardArrowIcon.png';


export default class ImageCardDetails extends Component{

  revealdetails = () => {
     
    document.getElementsByClassName('image-card-container2')[0].style.top = '84px';
    document.getElementsByClassName('image-card-container2')[0].style.height = '450px';
    document.getElementsByClassName('image-card-container2')[0].style.width = '360px';
    document.getElementsByClassName('image-card-container2')[0].style.marginLeft = '0px';
    document.getElementsByClassName('image-card-container2')[0].style.backgroundColor = 'white';
    document.getElementsByClassName('image-card-details-style')[0].style.visibility = 'visible';
    document.getElementsByClassName('image-card-details-style')[0].style.height= '600px';
    document.getElementsByClassName('SpinCardArrowIcon1')[0].style.visibility = 'visible';
    document.getElementsByClassName('image-card-container2')[0].style.visibility = 'visible';
    
  }

  hidedetails = () => {
    document.getElementsByClassName('image-card-details-style')[0].style.visibility = 'hidden';
    document.getElementsByClassName('SpinCardArrowIcon1')[0].style.visibility = 'hidden';
    document.getElementsByClassName('image-card-container2')[0].style.visibility = 'hidden';
  }

  render(){

    console.log('DATA ' + this.props.data);

      return (
        <div className="maindiv">
          
         {/* First Card */} 
        
         <Image className="SpinCardArrowIcon1" onClick={this.hidedetails}
          src={SpinCardArrowIcon}
         />

        <div className="image-card-container2" >
        <Card className="HC5" onClick={this.revealdetails}>
         <Image className = "HC5"
          src={ this.props.data[2].cards[0].bg_image.image_url }
         />
        </Card>
        </div>

        <div className="image-card-details-style">
        <Card>
        <Image 
          src={ imagecarddetails }
         />
        </Card>
        </div>

         </div>
  
      )
      
    }
        
  }