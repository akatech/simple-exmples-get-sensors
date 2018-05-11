import React, { Component } from 'react';
import Sensors from './components/sensors';


class App extends Component {
  render() {
    return (
      <div className="App">
         <Sensors/>       
      </div>
    );

    
}
}

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        
         <SecondComponent name={'User'}/>
         <Greeting/>

         <ManagedControlDemo/>
        
      </div>
    );

    App.prototype = {
      name: PropTypes.string.isRequired,
    }
  }
}
// Others Components
class SecondComponent extends Component{
  constructor(props){
    super(props);

    this.state = {
      toggle: true
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.setState((prevState, props) => ({
      toggle: !prevState.toggle
    }));
  }

   render(){
     return(
      <div onClick={this.onClick}>
      Hello, {this.props.name}! I am a SedondComponent.
      Toogle is : {this.state.toggle}
   </div>
     );
  }
} 

const PrintHello = ComposedComponent => class extends Component{
   onclick(){
      console.log('Hello');

   }
   render(){
     return <ComposedComponent { ...this.props } onClick={this.onClick}/>
   }
}

class Greeting extends Component{
  constructor(props){
    super(props);

    this.click = this.click.bind(this);

    this.state = {
        greeting: 'Hello !'
    };
  }

  click(e){
    this.setState({
       greeting: 'Hello world !'
    });
  }

  render(){
    return(
       <div>
         <p>{this.state.greeting}</p>
         <button onClick={this.click}> Click me</button>
       </div>

    )
  }
}

class ManagedControlDemo extends Component {
    constructor(props){
      super(props);
       this.state = {message: ""};
    }

    handleChange(e){
       this.setState({message: e.target.value});
    }
    render() {
      return (
      <div>
      <legend>Type something here</legend>
       <br/>
      <input
        onChange={this.handleChange.bind(this)}
        value={this.state.message}
        autoFocus />
      <h1>{this.state.message}</h1>
      </div>
    );
  }
}
*/



export default App;
