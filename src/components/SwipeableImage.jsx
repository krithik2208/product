import { useState, useRef } from 'react'

function SwipeableImage({ images, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const startX = useRef(0)
  const isDragging = useRef(false)

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX
    isDragging.current = true
  }

  const handleTouchMove = (e) => {
    if (!isDragging.current) return
    const diff = startX.current - e.touches[0].clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < images.length - 1) {
        setCurrentIndex(currentIndex + 1)
      } else if (diff < 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1)
      }
      isDragging.current = false
    }
  }

  const handleTouchEnd = () => {
    isDragging.current = false
  }

  return (
    <div className="swipeable-image">
      <div 
        className="swipe-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="swipe-track" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img key={index} src={src} alt={`${alt} - ${index === 0 ? 'Front' : 'Back'}`} />
          ))}
        </div>
      </div>
      <div className="swipe-dots">
        {images.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default SwipeableImage
