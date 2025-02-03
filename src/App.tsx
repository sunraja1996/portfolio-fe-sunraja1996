import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from "./pages/Home"
import Portfolio from './pages/Portfolio';
import Hireme from './pages/Hireme';
import Navbar from './components/Components/Navbar';
import Footer from './components/Components/Footer';

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects' element={<Portfolio/>}/>
      <Route path='/hireme' element={<Hireme/>} />
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
