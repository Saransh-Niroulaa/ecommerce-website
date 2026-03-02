import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';

interface ProductListProps {
  products: Product[];
  loading: boolean;
  addToCart: (product: Product) => void;
}

const ProductList = ({ products, loading, addToCart }: ProductListProps) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Books'];

  const filteredProducts = products.filter(p => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="content single-col">
      <section className="controls">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="category-nav">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`nav-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="product-section">
        <h2>{selectedCategory} Products</h2>
        {loading ? (
          <div className="loader">Loading products...</div>
        ) : (
          <div className="product-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <Link to={`/product/${product.id}`}>
                  <img 
                    src={`https://picsum.photos/seed/${product.id}/400/300`} 
                    alt={product.name} 
                    className="product-img"
                  />
                </Link>
                <div className="product-info">
                  <Link to={`/product/${product.id}`} className="product-name-link">
                    <h3>{product.name}</h3>
                  </Link>
                  <p className="desc">{product.description}</p>
                  <div className="product-footer">
                    <span className="price">${product.price}</span>
                    <button className="add-btn" onClick={() => addToCart(product)}>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {!loading && filteredProducts.length === 0 && (
          <div className="empty-state">No products found matching your search.</div>
        )}
      </section>
    </main>
  );
};

export default ProductList;
