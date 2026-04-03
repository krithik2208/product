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
        <p>Make a statement with our Denim Oxford Shirt, a modern classic that bridges the gap between casual and refined. Crafted from heavyweight oxford cloth with a denim-inspired texture.</p>
      </section>

      <section id="specifications" className="section">
        <h2>Specifications</h2>
        <div className="specs-grid">
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
          <div className="spec-item">
            <span className="spec-label">Sizes</span>
            <span className="spec-value">XS - XXL</span>
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

      <section id="material" className="section">
        <h2>Material Composition</h2>
        <div className="specs-grid">
          <div className="spec-item">
            <span className="spec-label">Fabric</span>
            <span className="spec-value">100% Cotton Oxford</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Weight</span>
            <span className="spec-value">200 GSM Heavy</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Thread</span>
            <span className="spec-value">Triple-Stranded Core</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Details</span>
            <span className="spec-value">Branded Copper Rivets</span>
          </div>
        </div>
      </section>

      <section id="manufacturing" className="section">
        <h2>Manufacturing Details</h2>
        <p>Produced in Kojima, Japan - the birthplace of Japanese denim. Each shirt is piece-dyed using traditional rope-dyeing methods inherited from the selvedge denim industry. Double-stitched seams ensure lasting durability.</p>
        <div className="specs-grid" style={{ marginTop: '20px' }}>
          <div className="spec-item">
            <span className="spec-label">Factory</span>
            <span className="spec-value">Denim Works Kojima</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Workers</span>
            <span className="spec-value">Master Craftsmen</span>
          </div>
        </div>
      </section>

      <section id="environmental" className="section">
        <h2>Environmental Highlights</h2>
        <p>Indigo dyed using traditional plant-based pigments. Wastewater treated on-site before release. Solar-powered manufacturing facility reduces grid dependency by 60%.</p>
        <div className="specs-grid" style={{ marginTop: '20px' }}>
          <div className="spec-item">
            <span className="spec-label">Dye</span>
            <span className="spec-value">Natural Indigo</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Energy</span>
            <span className="spec-value">60% Solar Powered</span>
          </div>
        </div>
      </section>

      <section id="durability" className="section">
        <h2>Durability & Care</h2>
        <div className="specs-grid">
          <div className="spec-item">
            <span className="spec-label">Lifespan</span>
            <span className="spec-value">10+ Years</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Wash Temp</span>
            <span className="spec-value">Cold Wash Only</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Bleach</span>
            <span className="spec-value">Never</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Iron</span>
            <span className="spec-value">Medium-High Heat</span>
          </div>
        </div>
      </section>

      <section id="endoflife" className="section">
        <h2>End of Life Guidance</h2>
        <p>Heavyweight cotton can be upcycled into bags, patches, or used for repairs. When truly worn out, the entire shirt can be industrially composted. Copper rivets should be removed and recycled separately.</p>
        <div className="specs-grid" style={{ marginTop: '20px' }}>
          <div className="spec-item">
            <span className="spec-label">Recyclable</span>
            <span className="spec-value">Yes - Upcycling Ideal</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Compostable</span>
            <span className="spec-value">Yes - Remove Rivets</span>
          </div>
        </div>
      </section>

      <section id="certification" className="section">
        <h2>Certification & Compliance</h2>
        <div className="specs-grid">
          <div className="spec-item">
            <span className="spec-label">Made in Japan</span>
            <span className="spec-value">Authentic Kojima Origin</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Denim</span>
            <span className="spec-value">Japan Blue Certified</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Testing</span>
            <span className="spec-value">OEKO-TEX Standard 100</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Quality</span>
            <span className="spec-value">Lifetime Guarantee</span>
          </div>
        </div>
      </section>

      <HamburgerMenu />
    </div>
  )
}

export default Product3Page
