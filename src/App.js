import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

//import Shopping from "./Shopping";
import { Card, Button} from 'react-bootstrap';

const Page_Product="products";
const Page_Cart="cart";
function App() {
  const [cart, setCart]=useState([]);
  const [page, setPage]=useState(Page_Product);


  const[products]= useState([
    {
      name:"Shirt",
      price:"500",
      image:"https://images.freeimages.com/images/large-previews/56d/shirt-collars-3-1418719.jpg",
    },
    {
      name:"Pant",
      price:"1000",
      image:"https://images.freeimages.com/images/large-previews/728/jeans-1421398.jpg",
    },
    {
      name:"Hat",
      price:"300",
      image:"https://images.freeimages.com/images/large-previews/d91/hat-1418845.jpg",
    },
    {
      name:"gloves",
      price:"200",
      image:"https://images.freeimages.com/images/large-previews/76d/gloves-1240773.jpg",
    },
    {
      name:"suit",
      price:"2000",
      image:"https://images.freeimages.com/images/large-previews/177/business-clothes2-1545822.jpg",
    },
    {
      name:"flipflops",
      price:"1200",
      image:"https://images.freeimages.com/images/large-previews/730/my-shoes-1581388.jpg",
    }
  ]);

  const addtoCart=(product)=>{
    setCart([...cart,{...product}])
  };

  const navigateTo=(nextPage)=>{
    setPage(nextPage);
  };
  const remove=(productToRemove)=>{
    setCart(cart.filter(product=> product !==productToRemove))
  }

    const showProducts=()=>(
      <>
      <h2>Products</h2>
      <div class="products">
{products.map((product,index)=>(
  <div className="product">
  <Card className="card-border" key={index} style={{ width: '18rem' }}>
  <Card.Img variant="top" class="product-img" src={product.image} /> 
  <Card.Body>
    <Card.Title>{product.name}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Subtitle id="price" className="mb-2 text-muted">{product.price}</Card.Subtitle>
    <Button variant="primary" onClick={()=>addtoCart(product) }>Add to Cart</Button>
  </Card.Body>
</Card>
</div>
))}
</div>
      </>
    )

    const showCarts=()=>(
      <>
      <h2>Carts</h2>
      <div className="products" >
{cart.map((product,index)=>(
  <div className="product">
  <Card className="card-border" key={index} style={{ width: '18rem' }}>
   
   <Card.Img variant="top" class="product-img"src={product.image} /> 
  <Card.Body>
    <Card.Title>{product.name}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Subtitle id="price" className="mb-2 text-muted">{product.price}</Card.Subtitle> 
    <Button variant="primary" onClick={()=>remove(product) }>Remove</Button>
  </Card.Body>
</Card>
</div>
))}
</div>
      </>
    )
  return (
    <div className="App">
      

             {page === Page_Product && showProducts()}
     
      <h1><button onClick={()=>navigateTo(Page_Cart)}>Go to Cart:({cart.length})</button>
      
      <button onClick={()=>navigateTo(Page_Product)}>View Products</button>
      </h1>
      {page === Page_Cart && showCarts()}
    </div>
  );
}

export default App;
