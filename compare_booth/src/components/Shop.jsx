import React, { Component } from 'react'


class Shop extends Component {
    render() { 
        return (<React.Fragment>
            <div><h1>{this.props.Nom}</h1></div>
        
            </React.Fragment>  );
    }
}
 
export default Shop;


//{ Filters.map((detail, index)=>{
  //  return <h1 key={index}>{detail.Nom}</h1>                
//    }) }