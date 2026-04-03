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
        <ul className="environmental-list">
          <li>30% lesser water consumption compared to conventional method</li>
          <li>No hazardous chemical finishes used</li>
          <li>Recycled polyester made from post-consumer PET bottle waste</li>
          <li>Designed for recyclability at end of life</li>
          <li>Wastewater treated before discharge</li>
          <li>Fabric scraps upcycled into value-added products</li>
          <li>Fabric can be composted at certified textile recycling facilities</li>
        </ul>
      </section>

      <section id="durability" className="section">
        <h2>Durability & Care</h2>
        
        <h3 className="subsection-title">Durability & Performance</h3>
        <div className="specs-grid">
          <div className="spec-item">
            <span className="spec-label">Colour Fastness to Rubbing</span>
            <span className="spec-value">Dry: Grade 4{'\n'}Wet: Grade 3</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Colour Fastness to Washing</span>
            <span className="spec-value">Grade 4</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Shrinkage</span>
            <span className="spec-value">Warp: - 3.3%{'\n'}Weft: - 3.0%</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Spirality</span>
            <span className="spec-value">0.6%</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Tear Strength</span>
            <span className="spec-value">Warp: 10367 gf{'\n'}Weft: 5890 gf</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Seam Strength</span>
            <span className="spec-value">High resistance to seam slippage</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Estimated Lifespan</span>
            <span className="spec-value">2-4 years</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Testing Standard</span>
            <span className="spec-value">Verified lab - tested performance</span>
          </div>
        </div>

        <h3 className="subsection-title" style={{ marginTop: '24px' }}>Wash Care</h3>
        <ul className="environmental-list">
          <li>Use mild detergent</li>
          <li>Cold machine wash recommended</li>
          <li>Dry in shade</li>
          <li>Do not bleach</li>
          <li>Cool iron</li>
          <li>Do not wring</li>
        </ul>
        <div className="washcare-image">
          <img src="./images/washcare.jpg" />
        </div>
      </section>

      <section id="endoflife" className="section">
        <h2>End of Life Guidance</h2>
        
        <h3 className="subsection-title">Disposal Guide</h3>
        <ul className="environmental-list">
          <li>Prefer reuse, repair or donation before disposal</li>
          <li>Remove buttons before recycling; buttons can be reused or disposed separately</li>
          <li>Do not dispose in mixed waste</li>
          <li>Return garment to store for recycling if local recycling facilities are unavailable</li>
        </ul>
        
        <div className="specs-grid" style={{ marginTop: '20px' }}>
          <div className="spec-item">
            <span className="spec-label">Recyclable</span>
            <span className="spec-value">Yes - Textile Recycling</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Compostable</span>
            <span className="spec-value">Yes - at certified textile recycling facility</span>
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
