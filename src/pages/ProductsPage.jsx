import { Link } from 'react-router-dom'
import { products } from '../data/products'

function ProductsPage() {
  return (
    <>
      <header>
        <h1>Fashion Collection</h1>
      </header>
      <main className="products-grid">
        {products.map(product => (
          <Link 
            key={product.id} 
            to={`/product/${product.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="product-card">
              <img 
                src={product.image} 
                alt={product.name}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="product-card-placeholder" style={{display: 'none'}}>
                No Image
              </div>
              <div className="product-card-overlay">
                <div className="product-card-info">
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </main>
    </>
  )
}

export default ProductsPage
