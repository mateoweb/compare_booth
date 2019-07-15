import React from "react";

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
          />Cabine photo:{" "}
          
          <input
            name="bornePhoto"
            type="checkbox"
            value={this.state.bornePhoto}
            onChange={this.handleChanges}
          />Borne photo:{" "}
          
          <input
            name="helioBooth"
            type="checkbox"
            value={this.state.helioBooth}
            onChange={this.handleChanges}
          />Héliobooth:{" "}
        </label>
      </form>
    );
  }
}

export default Filters;
