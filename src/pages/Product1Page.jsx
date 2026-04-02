import HamburgerMenu from '../components/HamburgerMenu'
import './ProductPage.css'

function Product1Page() {
  return (
    <div className="product-page">
      <section id="product" className="section product-section">
        <div className="product-image">
          <img src="./images/product1.jpg" alt="Product 1" />
        </div>
        <div className="product-header">
          <span className="label">Collection 2026</span>
          <h1>Product 1</h1>
          <p className="price">$0</p>
        </div>
      </section>

      <section id="description" className="section">
        <h2>Description</h2>
        <p>Add your product description here. Click to edit this text. Describe your product features, benefits, and what makes it unique.</p>
      </section>

      <section id="specifications" className="section">
        <h2>Specifications</h2>
        <div className="specs-grid">
          <div className="spec-item">
            <span className="spec-label">Material</span>
            <span className="spec-value">Premium Quality</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Dimensions</span>
            <span className="spec-value">Standard Size</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Weight</span>
            <span className="spec-value">Lightweight</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Origin</span>
            <span className="spec-value">Locally Made</span>
          </div>
        </div>
      </section>

      <section id="images" className="section">
        <h2>Images</h2>
        <div className="images-grid">
          <div className="gallery-image">
            <div className="image-placeholder small">Image 1</div>
          </div>
          <div className="gallery-image">
            <div className="image-placeholder small">Image 2</div>
          </div>
          <div className="gallery-image">
            <div className="image-placeholder small">Image 3</div>
          </div>
          <div className="gallery-image">
            <div className="image-placeholder small">Image 4</div>
          </div>
        </div>
      </section>

      <HamburgerMenu />
    </div>
  )
}

export default Product1Page
