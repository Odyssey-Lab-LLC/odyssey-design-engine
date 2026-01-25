import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Georgi from './pages/Georgi'
import ProductVisionIntro from './pages/ProductVisionIntro'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Georgi />} />
      <Route path="/product-vision-intro" element={<ProductVisionIntro />} />
    </Routes>
  </BrowserRouter>
)

export default App
