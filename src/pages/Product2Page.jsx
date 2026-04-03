import SwipeableImage from '../components/SwipeableImage'
import HamburgerMenu from '../components/HamburgerMenu'
import './ProductPage.css'

function Product2Page() {
  const images = ['./images/product2.jpg', './images/product2back.jpg']

  return (
    <div className="product-page">
      <section id="product" className="section product-section">
        <SwipeableImage images={images} alt="Product 2" />
        <div className="product-header">
          <h1>Wrogn EcoWeave Dobby Shirt | Navy</h1>
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
            <span className="spec-value">WRSH0002SUS</span>
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
            <span className="spec-value">52% Cotton, 48% Recycled Polyester</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Weave</span>
            <span className="spec-value">20s*20s Open Dobby</span>
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
            <span className="spec-label">Waste Water Treated</span>
            <span className="spec-value">Yes</span>
          </div>
        </div>

        <h3 className="subsection-title" style={{ marginTop: '24px' }}>Trims</h3>
        <p className="coming-soon">Coming Soon</p>
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
