import React, { Component } from 'react'; 
import { ListGroupItem, Button, Row, Col } from 'react-bootstrap'; 

class ProductItem extends Component { 
  render() { 
    const { product, onIncrement, onDecrement, onDelete, addToCart, cart, theme } = this.props; 
    const isInCart = cart.find(item => item.id === product.id);

    return ( 
      <ListGroupItem variant={theme}>
        <Row className="align-items-center"> 
          <Col md={4}>{product.name}</Col> 
          <Col md={2}>Price: {product.price}$</Col> 
          <Col md={2}>
            {isInCart ? (
              <>
                <Button  
                  variant="success"  
                  size="sm"  
                  onClick={() => onIncrement(product.id)} 
                > 
                  + 
                </Button> 
                <span className="mx-2">{isInCart.items}</span> 
                <Button  
                  variant="warning"  
                  size="sm"  
                  onClick={() => onDecrement(product.id)} 
                > 
                  - 
                </Button> 
              </>
            ) : (
              <Button 
                variant="primary" 
                onClick={() => addToCart(product)} 
              >
                Add to Cart
              </Button>
            )}
          </Col> 
          <Col md={2}>Total: {isInCart ? product.price * isInCart.items : 0}$</Col> 
          <Col md={2}> 
            {isInCart && (
              <Button  
                variant="danger"  
                onClick={() => onDelete(product.id)} 
              > 
                Delete 
              </Button> 
            )}
          </Col> 
        </Row> 
      </ListGroupItem> 
    ); 
  } 
}

export default ProductItem;
