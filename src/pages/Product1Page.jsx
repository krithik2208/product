import SwipeableImage from '../components/SwipeableImage'
import HamburgerMenu from '../components/HamburgerMenu'
import './ProductPage.css'

function Product1Page() {
  const images = ['./images/product1.jpg', './images/product1back.jpg']

  return (
    <div className="product-page">
      <section id="product" className="section product-section">
        <SwipeableImage images={images} alt="Product 1" />
        <div className="product-header">
          <h1>Wrogn EcoWeave Dobby Shirt | White</h1>
        </div>
      </section>

      <section id="description" className="section">
        <h2>Description</h2>
        <p className="description-text">A consciously crafted long-sleeved shirt with a regular collar, made from a cotton and recycled polyester blend sourced from post-consumer PET bottles. The open dobby weave enhances breathability while maintaining a refined texture and lasting durability. Produced using Azo-free dyes and low-impact finishing processes, the garment reflects a commitment to reduced environmental impact.</p>
        <p className="description-text">Finished with thoughtfully selected eco-friendly components including wooden buttons, cotton sewing thread, paper-based hangtags, and recycled packaging - this piece embodies a modern approach to responsible fashion without compromising on style or comfort.</p>
      </section>

      <section id="specifications" className="section">
        <h2>Specifications</h2>
        <div className="specs-grid">
          <div className="spec-item">
            <span className="spec-label">Style Code</span>
            <span className="spec-value">WRSH0001SUS</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Brand</span>
            <span className="spec-value">Wrogn</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Fit</span>
            <span className="spec-value">Slim Fit</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Origin</span>
            <span className="spec-value">India</span>
          </div>
        </div>
      </section>

      <section id="material" className="section">
        <h2>Material Composition</h2>
        
        <h3 className="subsection-title">Fabrics</h3>
        <div className="specs-grid">
          <div className="spec-item">
            <span className="spec-label">Fabric Composition</span>
            <span className="spec-value">52% Cotton<br/>48% Recycled Polyester</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Weave</span>
            <span className="spec-value">20s*20s<br/>Open Dobby</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Sourced From</span>
            <span className="spec-value">Zeruri Fabrics, India</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Dyes</span>
            <span className="spec-value">Azo-free dyes</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Finishing</span>
            <span className="spec-value">Regular Finish with 30% lesser water</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">WASTEWATER TREATMENT</span>
            <span className="spec-value">Yes</span>
          </div>
        </div>

        <h3 className="subsection-title" style={{ marginTop: '24px' }}>Trims</h3>
        <p className="coming-soon">Coming Soon</p>
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
