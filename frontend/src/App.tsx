import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Types
import type { Product, CartItem } from './types';

// Components
import Navbar from './components/Navbar';

// Pages
import LandingPage from './pages/LandingPage';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');

  // Theme synchronization with body class
  useEffect(() => {
    document.body.className = `${theme}-mode`;
  }, [theme]);

  // Fetch products from Django API
  useEffect(() => {
    fetch('http://localhost:8000/api/products/')
      .then(res => res.json())
      .then((data: Product[]) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  }, []);

  const addToCart = (product: Product) => {
    // using Date.now() as a quick unique id so users can add multiple of the same product
    const newCartItem: CartItem = { ...product, cartId: Date.now() };
    setCart([...cart, newCartItem]);
  };

  const removeFromCart = (cartId: number) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  const total = cart.reduce((sum, item) => sum + parseFloat(item.price as string), 0);

  return (
    <Router>
      <div className={`ecommerce-app ${theme}-mode`}>
        <Navbar 
          cartCount={cart.length} 
          cartTotal={total} 
          theme={theme} 
          toggleTheme={toggleTheme} 
        />
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route 
            path="/shop" 
            element={<ProductList products={products} loading={loading} addToCart={addToCart} />} 
          />
          <Route 
            path="/product/:id" 
            element={<ProductDetail products={products} addToCart={addToCart} />} 
          />
          <Route 
            path="/cart" 
            element={<CartPage cart={cart} removeFromCart={removeFromCart} />} 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
