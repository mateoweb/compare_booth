import React, { Component } from "react";
import "./App.css";

import dataShop from "./dataShop.json";
import ShopDetail from "./components/ShopDetail"
//import Shop from './components/Shop'
//import SearchBox from "./components/SearchBox";

import Filters from "./components/Filters";
import FilteredResultBox from "./components/FilteredResultBox";
import Shop from "./components/Shop";
import Header from "./components/Header";


const data = dataShop;

class App extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
      selectedOption: "option1",
      zip_code: "",
      cabinePhoto: false,
      bornePhoto: false,
      helioBooth: false,
      filteredResults: [""],
      rating: 5,
      startPrice: 0,
      resume: "",
      website: "",
      phone:""
    };
  }

  handleChanges = e => {
    const input = e.target;
    const name = input.name;
    const value = input.type === "checkbox" ? input.checked : input.value;
    this.setState({ [name]: value });
  };

  changeRating( newRating, name ) {
    this.setState({
      rating: newRating
    });
  }

  handleShopClick() {
    this.setState({isClicked: true});
  }


 
  filterClick = e => {
    e.preventDefault();
    function multiFilter(array, filters) {
      const filterKeys = Object.keys(filters);
      // filters all elements passing the criteria
      return array.filter(item => {
        // dynamically validate all filter criteria
        return filterKeys.every(key => {
          // ignores an empty filter
          if (!filters[key].length) return true;
          return filters[key].includes(item[key]);
        });
      });
    }

    let shops = data;

  

    if (
      this.state.bornePhoto === true &&
      this.state.cabinePhoto === true &&
      this.state.helioBooth === true
    ) {
      let filters = {
        Cabine_photo: ["OUI"],
        Borne_photo: ["OUI"],
        Helio_booth: ["OUI"]
      };
      var filtered = multiFilter(shops, filters);

      this.setState({
        filteredResults: filtered
      });

      //2nd filter to filter b2b/b2C
      if(this.state.selectedOption === "pros"){
       filters = {
         pro: ["OUI"]
       };

       filtered = multiFilter(filtered, filters);

       this.setState({
         filteredResults : filtered
       })
      }
      console.info("Filtered:");
      console.log(filtered);
    } else if (
      this.state.helioBooth === true &&
      this.state.cabinePhoto === true
    ) {
      let filters = {
        Helio_booth: ["OUI"],
        Cabine_photo: ["OUI"]
      };

      filtered = multiFilter(shops, filters);
      this.setState({
        filteredResults: filtered
      });
      //2nd filter to filter b2b/b2C
      if(this.state.selectedOption === "pros"){
        filters = {
          pro: ["OUI"]
        };
 
        filtered = multiFilter(filtered, filters);
 
        this.setState({
          filteredResults : filtered
        })
       }

      console.info("Filtered:");
      console.log(filtered);
    } else if (
      this.state.bornePhoto === true &&
      this.state.cabinePhoto === true
    ) {
      let filters = {
        Cabine_photo: ["OUI"],
        Borne_photo: ["OUI"]
      };

      filtered = multiFilter(shops, filters);
      this.setState({
        filteredResults: filtered
      });

      //2nd filter to filter b2b/b2C
      if(this.state.selectedOption === "pros"){
        filters = {
          pro: ["OUI"]
        };
 
        filtered = multiFilter(filtered, filters);
 
        this.setState({
          filteredResults : filtered
        })
       }

      console.info("Filtered:");
      console.log(filtered);
    } else if (
      this.state.helioBooth === true &&
      this.state.bornePhoto === true
    ) {
      let filters = {
        Helio_booth: ["OUI"],
        Borne_photo: ["OUI"]
      };

      filtered = multiFilter(shops, filters);
      this.setState({
        filteredResults: filtered
      });

      //2nd filter to filter b2b/b2C
      if(this.state.selectedOption === "pros"){
        filters = {
          pro: ["OUI"]
        };
 
        filtered = multiFilter(filtered, filters);
 
        this.setState({
          filteredResults : filtered
        })
       }

      console.info("Filtered:");
      console.log(filtered);
    } else if (this.state.bornePhoto === true) {
      let filters = {
        Borne_photo: ["OUI"]
      };

      filtered = multiFilter(shops, filters);
      this.setState({
        filteredResults: filtered
      });

      //2nd filter to filter b2b/b2C
      if(this.state.selectedOption === "pros"){
        filters = {
          pro: ["OUI"]
        };
 
        filtered = multiFilter(filtered, filters);
 
        this.setState({
          filteredResults : filtered
        })
       }

      console.info("Filtered:");
      console.log(filtered);
    } else if (this.state.cabinePhoto === true) {
      let filters = {
        Cabine_photo: ["OUI"]
      };

      filtered = multiFilter(shops, filters);
      this.setState({
        filteredResults: filtered
      });

      //2nd filter to filter b2b/b2C
      if(this.state.selectedOption === "pros"){
        filters = {
          pro: ["OUI"]
        };
 
        filtered = multiFilter(filtered, filters);
 
        this.setState({
          filteredResults : filtered
        })
       }

      console.info("Filtered:");
      console.log(filtered);
    } else if (this.state.helioBooth === true) {
      let filters = {
        Helio_booth: ["OUI"]
      };

      filtered = multiFilter(shops, filters);
      this.setState({
        filteredResults: filtered
      });

      //2nd filter to filter b2b/b2C
      if(this.state.selectedOption === "pros"){
        filters = {
          pro: ["OUI"]
        };
 
        filtered = multiFilter(filtered, filters);
 
        this.setState({
          filteredResults : filtered
        })
       }

      console.info("Filtered:");
      console.log(filtered);
    } else {
      console.log("aucun résultat");
    }

    // *the value of each key is an array with the values to filter
    // *filter the shops array by choosen parameters
  };

  render() {
    return (
      <React.Fragment>
      <Header/>
        <Filters
          selectedOption={this.state.selectedOption}
          zip_code={this.state.zip_code}
          cabinePhoto={this.state.cabinePhoto}
          bornePhoto={this.state.bornePhoto}
          filteredResults={this.state.filteredResults}
          filterClick={this.filterClick}
          handleChanges={this.handleChanges}
        />
        <FilteredResultBox />
        <Shop 
          selectedOption={this.state.selectedOption}
          zip_code={this.state.zip_code}
          cabinePhoto={this.state.cabinePhoto}
          bornePhoto={this.state.bornePhoto}
          filteredResults={this.state.filteredResults}
          filterClick={this.filterClick}
          handleChanges={this.handleChanges}
          resume = {this.resume}
          rating={this.rating}
        />
        <ShopDetail
         selectedOption={this.state.selectedOption}
         zip_code={this.state.zip_code}
         cabinePhoto={this.state.cabinePhoto}
         bornePhoto={this.state.bornePhoto}
         filteredResults={this.state.filteredResults}
         filterClick={this.filterClick}
         handleChanges={this.handleChanges}
         rating={this.rating}
         startPrice = {this.startPrice}
         resume = {this.resume}
         website = {this.website}
         phone = {this.phone}

        />
        <FilteredResultBox
          selectedOption={this.state.selectedOption}
          zip_code={this.state.zip_code}
          cabinePhoto={this.state.cabinePhoto}
          bornePhoto={this.state.bornePhoto}
          filteredResults={this.state.filteredResults}
          filterClick={this.filterClick}
          handleChanges={this.handleChanges}
        />

        
      </React.Fragment>
    );
  }
}

export default App;
