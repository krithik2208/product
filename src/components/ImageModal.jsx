import { useEffect } from 'react'
import './ImageModal.css'

function ImageModal({ src, alt, onClose }) {
  useEffect(() => {
    const handleTouch = (e) => e.preventDefault()
    document.body.style.overflow = 'hidden'
    document.addEventListener('touchmove', handleTouch, { passive: false })
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'BackdropFilter') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('touchmove', handleTouch)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="image-modal-close" onClick={onClose}>×</button>
        <img src={src} alt={alt} />
      </div>
    </div>
  )
}

export default ImageModal
