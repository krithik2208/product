import { useState } from 'react'
import HamburgerMenu from '../components/HamburgerMenu'
import ImageModal from '../components/ImageModal'
import './ProductPage.css'

function Product3Page() {
  const [modalImage, setModalImage] = useState(null)

  const galleryImages = [
    './images/product3image1.jpg',
    './images/product3image2.jpg',
    './images/product3image3.jpg',
    './images/product3image4.jpg',
  ]

  return (
    <div className="product-page">
      {modalImage && (
        <ImageModal src={modalImage.src} alt={modalImage.alt} onClose={() => setModalImage(null)} />
      )}
      
      <section id="product" className="section product-section">
        <div className="product-image">
          <img 
            src="./images/product3.jpg" 
            alt="Product 3" 
            onClick={() => setModalImage({ src: './images/product3.jpg', alt: 'Product 3' })}
          />
        </div>
        <div className="product-header">
          <span className="label">Collection 2026</span>
          <h1>Denim Oxford Shirt</h1>
          <p className="price">$69</p>
        </div>
      </section>

      <section id="description" className="section">
        <h2>Description</h2>
        <p>Make a statement with our Denim Oxford Shirt, a modern classic that bridges the gap between casual and refined. Crafted from heavyweight oxford cloth with a denim-inspired texture, this shirt features a slightly boxy silhouette and dropped shoulders for an effortlessly cool look. Perfect for layering or wearing on its own, it develops unique character with every wash.</p>
      </section>

      <section id="specifications" className="section">
        <h2>Specifications</h2>
        <div className="specs-grid">
          <div className="spec-item">
            <span className="spec-label">Material</span>
            <span className="spec-value">100% Cotton Oxford</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Fit</span>
            <span className="spec-value">Boxy Relaxed</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Care</span>
            <span className="spec-value">Cold Wash Only</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Origin</span>
            <span className="spec-value">Made in Japan</span>
          </div>
        </div>
      </section>

      <section id="images" className="section">
        <h2>Images</h2>
        <div className="images-grid">
          {galleryImages.map((src, index) => (
            <div className="gallery-image" key={index}>
              <img 
                src={src} 
                alt={`Product 3 - View ${index + 1}`}
                onClick={() => setModalImage({ src, alt: `Product 3 - View ${index + 1}` })}
              />
            </div>
          ))}
        </div>
      </section>

      <HamburgerMenu />
    </div>
  )
}

export default Product3Page
