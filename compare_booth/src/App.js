import React, { Component } from "react";
import "./App.css";
//import Shop from './components/Shop'
//import SearchBox from "./components/SearchBox";

import Filters from './components/Filters'
import FilteredResultBox from "./components/FilteredResultBox";
import Shop from './components/Shop'

class App extends Component {
  constructor() {
    super();
    this.state = { 
      selectedOption: "option1",
      zip_code: "",
      cabinePhoto: false,
      bornePhoto: false,
      helioBooth: false,
      filteredResults: ['']
     }
  }
  render() { 
    return ( 
    <React.Fragment>
        <Filters />
        <FilteredResultBox/>
        <Shop/>
    </React.Fragment> );
  }
}
 
export default App;

 
