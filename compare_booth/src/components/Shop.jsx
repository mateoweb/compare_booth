import React, { Component } from "react";
//import Filters from './Filters'

class Shop extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.filteredResults.map((detail, index) => {
          return <div key={index}>
          <h3 >{detail.Nom}</h3><br/>
          <p >{detail.id}</p>
          
          
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
