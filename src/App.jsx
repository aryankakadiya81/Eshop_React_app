import { createContext, useCallback, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Header";
import Footer from './Components/Footer/Footer';
import Homepage from './Components/Homepage/Homepage_main';
import About_Main from './Components/Aboutpage/About_Main';
import Shop_main from "./Components/Shoppage/Shop_main";
import Faqs_main from "./Components/Pages/Faqs/Faqs_main";
import Privacy_main from "./Components/Pages/Privacy_Policy/Privacy_main";
import Error_main from "./Components/Pages/Error/Error_main";
import Terms_and_Condition_main from "./Components/Pages/Terms_&_conditions/Terms&Condition_main";
import Login_Main from "./Components/Pages/Login/Login_Main";
import Register_main from "./Components/Pages/Register/Register_main";
import Forgot_Password_Main from "./Components/Pages/Forgot_Password/Forgot_Password_Main";
import My_Cart_Main from "./Components/Pages/My_Cart/My_Cart_Main";
import My_Wishlist_Main from "./Components/Pages/My_Wishlist/My_Wishlist_Main";
import Checkout_Main from "./Components/Pages/Checkout/Checkout_Main";
import Contact_Main from "./Components/Contact/Contact_Main";
import Best_Selling from './Components/Homepage/Section_2/Inner_Sec2/Best_Selling/Best_Selling';
import Latest_Product from "./Components/Homepage/Section_2/Inner_Sec2/Latest_Product/Latest_Product";
import Top_Rated from "./Components/Homepage/Section_2/Inner_Sec2/Top_Rated/Top_Rated";


export let Item = createContext();

function App() {
  let [Citem, setCitem] = useState(0);
  let [Cwish, setCwish] = useState(0)

  let Cart = useCallback(() => {
    setCitem(Citem + 1);
  }, [Citem]);


  let Wish = useCallback(() => {
    setCwish(Cwish + 1);
  }, [Cwish]);


  return (
    <>

      <BrowserRouter>
        <Item.Provider value={{ Citem, Cart, Cwish, Wish }} >
          <div>
            <Navbar></Navbar>


            <Routes>
              <Route path='' element={<Homepage></Homepage>}>


                <Route path='' element={<Top_Rated></Top_Rated>}></Route>

                <Route path='Best_Selling' element={<Best_Selling />}></Route>
                <Route path='Latest_Product' element={<Latest_Product></Latest_Product>}></Route>
              </Route>
              <Route path='/About' element={<About_Main />} />
              <Route path='/Shop' element={<Shop_main />} />

              <Route path='/Pages/Faqs' element={<Faqs_main />} />
              <Route path='/Pages/Privacy' element={<Privacy_main />} />
              <Route path="/Pages/Terms" element={<Terms_and_Condition_main />} />
              <Route path="/Pages/Login" element={<Login_Main />} />
              <Route path="/Pages/Register" element={<Register_main />} />
              <Route path="/Pages/ForgotPassword" element={<Forgot_Password_Main />} />
              <Route path="/Pages/Cart" element={<My_Cart_Main />} />
              <Route path="/Pages/Wishlist" element={<My_Wishlist_Main />} />
              <Route path="/Pages/Checkout" element={<Checkout_Main />} />
              <Route path="/Pages/Error" element={<Error_main />} />

              <Route path="/Contact" element={<Contact_Main />} />
            </Routes>


            <Footer></Footer>
          </div>
        </Item.Provider>
      </BrowserRouter>
    </>
  )
}

export default App


// <Homepage CartFun={() => { Cart() }}>
//             <Routes>
//               <Route path="/Best" element={<Section_2p1></Section_2p1>}></Route>
//               <Route path="/Latest" element={<Section_2p2></Section_2p2>}></Route>

//             </Routes>
//           </Homepage>
