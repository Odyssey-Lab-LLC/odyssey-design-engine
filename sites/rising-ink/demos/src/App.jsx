import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Georgi from './pages/Georgi'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Georgi />} />
    </Routes>
  </BrowserRouter>
)

export default App
