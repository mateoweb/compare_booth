import React, { Component } from "react";
import "./App.css";
import Shop from './components/Shop'
//import SearchBox from "./components/SearchBox";
import dataShop from './dataShop.json'
import Filters from './components/Filters'

  class App extends Component {
    state = {  }

    filterClick = () => {
      //utiliser find() pour trouver un seul élément
      //utiliser filter() pour trouver plusieurs éléments et créer un nouveau

      const dataFilter = dataShop.filter(dataShop => (dataShop.Cabine_photo === "NON") && (dataShop.Helio_booth === "OUI"))
      console.log(dataFilter);
      
    }

    render() { 
      return ( 
        <div>
        <Filters/>
        <button onClick={this.filterClick}>Test Button</button>
        <Shop/>
        </div>
       );
    }
  }

  export default App
   

