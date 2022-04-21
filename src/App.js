import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Features, Pricing, Stories } from './pages';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/stories' element={<Stories />} />
          <Route path='/features' element={<Features />} />
          <Route path='/pricing' element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
