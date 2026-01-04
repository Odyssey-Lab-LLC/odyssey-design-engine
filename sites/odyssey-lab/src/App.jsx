import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AndrewThreshold from './pages/AndrewThreshold';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/andrew-threshold" element={<AndrewThreshold />} />
      </Routes>
    </BrowserRouter>
  );
}
