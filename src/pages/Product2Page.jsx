import { useState } from 'react'
import HamburgerMenu from '../components/HamburgerMenu'
import ImageModal from '../components/ImageModal'
import './ProductPage.css'

function Product2Page() {
  const [modalImage, setModalImage] = useState(null)

  const galleryImages = [
    './images/product2image1.jpg',
    './images/product2image2.jpg',
    './images/product2image3.jpg',
    './images/product2image4.jpg',
  ]

  return (
    <div className="product-page">
      {modalImage && (
        <ImageModal src={modalImage.src} alt={modalImage.alt} onClose={() => setModalImage(null)} />
      )}
      
      <section id="product" className="section product-section">
        <div className="product-image">
          <img 
            src="./images/product2.jpg" 
            alt="Product 2" 
            onClick={() => setModalImage({ src: './images/product2.jpg', alt: 'Product 2' })}
          />
        </div>
        <div className="product-header">
          <span className="label">Collection 2026</span>
          <h1>Linen Blend Shirt</h1>
          <p className="price">$59</p>
        </div>
      </section>

      <section id="description" className="section">
        <h2>Description</h2>
        <p>Elevate your summer wardrobe with our Linen Blend Shirt, the perfect balance of style and comfort. Made from a premium linen-cotton blend, this shirt offers the breathability of linen with the softness of cotton. The relaxed fit and natural texture make it ideal for warm weather, beach days, or casual brunches. Features mother-of-pearl buttons and a curved hem for a refined look.</p>
      </section>

      <section id="specifications" className="section">
        <h2>Specifications</h2>
        <div className="specs-grid">
          <div className="spec-item">
            <span className="spec-label">Material</span>
            <span className="spec-value">70% Linen, 30% Cotton</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Fit</span>
            <span className="spec-value">Relaxed Comfort</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Care</span>
            <span className="spec-value">Gentle Cycle</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Origin</span>
            <span className="spec-value">Made in Italy</span>
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
                alt={`Product 2 - View ${index + 1}`}
                onClick={() => setModalImage({ src, alt: `Product 2 - View ${index + 1}` })}
              />
            </div>
          ))}
        </div>
      </section>

      <HamburgerMenu />
    </div>
  )
}

export default Product2Page
