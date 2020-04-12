import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import Userprofile from './UserProfile';
import Date from './Date';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component{
  constructor(){
    super();
    this.state = {
      name: "Abdu Rachman Ruchendar",
      age: 23,
      gender: "Laki-laki"
    }
  }

  render(){
    return(
      <div class="container">
        <div class='row'>
          <div class="col s5 offset-s7 m6 offset-m6 l4 offset-l8">
            <Date />
          </div>
        </div>
        
        <div class="row">
          <div class="col s6 offset-s3">
            <Greeting name={this.state.name} age={this.state.age} gender={this.state.gender}/>                    
          </div>

          <div class="col s12">
            <Userprofile />                    
          </div>
        </div>
      </div>
    );
  }
}

export default App;
