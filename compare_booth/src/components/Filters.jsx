import React, { Component } from "react";
//import dataShop from "../dataShop.json";
//import Shop from "./Shop"
//const data = dataShop;

class Filters extends Component {
  render() {
    return (
      <React.Fragment>
        <form className="form-group">
          <h1>Filtrer la recherche</h1>
          <div className="form-check">
            <label>
              <input
               
                name="selectedOption"
                type="radio"
                value="particuliers"
                checked={this.props.selectedOption === "particuliers"}
                onChange={this.props.handleChanges}
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
                checked={this.props.selectedOption === "pros"}
                onChange={this.props.handleChanges}
              />
              Pros
            </label>
          </div>

          <label>
            Code postal:
            <input
            
              type="text"
              name="zip_code"
              value={this.props.zip_code}
              onChange={this.props.handleChanges}
            />
          </label>
          <br />
          <label>
            <input
           
              name={"cabinePhoto"}
              type="checkbox"
              value={this.props.cabinePhoto}
              onChange={this.props.handleChanges}
            />
            Cabine photo{" "}
            <input
          
              name="bornePhoto"
              type="checkbox"
              value={this.props.bornePhoto}
              onChange={this.props.handleChanges}
            />
            Borne photo{" "}
            <input
            
              name="helioBooth"
              type="checkbox"
              value={this.props.helioBooth}
              onChange={this.props.handleChanges}
            />
            Héliobooth <br />
          </label><br/>
          <button onClick={this.props.filterClick}>Go !</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Filters;
