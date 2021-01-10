import React from 'react'
import Cards from "./Cards";
function shopping() {
   
    const value= {cloth:"Shoe",price:200}
    const shirt= {cloth:"Shirt",price:200}
    const pant= {cloth:"Pant",price:300}
    return (
        <div>
            <h1>Hello from shopping cart</h1>
            <Cards props={value}/>
            <Cards props={shirt}/>
            <Cards props={pant}/>
            
        </div>
    )
}

export default shopping
