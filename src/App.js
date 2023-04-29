import Navbar from './components/Navbar';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Footer from './components/Footer';
import Contact from './components/Contact';
import Services from './components/Services';
import "./styles/mediaQueries.css";



function App() {
 
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
