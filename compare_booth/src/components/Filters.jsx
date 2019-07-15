import React from "react";
import dataShop from "../dataShop.json";

const data = dataShop;

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "option1",
      zip_code: "",
      cabinePhoto: false,
      bornePhoto: false,
      helioBooth: false,
      filteredResults: []
    };
  }

  handleChanges = e => {
    const input = e.target;
    const name = input.name;
    const value = input.type === "checkbox" ? input.checked : input.value;
    this.setState({ [name]: value });
  };

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

      console.info("Filtered:");
      console.log(filtered);
    }

    // *the value of each key is an array with the values to filter
    // *filter the shops array by choosen parameters
  };

  render() {
    return (
      <React.Fragment>
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
          <br />
          <label>
            <input
              name={"cabinePhoto"}
              type="checkbox"
              value={this.state.cabinePhoto}
              onChange={this.handleChanges}
            />
            Cabine photo{" "}
            <input
              name="bornePhoto"
              type="checkbox"
              value={this.state.bornePhoto}
              onChange={this.handleChanges}
            />
            Borne photo{" "}
            <input
              name="helioBooth"
              type="checkbox"
              value={this.state.helioBooth}
              onChange={this.handleChanges}
            />
            Héliobooth <br />
          </label>
          <button onClick={this.filterClick}>Go !</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Filters;
