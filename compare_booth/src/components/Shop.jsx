import React, { Component } from "react";

import StarRatings from 'react-star-ratings';
import Button from "react-bootstrap/Button";


//import Filters from './Filters'

class Shop extends Component {
  render() {
    
    return (
      <React.Fragment>
        {this.props.filteredResults.map((detail, index) => {
          return <div className="list-group"key={index}>
          <div className="list-group-item">
          <h4>{detail.Nom}</h4>
          <h3>A partir de {detail.startPrice}€</h3>
          <StarRatings
        rating={5}
        starDimension="20px"
        starSpacing="5px"
        starRatedColor="rgb(255,215,0)"
      />
          
          <p>{detail.resume}</p>
          <Button>Plus de détails</Button>
          </div>     
          </div>;        
        })}
        
      </React.Fragment>
    );
  }
}

export default Shop;

