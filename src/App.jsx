import Product1Page from './pages/Product1Page'
import Product2Page from './pages/Product2Page'
import Product3Page from './pages/Product3Page'

const params = new URLSearchParams(window.location.search)
const page = params.get('page')

function App() {
  if (page === '2') {
    return <Product2Page />
  }
  if (page === '3') {
    return <Product3Page />
  }
  return <Product1Page />
}

export default App
