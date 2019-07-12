import React, { Component } from "react";
import "./App.css";
import Shop from './components/Shop'
//import SearchBox from "./components/SearchBox";
import dataShop from './dataShop.json'

  class App extends Component {
    state = {  }

    onHandleClick = () => {
      const dataFilter = dataShop.filter(dataShop => dataShop.Cabine_photo === "OUI")
      console.log(dataFilter);
      
    }

    render() { 
      return ( 
        <div>
        <button onClick={this.onHandleClick}>Test Button</button>
        <Shop/>
        </div>
       );
    }
  }

  export default App
   

