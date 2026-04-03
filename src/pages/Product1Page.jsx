import HamburgerMenu from '../components/HamburgerMenu'
import './ProductPage.css'

function Product1Page() {
  return (
    <div className="product-page">
      <section id="product" className="section product-section">
        <div className="product-images">
          <img src="./images/product1.jpg" alt="Product 1 - Front" />
          <img src="./images/product1.jpg" alt="Product 1 - Back" />
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
            <span className="spec-value">100% Organic Cotton</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Weight</span>
            <span className="spec-value">140 GSM</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Thread</span>
            <span className="spec-value">Recycled Polyester</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Buttons</span>
            <span className="spec-value">Corozo Nut</span>
          </div>
        </div>
      </section>

      <section id="manufacturing" className="section">
        <h2>Manufacturing Details</h2>
        <p>Ethically crafted in certified workshops in Porto, Portugal. Each shirt is cut and sewn by skilled artisans with over 10 years of experience. Fair wages and safe working conditions guaranteed.</p>
        <div className="specs-grid" style={{ marginTop: '20px' }}>
          <div className="spec-item">
            <span className="spec-label">Factory</span>
            <span className="spec-value">Artisan Atelier, Porto</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Workers</span>
            <span className="spec-value">Family-Owned Workshop</span>
          </div>
        </div>
      </section>

      <section id="environmental" className="section">
        <h2>Environmental Highlights</h2>
        <p>Made with GOTS-certified organic cotton grown without pesticides. Water-based dyes used throughout production. Carbon footprint offset through verified reforestation projects.</p>
        <div className="specs-grid" style={{ marginTop: '20px' }}>
          <div className="spec-item">
            <span className="spec-label">Water Saved</span>
            <span className="spec-value">70% vs Conventional</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Carbon Offset</span>
            <span className="spec-value">100%</span>
          </div>
        </div>
      </section>

      <section id="durability" className="section">
        <h2>Durability & Care</h2>
        <div className="specs-grid">
          <div className="spec-item">
            <span className="spec-label">Lifespan</span>
            <span className="spec-value">5+ Years</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Wash Temp</span>
            <span className="spec-value">30°C Cold</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Bleach</span>
            <span className="spec-value">Do Not Bleach</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Iron</span>
            <span className="spec-value">Medium Heat</span>
          </div>
        </div>
      </section>

      <section id="endoflife" className="section">
        <h2>End of Life Guidance</h2>
        <p>When your shirt reaches the end of its life, please recycle. The natural cotton fibers can be composted or recycled into insulation materials. Remove buttons before composting.</p>
        <div className="specs-grid" style={{ marginTop: '20px' }}>
          <div className="spec-item">
            <span className="spec-label">Recyclable</span>
            <span className="spec-value">Yes - Textile Recycling</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Compostable</span>
            <span className="spec-value">Yes - After Button Removal</span>
          </div>
        </div>
      </section>

      <section id="certification" className="section">
        <h2>Certification & Compliance</h2>
        <div className="specs-grid">
          <div className="spec-item">
            <span className="spec-label">Organic</span>
            <span className="spec-value">GOTS Certified</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Fair Trade</span>
            <span className="spec-value">Fair Wear Foundation</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Testing</span>
            <span className="spec-value">OEKO-TEX Standard 100</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Plastic-Free</span>
            <span className="spec-value">100% Natural Materials</span>
          </div>
        </div>
      </section>

      <HamburgerMenu />
    </div>
  )
}

export default Product1Page
