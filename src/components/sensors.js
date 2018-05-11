import React, { Component } from 'react';
import  './sensors.css'
//import axios from 'axios';

class Sensors extends Component {

  constructor(){
    super();
    this.state = {
      sensors: []
    };
  }
/*
  componentWillMount(){
    this.getSensors();
  }
  getSensors(){
    
     axios.get('/v2/entities')
     .then(response => {
         console.log(response);
         
     })
     
   */
  
  
  
  componentDidMount(){
    fetch('/v2/entities')
         .then(res => res.json())
         .then(sensors => this.setState({sensors}, () => console.log('Sensors fectched...',
          sensors)
         ));
  }
  
 render() {
  return (
    <div className="App">
       <h1>Sensors</h1>     
       <ul>
         {this.state.sensors.map(sensors => 
             <li key={sensors.id}>
              Room : {sensors.id} <br/>
              Pressure :  {sensors.pressure.value}<br/>
              Temperaure {sensors.temperature.value}
            </li>
             
        )}
       </ul>
    </div>
  );

  }
}

export default Sensors;