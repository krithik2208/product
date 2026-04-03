import { useState } from 'react'
import './HamburgerMenu.css'

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const menuItems = [
    { id: 'product', label: 'Product' },
    { id: 'material', label: 'Material Composition' },
    { id: 'manufacturing', label: 'Manufacturing Details' },
    { id: 'environmental', label: 'Environmental Highlights' },
    { id: 'durability', label: 'Durability & Care' },
    { id: 'endoflife', label: 'End of Life Guidance' },
    { id: 'certification', label: 'Certification & Compliance' }
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
          {menuItems.map((item) => (
            <li key={item.id}>
              <button onClick={() => scrollToSection(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default HamburgerMenu
