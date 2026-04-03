import Product1Page from './pages/Product1Page'
import Product2Page from './pages/Product2Page'
import Product3Page from './pages/Product3Page'

const path = window.location.pathname

function App() {
  if (path.includes('product2')) {
    return <Product2Page />
  }
  if (path.includes('product3')) {
    return <Product3Page />
  }
  return <Product1Page />
}

export default App
