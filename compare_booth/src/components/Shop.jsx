import React, { Component } from "react";

//import Filters from './Filters'

class Shop extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.filteredResults.map((detail, index) => {
          return <div className="list-group"key={index}>
          <div className="list-group-item">
          <h4>{detail.Nom}</h4>
          <p>Je suis un résumé de shop</p>
          </div>     
          </div>;        
        })}
        
      </React.Fragment>
    );
  }
}

export default Shop;

//   { Filters.map((detail, index)=>{
//   return <h1 key={index}>{detail.Nom}</h1>
//   }) }
