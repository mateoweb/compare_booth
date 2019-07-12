import React, { Component } from 'react'
import dataShop from '../dataShop'

const data = dataShop;



class Shop extends Component {
    state = {  }


    render() { 
        console.log(data)
        return ( 
            <div>
          
            { dataShop.map((detail, index)=>{
                return <h1 key={index}>{detail.Nom}</h1>                
            }) }
            </div>
         );
    }
}
 
export default Shop;