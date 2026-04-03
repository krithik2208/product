import React from 'react'
import ReactDOM from 'react-dom/client'
import HamburgerMenu from './components/HamburgerMenu'
import './index.css'

const params = new URLSearchParams(window.location.search)
const product = params.get('product')

function EnvironmentalPage() {
  return (
    <div className="product-page">
      <section id="content" className="section">
        <h2>Environmental Highlights</h2>
        <p>Content coming soon...</p>
      </section>
      <HamburgerMenu product={product} currentPage="environmental" />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EnvironmentalPage />
  </React.StrictMode>
)
