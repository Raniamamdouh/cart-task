import React, { Component } from 'react'; 
import { Container, Button, Navbar, Nav, Badge } from 'react-bootstrap'; 
import { FaShoppingCart, FaMoon, FaSun } from 'react-icons/fa'; // إضافة أيقونات الثيم والسلة
import NavbarComponent from './components/NavbarComponent'; 
import ProductList from './components/ProductList'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

class App extends Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      products: [ 
        { id: 1, name: 'shiipcy', price: 100, items: 1 }, 
        { id: 2, name: 'pepsi', price: 200, items: 1 }, 
        { id: 3, name: 'cigaretes', price: 300, items: 1 }, 
        { id: 4, name: 'kranshy', price: 400, items: 1 }, 
        { id: 5, name: 'molto', price: 500, items: 1 }, 
      ], 
      cart: [], 
      theme: 'light', 
    }; 
  }

  addToCart = (product) => { 
    const existingProduct = this.state.cart.find(item => item.id === product.id); 
    if (!existingProduct) { 
      this.setState(prevState => ({ 
        cart: [...prevState.cart, { ...product }] // No need to add items here, just add product
      })); 
    } 
  };

  handleIncrement = (productId) => { 
    this.setState(prevState => ({ 
      cart: prevState.cart.map(item => 
        item.id === productId ? { ...item, items: item.items + 1 } : item 
      ) 
    })); 
  };

  handleDecrement = (productId) => { 
    this.setState(prevState => ({ 
      cart: prevState.cart.map(item => 
        item.id === productId ? { ...item, items: Math.max(item.items - 1, 1) } : item 
      ) 
    })); 
  };

  handleDelete = (productId) => { 
    this.setState(prevState => ({ 
      cart: prevState.cart.filter(item => item.id !== productId) 
    })); 
  };

  resetCart = () => {
    this.setState(prevState => ({
      cart: prevState.cart.map(item => ({
        ...item,
        items: 1 // Reset quantity to 1 for all items in cart
      }))
    }));
  };

  emptyCart = () => {
    this.setState({ cart: [] }); // Empty the entire cart
  };

  toggleTheme = () => { 
    this.setState(prevState => ({ 
      theme: prevState.theme === 'light' ? 'dark' : 'light' 
    })); 
  };

  render() { 
    const { cart, theme } = this.state; 
    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.items), 0);

    return ( 
      <div className={`bg-${theme} min-vh-100`}> 
        <NavbarComponent
  theme={theme}
  toggleTheme={this.toggleTheme}
  cart={cart}
  emptyCart={this.emptyCart}
  resetCart={this.resetCart}
/>

        <Container className="py-4"> 
          <ProductList  
            products={this.state.products} 
            cart={cart} 
            handleIncrement={this.handleIncrement} 
            handleDecrement={this.handleDecrement} 
            handleDelete={this.handleDelete} 
            addToCart={this.addToCart} 
            theme={theme} 
          />

          <div className={`text-${theme === 'light' ? 'dark' : 'light'} mt-4 d-flex justify-content-between`}>
            <h3>Total Amount: {totalAmount}$</h3> 
          </div>
        </Container>
      </div>
    );
  } 
}

export default App;
