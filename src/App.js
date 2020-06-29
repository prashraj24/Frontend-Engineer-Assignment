import React, {Component, useState, setState } from 'react';
import './App.css';
import fampaylogo from './images/fampaylogo.png';
import axios from "axios";
import { Card, Icon, Image, Button, CardHeader, Segment} from 'semantic-ui-react';
import {fetchCardData} from './api/fetchCardData.js';
import { render } from '@testing-library/react';
import BigDisplayCard from './CardComponents/bigdisplaycard';
import SpinTheWheelCard from './CardComponents/spinthewheelcard';
import ImageCard from './CardComponents/imagecard';
import CenterCard from './CardComponents/centercard';
import SmallDisplayCards from './CardComponents/smalldisplaycards';
import ImageCardDetails from './CardComponents/imagecarddetails';

const URL = 'https://run.mocky.io/v3/9fc6c82f-3fde-431d-b1e5-0a1982928cb4';

const loadingTextStyle ={
  color: 'black',
  fontSize: '20px',
}

export default class App extends Component{
   
  constructor(){
    super();
    this.state = {
        data : [],
    }
}

// Fetching the data from API
  getCardData = async (url) => {
          let response = await axios.get(URL)
          .then(res=>{
            var data = res.data;
            this.setState({ data: data });
            console.log('AXIOS CALL:  ' + this.state.data[0].cards[0].formatted_title.entities[0].text);
          })
          .catch(error => this.setState({ error, isLoading: false }));
      }

    componentDidMount(){
        try{
            this.getCardData(URL);
        }
        catch(err){
            console.log(err);
        }
    }

    shouldComponentUpdate() {
      console.log('shouldComponentUpdate lifecycle');
  
      return true;
    }

  
  render(){

     const{data} = this.state.data;

 
     //data.length > 0 condition because the render method happens before the
     //getCardData function can fetch all API data. So some nested data is not accessible.
      return( this.state.data.length > 0 ? (

        <div className="App" >
          <img src={fampaylogo} className="App-logo" alt="fampaylogo" />
          <br></br>
          <br></br>
          <br></br>

          <Card className="greybgd"></Card>

          {console.log("DATA TO SEND TO OTHER COMPONENT", this.state.data)}

          <BigDisplayCard data={this.state.data}></BigDisplayCard>

          <SpinTheWheelCard data={this.state.data}></SpinTheWheelCard>

          <ImageCard data={this.state.data}></ImageCard>

          <CenterCard data={this.state.data}></CenterCard>
          
          {/* 'Not Scrollable' small display card below */}
          <SmallDisplayCards data={this.state.data}></SmallDisplayCards>
          
          <ImageCardDetails data={this.state.data}></ImageCardDetails>
      

        </div>

        ) : (

        <h1 style={loadingTextStyle}> Fetching the goods 😎</h1>
      
       
      )
    );
    
  }
    
}
