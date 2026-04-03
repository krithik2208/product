import React from 'react'
import ReactDOM from 'react-dom/client'
import HamburgerMenu from './components/HamburgerMenu'
import './index.css'

const params = new URLSearchParams(window.location.search)
const product = params.get('product')

function CertificationPage() {
  return (
    <div className="product-page">
      <section id="content" className="section">
        <h2>Certification & Compliance</h2>
        <p>Content coming soon...</p>
      </section>
      <HamburgerMenu product={product} currentPage="certification" />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CertificationPage />
  </React.StrictMode>
)
