import React, { Component } from 'react'
import dataShop from '../dataShop'

class Shop extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            { dataShop.map((detail, index)=>{
                return <h1></h1>
            }) }
            </div>
         );
    }
}
 
export default Shop;