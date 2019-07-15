import React from "react";
import dataShop from '../dataShop.json'

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "option1",
      zip_code: "",
      cabinePhoto: false,
      bornePhoto: false,
      helioBooth: false
    };

    //    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChanges = e => {
    const input = e.target;
    const name = input.name;
    const value = input.type === "checkbox" ? input.checked : input.value;
    this.setState({ [name]: value });
  };

  filterClick = (e) => {
       e.preventDefault();
    //utiliser find() pour trouver un seul élément
    //utiliser filter() pour trouver plusieurs éléments et créer un nouveau
    if (this.state.cabinePhoto === true){
        const dataFilter = dataShop.filter(dataShop => (dataShop.Borne_photo === "NON") && (dataShop.Cabine_photo === "OUI") && (dataShop.Helio_booth === "NON"))
        console.log(dataFilter);
    }
    else if (this.state.bornePhoto === true){
        const dataFilter2 = dataShop.filter(dataShop => (dataShop.Borne_photo === "OUI") && (dataShop.Cabine_photo === "NON") && (dataShop.Helio_booth === "NON"))
        console.log(dataFilter2);
    }
    else if (this.state.helioBooth === true){
        const dataFilter3 = dataShop.filter(dataShop => (dataShop.Helio_booth === "OUI") && (dataShop.Borne_photo === "NON") && (dataShop.Cabine_photo === "NON"))
        console.log(dataFilter3);
    }
    else if (this.state.cabinePhoto === true && this.state.bornePhoto === true){
        const dataFilter4 = dataShop.filter(dataShop => (dataShop.Cabine_photo === "OUI") && (dataShop.Borne_photo === "OUI") && (dataShop.Helio_booth === "NON"))
        console.log(dataFilter4);
    }
    else if (this.state.cabinePhoto === true && this.state.helioBooth === true){
        const dataFilter5 = dataShop.filter(dataShop => (dataShop.Cabine_photo === "OUI") && (dataShop.Helio_booth === "OUI") && (dataShop.Borne_photo === "NON"))
        console.log(dataFilter5);
    }
    else if (this.state.cabinePhoto === true && this.state.helioBooth === true && this.state.bornePhoto === true){
        const dataFilter6 = dataShop.filter(dataShop => (dataShop.Cabine_photo === "OUI") && (dataShop.Borne_photo === "OUI") && (dataShop.Helio_booth === "OUI"))
        console.log(dataFilter6);
    }
    else if (this.state.bornePhoto === true && this.state.helioBooth === true){
        const dataFilter7 = dataShop.filter(dataShop => (dataShop.Cabine_photo === "NON") && (dataShop.Helio_booth === "OUI") && (dataShop.Borne_photo === "OUI"))
        console.log(dataFilter7);
    }
    else if (this.state.cabinePhoto === true && this.state.helioBooth === true){
        const dataFilter8 = dataShop.filter(dataShop => (dataShop.Cabine_photo === "OUI") && (dataShop.Helio_booth === "OUI") && (dataShop.Borne_photo === "NON"))
        console.log(dataFilter8);
    }
    else {
        console.log('please select an option');
    }
    
    
  }

  render() {
    return (
      <form>
        <h1>Filtrer la recherche</h1>
        <div className="form-check">
          <label>
            <input
              name="selectedOption"
              type="radio"
              value="particuliers"
              checked={this.state.selectedOption === "particuliers"}
              onChange={this.handleChanges}
            />
            Particulier
          </label>
        </div>

        <div className="form-check">
          <label>
            <input
              name="selectedOption"
              type="radio"
              value="pros"
              checked={this.state.selectedOption === "pros"}
              onChange={this.handleChanges}
            />
            Pros
          </label>
        </div>

        <label>
          Code postal:
          <input
            type="text"
            name="zip_code"
            value={this.state.zip_code}
            onChange={this.handleChanges}
          />
        </label>
        <br/>
        <label>
          
          <input
            name="cabinePhoto"
            type="checkbox"
            value={this.state.cabinePhoto}
            onChange={this.handleChanges}
          />Cabine photo{" "}
          
          <input
            name="bornePhoto"
            type="checkbox"
            value={this.state.bornePhoto}
            onChange={this.handleChanges}
          />Borne photo{" "}
          
          <input
            name="helioBooth"
            type="checkbox"
            value={this.state.helioBooth}
            onChange={this.handleChanges}
          />Héliobooth{" "}<br/>
        </label>
        <button onClick={this.filterClick}>Go !</button>
      </form>
    );
  }
}

export default Filters;
