import React, { Component } from 'react'; 
import { ListGroup } from 'react-bootstrap'; 
import ProductItem from './ProductItem'; 

class ProductList extends Component { 
  render() { 
    const { products, cart, handleIncrement, handleDecrement, handleDelete, addToCart, theme } = this.props; 
    return ( 
      <ListGroup> 
        {products.map(product => (
          <ProductItem  
            key={product.id} 
            product={product} 
            onIncrement={handleIncrement} 
            onDecrement={handleDecrement} 
            onDelete={handleDelete} 
            addToCart={addToCart} 
            cart={cart} 
            theme={theme} 
          /> 
        ))} 
      </ListGroup> 
    ); 
  } 
}

export default ProductList;
