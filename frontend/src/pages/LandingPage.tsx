import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <main className="landing-page">
      <section className="hero">
        <h1>Welcome to E-commerce Store</h1>
        <p className="hero-text">
          Experience the future of online shopping. We provide a curated selection 
          of premium products across Electronics, Fashion, Home, and Books. 
          Simple, fast, and secure.
        </p>
        <div className="hero-actions">
          <Link to="/shop" className="primary-btn">Start Shopping</Link>
        </div>
      </section>
      
      <section className="features">
        <div className="feature-card">
          <h3>Quality Products</h3>
          <p>Hand-picked items from the best brands in the world.</p>
        </div>
        <div className="feature-card">
          <h3>Fast Delivery</h3>
          <p>Free shipping on all orders with real-time tracking.</p>
        </div>
        <div className="feature-card">
          <h3>24/7 Support</h3>
          <p>Our team is always here to help you with your purchase.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default LandingPage;
