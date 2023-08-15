
import { Routes, Route } from 'react-router-dom';
import Home from './Page/Homepage';
import Kelas from './Page/Kelas';
import Testimonial from './Page/Testimonial';
import Faq from './Page/Faq';
import Syarat from './Page/Syaratketentuan';
import Navi from './Components/Navbar'
// import Footerr from "../src/Components/Footer";
function App() {
  return (
    <div className='Containerr'>
      <Navi />
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kelas" element={<Kelas />} />
          <Route path="/Testimonial" element={<Testimonial />} />
          <Route path="/Faqpage" element={<Faq />} />
          <Route path="/Syaratketentuan" element={<Syarat />} />
        </Routes>
      
      
    </div>
  )
}
export default App
