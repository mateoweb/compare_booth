import React, { Component } from "react";
import "./App.css";
//import Shop from './components/Shop'
//import SearchBox from "./components/SearchBox";

import Filters from './components/Filters'
import FilteredResultBox from "./components/FilteredResultBox";

  class App extends Component {
    state = {  }

   

    render() { 
      return ( 
        <div>
        <Filters/>
        <FilteredResultBox/>

        </div>
       );
    }
  }

  export default App
   

