import { getElementError } from '@testing-library/react';
import React, { Component } from 'react'
import { Card, Button} from 'react-bootstrap';
import "./Cards.css";
import { useState } from 'react';


function Cards (props) {

    console.log("Props",props.props.cloth);
    const [price, setPrice] = useState(0);

   function addtoCart(e){
        console.log("e===",e.target.value);
        var Itemprice= e.target.value;
        setPrice(oldPrice=>[...oldPrice,Itemprice]);
        
    }

        return (
            <div>

                <Card className="card-border" style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{props.props.cloth}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Card.Subtitle id="price" className="mb-2 text-muted">{props.props.price}</Card.Subtitle>
        <Button variant="primary" value={props.props.price} onClick={addtoCart}>Add to Cart</Button>
      </Card.Body>
    </Card>
    
   

    <div>
            <h2>Cart</h2>
            <div>Item:</div>
            <div class="">Total Cart Price:{price}
            </div>

    </div>
            </div>
        )

    
    
}

export default Cards
