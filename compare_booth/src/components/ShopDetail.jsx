import React, { Component } from 'react'

import StarRatings from 'react-star-ratings';

class ShopDetail extends Component {
    render() {
        
        
        return ( <div>
            {this.props.filteredResults.map((detail, index) => {
               
                return  <React.Fragment key={index}>
                    <h1>{detail.name}</h1><br/>
                <StarRatings
            rating={5}
            starDimension="8x"
            starSpacing="5px"
            starRatedColor="rgb(255,215,0)"
          />    
                <h2>Présentation</h2>
                <p>{detail.resume}</p>
                <a href="#top">{detail.website}</a>
                </React.Fragment>
            })}
            
        </div> );
    }
}
 
export default ShopDetail;