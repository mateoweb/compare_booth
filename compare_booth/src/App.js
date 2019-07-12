import React, { Component } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import dataShop from "./dataShop.json";
import 'rheostat/initialize';

const data = dataShop[0].data;
const id = dataShop[0].data[0].id;

console.log(id);

class App extends Component {
  state = {
    data: {data}
  };
  
  
  render() {
   // {this.state.data.map((person, index) => (
    //  <p key={index}>Hello, {person.name} from {person.country}!</p>
 // ))}
    
  
    return (
      <div className="App">
        <header>
          <SearchBox />
        </header>

        <div>
   
    </div>
      </div>
    );
  }
}

export default App;
