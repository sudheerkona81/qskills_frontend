import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Translator from './pages/Translator';
import StringGenerator from './pages/StringGenerator';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/translator" element={<Translator />} />
        <Route path="/string-generator" element={<StringGenerator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
