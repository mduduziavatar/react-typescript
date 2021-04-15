import React, { Component } from 'react';// Component is a default engine used to run react
import logo from './logo.svg';
import './App.css';
import Message from './message';

class App extends Component<any> {
  
  //only runs before your component mounts
  componentWillMount(){
    console.log("Almost there ....");
  }
  //runs when your component is mounted
  componentDidMount(){
    console.log("Finally.... hello!");
  }


  // render send data to react app thats being defined
  render() {

    // ways to check different types using typeof keyword
    // let firstValue: string = "Siphiwe";
    // let firstValue: number = 1234;
    // let firstValue: boolean = true;
    // let firstValue: string[] = ["Siphiwe", "Andre"];
    let firstValue: Array<number> = [1, 2, 56];
    //tuple
    let aTuple: [string, number] = ["Siphiwe", 2021];
    //enum which you access using dot notation after
    enum Codes { first = 1, second = 2 }


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p>
          The Value {aTuple[0]} is of {typeof aTuple[0]} type!
        </p>  react comments*/}

          <Message />

        </header>
      </div>
    );
  }
}

export default App;
