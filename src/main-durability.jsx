import React from 'react'
import ReactDOM from 'react-dom/client'
import HamburgerMenu from './components/HamburgerMenu'
import './index.css'

const params = new URLSearchParams(window.location.search)
const product = params.get('product')

function DurabilityPage() {
  return (
    <div className="product-page">
      <section id="content" className="section">
        <h2>Durability & Care</h2>
        <p>Content coming soon...</p>
      </section>
      <HamburgerMenu product={product} currentPage="durability" />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DurabilityPage />
  </React.StrictMode>
)
