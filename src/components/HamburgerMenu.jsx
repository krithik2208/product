import { useState } from 'react'
import './HamburgerMenu.css'

function HamburgerMenu({ product, currentPage }) {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const productSections = [
    { id: 'product', label: 'Product' },
    { id: 'description', label: 'Description' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'images', label: 'Images' }
  ]

  const infoPages = [
    { page: 'material', label: 'Material Composition' },
    { page: 'manufacturing', label: 'Manufacturing Details' },
    { page: 'environmental', label: 'Environmental Highlights' },
    { page: 'durability', label: 'Durability & Care' },
    { page: 'endoflife', label: 'End of Life Guidance' },
    { page: 'certification', label: 'Certification & Compliance' }
  ]

  return (
    <div className="hamburger-menu">
      <button 
        className={`hamburger-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <div className={`hamburger-overlay ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)} />
      
      <nav className={`hamburger-nav ${isOpen ? 'active' : ''}`}>
        <ul>
          {productSections.map((item) => (
            <li key={item.id}>
              <button onClick={() => scrollToSection(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
          <li className="divider"></li>
          {infoPages.map((item) => (
            <li key={item.page}>
              <a 
                href={`./${item.page}.html${product ? `?product=${product}` : ''}`}
                className={currentPage === item.page ? 'active' : ''}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default HamburgerMenu
