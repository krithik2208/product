import { useParams, useNavigate } from 'react-router-dom'
import { products } from '../data/products'

function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div>
        <button className="back-btn" onClick={() => navigate('/')}>
          ←
        </button>
        <p style={{ padding: 20 }}>Product not found</p>
      </div>
    )
  }

  return (
    <div className="product-detail">
      <button className="back-btn" onClick={() => navigate('/')}>
        ←
      </button>
      <div className="product-image-container">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <span className="material-label">Collection 2026</span>
        <h2>{product.name}</h2>
        <p className="product-price">{product.price}</p>
        <p className="product-description">{product.description}</p>
      </div>
    </div>
  )
}

export default ProductDetailPage
