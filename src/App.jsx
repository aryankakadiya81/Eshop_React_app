
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Header";
import Footer from './Components/Footer/Footer';
import Homepage from './Components/Homepage/Homepage_main';
import About_Main from './Components/Aboutpage/About_Main';
import Shop_main from "./Components/Shoppage/Shop_main";
import Faqs_main from "./Components/Pages/Faqs/Faqs_main";

function App() {


  return (
    <>
    
      <BrowserRouter>
        <div>
          <Navbar></Navbar>


          <Routes>

            <Route path='/' element={<Homepage/>} />
            <Route path='/About' element={<About_Main/>} />
            <Route path='/Shop' element={<Shop_main/>} />
            <Route path='/Pages/Faqs' element={<Faqs_main/>} />



          </Routes>

          <Footer></Footer>

        </div>
      </BrowserRouter>
    </>
  )
}

export default App
