import React from 'react';
import './App.css';
// import FAB from './Components/Example';
// // import FABB from './Components/FAB/FAB';
// import FAB from './Components/FAB/FAB';
import Nav from './Components/Navbar/Nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'



function App() {
  return (
    <div>
       <BrowserRouter>
       
          <Nav/>

          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
            <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
            <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
            <Route path='/product' element={<Product/>}>
                <Route path=':productId' element={<Product/>}/>
            </Route>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<LoginSignup/>}/>
          </Routes>
        <Footer/>
       </BrowserRouter>
       {/* <FAB/> */}
        {/* <FAB/>     */}
        {/* <FABB/> */}
        
    </div>
  );
}

export default App;
