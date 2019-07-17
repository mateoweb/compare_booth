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
              <div className="list-group">
                <div className="list-group-item">
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
                </div>
              </div>
            ))}

            <br />
            

              
            {["checkbox"].map(type => (
              <div className="list-group">
              <div className="list-group-item">
              <div key={`custom-inline-${type}`} className="mb-3">
                <Form.Check
                  custom
                  inline
                  label="Cabine Photo"
                  type={type}
                  id={`custom-inline-${type}-1`}
                  name={"cabinePhoto"}
                  value={this.props.cabinePhoto}
                  onChange={this.props.handleChanges}
                />
                <Form.Check
                  custom
                  inline
                  label="Borne Photo"
                  type={type}
                  id={`custom-inline-${type}-2`}
                  name="bornePhoto"
                  value={this.props.bornePhoto}
                  onChange={this.props.handleChanges}
                />
                <Form.Check
                  custom
                  inline
                  label="Helio Booth"
                  type={type}
                  id={`custom-inline-${type}-3`}
                  name="helioBooth"
                  value={this.props.helioBooth}
                  onChange={this.props.handleChanges}
                />
              </div>
              </div>
            </div>
            
            ))}
            <div className="list-group-item">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1"><span class="oi oi-map-marker"></span></InputGroup.Text>
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
            </div>

            <br />
            <button onClick={this.props.filterClick}>Go !</button>
          </Form>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Filters;
