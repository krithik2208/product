import { useState } from 'react'
import HamburgerMenu from '../components/HamburgerMenu'
import ImageModal from '../components/ImageModal'
import './ProductPage.css'

function Product1Page() {
  const [modalImage, setModalImage] = useState(null)

  const galleryImages = [
    './images/product1image1.jpg',
    './images/product1image2.jpg',
    './images/product1image3.jpg',
    './images/product1image4.jpg',
  ]

  return (
    <div className="product-page">
      {modalImage && (
        <ImageModal src={modalImage.src} alt={modalImage.alt} onClose={() => setModalImage(null)} />
      )}
      
      <section id="product" className="section product-section">
        <div className="product-image">
          <img 
            src="./images/product1.jpg" 
            alt="Product 1" 
            onClick={() => setModalImage({ src: './images/product1.jpg', alt: 'Product 1' })}
          />
        </div>
        <div className="product-header">
          <span className="label">Collection 2026</span>
          <h1>Premium Cotton Shirt</h1>
          <p className="price">$49</p>
        </div>
      </section>

      <section id="description" className="section">
        <h2>Description</h2>
        <p>Experience ultimate comfort with our Premium Cotton Shirt, crafted from 100% organic cotton for breathability and softness. This versatile shirt features a classic fit with a modern twist, perfect for both casual outings and semi-formal occasions. The lightweight fabric keeps you cool throughout the day while maintaining its shape wash after wash. Pre-washed for extra softness, this shirt gets better with every wear.</p>
      </section>

      <section id="specifications" className="section">
        <h2>Specifications</h2>
        <div className="specs-grid">
          <div className="spec-item">
            <span className="spec-label">Material</span>
            <span className="spec-value">100% Organic Cotton</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Fit</span>
            <span className="spec-value">Classic Regular</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Care</span>
            <span className="spec-value">Machine Washable</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Origin</span>
            <span className="spec-value">Made in Portugal</span>
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
                alt={`Product 1 - View ${index + 1}`}
                onClick={() => setModalImage({ src, alt: `Product 1 - View ${index + 1}` })}
              />
            </div>
          ))}
        </div>
      </section>

      <HamburgerMenu product="1" />
    </div>
  )
}

export default Product1Page
