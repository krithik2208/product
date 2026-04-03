import SwipeableImage from '../components/SwipeableImage'
import HamburgerMenu from '../components/HamburgerMenu'
import './ProductPage.css'

function Product2Page() {
  const images = ['./images/product2.jpg', './images/product2.jpg']

  return (
    <div className="product-page">
      <section id="product" className="section product-section">
        <SwipeableImage images={images} alt="Product 2" />
        <div className="product-header">
          <span className="label">Collection 2026</span>
          <h1>Linen Blend Shirt</h1>
          <p className="price">$59</p>
        </div>
      </section>

      <section id="description" className="section">
        <h2>Description</h2>
        <p>Elevate your summer wardrobe with our Linen Blend Shirt, the perfect balance of style and comfort. Made from a premium linen-cotton blend, this shirt offers the breathability of linen with the softness of cotton.</p>
      </section>

      <section id="specifications" className="section">
        <h2>Specifications</h2>
        <div className="specs-grid">
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
          <div className="spec-item">
            <span className="spec-label">Sizes</span>
            <span className="spec-value">XS - XXL</span>
          </div>
        </div>
      </section>

      <section id="material" className="section">
        <h2>Material Composition</h2>
        <div className="specs-grid">
          <div className="spec-item">
            <span className="spec-label">Fabric</span>
            <span className="spec-value">70% Linen, 30% Cotton</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Weight</span>
            <span className="spec-value">160 GSM</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Thread</span>
            <span className="spec-value">Italian Spun Silk</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Buttons</span>
            <span className="spec-value">Mother of Pearl</span>
          </div>
        </div>
      </section>

      <section id="manufacturing" className="section">
        <h2>Manufacturing Details</h2>
        <p>Handcrafted in a third-generation family workshop in Prato, Italy. Each shirt undergoes 12 quality checkpoints before shipping. The linen is woven on traditional shuttle looms preserving centuries-old textile heritage.</p>
        <div className="specs-grid" style={{ marginTop: '20px' }}>
          <div className="spec-item">
            <span className="spec-label">Factory</span>
            <span className="spec-value">Tessitura Familia, Prato</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Workers</span>
            <span className="spec-value">Traditional Artisans</span>
          </div>
        </div>
      </section>

      <section id="environmental" className="section">
        <h2>Environmental Highlights</h2>
        <p>European Flax-certified linen grown without irrigation. Natural dew-retted fibers reduce chemical processing. Zero-waste cutting pattern maximizes fabric utilization to 98%.</p>
        <div className="specs-grid" style={{ marginTop: '20px' }}>
          <div className="spec-item">
            <span className="spec-label">Irrigation</span>
            <span className="spec-value">Rain-Fed Only</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Waste Diverted</span>
            <span className="spec-value">98%</span>
          </div>
        </div>
      </section>

      <section id="durability" className="section">
        <h2>Durability & Care</h2>
        <div className="specs-grid">
          <div className="spec-item">
            <span className="spec-label">Lifespan</span>
            <span className="spec-value">7+ Years</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Wash Temp</span>
            <span className="spec-value">40°C Gentle</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Bleach</span>
            <span className="spec-value">Do Not Bleach</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Iron</span>
            <span className="spec-value">High Heat While Damp</span>
          </div>
        </div>
      </section>

      <section id="endoflife" className="section">
        <h2>End of Life Guidance</h2>
        <p>Linen and cotton fibers are fully biodegradable. The shirt can be cut into cleaning rags, used for craft projects, or composted at home. Mother of pearl buttons can be reused or recycled separately.</p>
        <div className="specs-grid" style={{ marginTop: '20px' }}>
          <div className="spec-item">
            <span className="spec-label">Recyclable</span>
            <span className="spec-value">Yes - Multiple Uses</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Compostable</span>
            <span className="spec-value">Yes - 6 Months</span>
          </div>
        </div>
      </section>

      <section id="certification" className="section">
        <h2>Certification & Compliance</h2>
        <div className="specs-grid">
          <div className="spec-item">
            <span className="spec-label">Linen</span>
            <span className="spec-value">European Flax Certified</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Made in Italy</span>
            <span className="spec-value">100% Italian Origin</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Testing</span>
            <span className="spec-value">OEKO-TEX Standard 100</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Supply Chain</span>
            <span className="spec-value">Full Traceability</span>
          </div>
        </div>
      </section>

      <HamburgerMenu />
    </div>
  )
}

export default Product2Page
