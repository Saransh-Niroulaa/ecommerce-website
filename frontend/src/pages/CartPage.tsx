import { Link, useNavigate } from 'react-router-dom';
import type { CartItem } from '../types';

interface CartPageProps {
  cart: CartItem[];
  removeFromCart: (cartId: number) => void;
}

const CartPage = ({ cart, removeFromCart }: CartPageProps) => {
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + parseFloat(item.price as string), 0);

  return (
    <main className="cart-page">
      <div className="cart-header">
        <button onClick={() => navigate('/shop')} className="back-btn">Back to Shopping</button>
        <h2>Your Cart ({cart.length} items)</h2>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart-full">
          <h3>Your cart is empty.</h3>
          <p>Find something amazing to buy!</p>
          <Link to="/shop" className="shop-now-btn">Shop Now</Link>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-list">
            {cart.map((item) => (
              <div key={item.cartId} className="cart-item-full">
                <img src={`https://picsum.photos/seed/${item.id}/100/100`} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p className="category-tag">{item.category}</p>
                </div>
                <div className="cart-item-price">${item.price}</div>
                <button className="remove-btn-full" onClick={() => removeFromCart(item.cartId)}>Remove</button>
              </div>
            ))}
          </div>

          <aside className="cart-summary-sidebar">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span className="free-shipping">FREE</span>
            </div>
            <hr />
            <div className="summary-row total-final">
              <strong>Order Total</strong>
              <strong>${total.toFixed(2)}</strong>
            </div>
            
            <button className="checkout-btn-full" onClick={() => alert("Checkout flow coming soon!")}>
              Proceed to Checkout
            </button>
          </aside>
        </div>
      )}
    </main>
  );
};

export default CartPage;
