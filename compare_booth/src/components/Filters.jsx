import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

//import dataShop from "../dataShop.json";
//import Shop from "./Shop"
//const data = dataShop;

class Filters extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar className="bg-light justify-content-between">
          <Form inline>
            {["radio"].map(type => (
              <div key={`custom-inline-${type}`} className="mb-3">
                <Form.Check
                  custom
                  inline
                  label="Particuliers"
                  type={type}
                  id={`custom-inline-${type}-1`}
                  name="selectedOption"
                  value="particuliers"
                  checked={this.props.selectedOption === "particuliers"}
                  onChange={this.props.handleChanges}
                />
                <Form.Check
                  custom
                  inline
                  label="Pros"
                  type={type}
                  id={`custom-inline-${type}-2`}
                  name="selectedOption"
                  value="pros"
                  checked={this.props.selectedOption === "pros"}
                  onChange={this.props.handleChanges}
                />
              </div>
            ))}

            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Code postal"
                aria-label="Code postal"
                aria-describedby="basic-addon1"
                type="text"
                name="zip_code"
                value={this.props.zip_code}
                onChange={this.props.handleChanges}
              />
            </InputGroup>
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
            </label>
            <br />
            <button onClick={this.props.filterClick}>Go !</button>
          </Form>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Filters;
