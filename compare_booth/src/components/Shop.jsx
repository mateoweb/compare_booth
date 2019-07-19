import React, { Component } from "react";

import StarRatings from 'react-star-ratings';
import Button from "react-bootstrap/Button";


//import Filters from './Filters'

class Shop extends Component {
  render() {
    
    return (
      <React.Fragment>
        {this.props.filteredResults.map((detail, index) => {
          return <div key={index} className="list-group">
          <div  className="list-group-item" >
          <h3>{detail.Nom}</h3>
          <h4>A partir de {detail.startPrice}€</h4>
          <StarRatings
        rating={5}
        starDimension="20px"
        starSpacing="5px"
        starRatedColor="rgb(255,215,0)"
      />
          
          <p>{detail.resume}</p>
          <Button onClick={this.props.handleShopClick}>Plus de détails</Button>
          </div>     
          </div>;        
        })}
        
      </React.Fragment>
    );
  }
}

export default Shop;

