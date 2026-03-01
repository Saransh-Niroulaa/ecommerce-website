import { Link } from 'react-router-dom';

interface NavbarProps {
  cartCount: number;
  cartTotal: number;
  theme: string;
  toggleTheme: () => void;
}

const Navbar = ({ cartCount, cartTotal, theme, toggleTheme }: NavbarProps) => {
  return (
    <header className="navbar">
      <Link to="/" className="logo">E-commerce Store</Link>
      
      <div className="nav-actions">
        <Link to="/shop" className="nav-link-text">Shop</Link>
        
        {/* Simple Theme Toggle */}
        <label className="simple-toggle" title="Toggle theme">
          <input 
            type="checkbox" 
            onChange={toggleTheme} 
            checked={theme === 'light'} 
          />
          <span className="slider"></span>
        </label>
        
        <Link to="/cart" className="cart-summary-btn">
          Cart ({cartCount}) - ${cartTotal.toFixed(2)}
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
