import SwipeableImage from '../components/SwipeableImage'
import HamburgerMenu from '../components/HamburgerMenu'
import './ProductPage.css'

function Product3Page() {
  const images = ['./images/product3.jpg', './images/product3back.jpg']

  return (
    <div className="product-page">
      <section id="product" className="section product-section">
        <SwipeableImage images={images} alt="Product 3" />
        <div className="product-header">
          <h1>Wrogn EcoWeave Dobby Shirt | Brown</h1>
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
            <span className="spec-value">WRSH0003SUS</span>
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
            <span className="spec-value">52% Cotton,<br/>48% Recycled Polyester</span>
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
        <div className="specs-grid">
          <div className="spec-item">
            <span className="spec-label">Buttons</span>
            <span className="spec-value">Wooden Buttons</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Button Manufacturer</span>
            <span className="spec-value">Bhanu Buttons, India</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Thread</span>
            <span className="spec-value">Cotton Thread</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Interlining</span>
            <span className="spec-value">315 MH / Freudenberg / Woven Non-fusible</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Hangtag</span>
            <span className="spec-value">Paper Hangtag</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Primary Packaging</span>
            <span className="spec-value">100% Recyclable</span>
          </div>
        </div>
      </section>

      <section id="manufacturing" className="section">
        <h2>Manufacturing Details</h2>
        <div className="specs-grid">
          <div className="spec-item">
            <span className="spec-label">Manufacturer</span>
            <span className="spec-value">Fashion Forever, India</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Construction</span>
            <span className="spec-value">Standard garment construction method</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Wash</span>
            <span className="spec-value">Softener Wash</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Waste Handling</span>
            <span className="spec-value">Fabric scraps upcycled into Value-added products</span>
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
