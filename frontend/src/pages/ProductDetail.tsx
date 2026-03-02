import { useNavigate, useParams } from 'react-router-dom';
import type { Product } from '../types';

interface ProductDetailProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

const ProductDetail = ({ products, addToCart }: ProductDetailProps) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return <div className="loader">Product not found.</div>;
  }

  return (
    <main className="detail-page">
      <button onClick={() => navigate(-1)} className="back-btn">Back</button>
      <div className="detail-container">
        <div className="detail-image">
          <img src={`https://picsum.photos/seed/${product.id}/600/400`} alt={product.name} />
        </div>
        <div className="detail-info">
          <span className="detail-category">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="detail-price">${product.price}</p>
          <div className="detail-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
          <div className="detail-meta">
            <p>Availability: {product.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
          </div>
          <button className="checkout-btn-full" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
