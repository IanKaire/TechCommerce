import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import ProfilePage from './pages/ProfilePage';
import Footer from './components/Footer';
import CheckoutPage from './pages/CheckoutPage';


function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar/>
         <main>
           <Routes>
            <Route path='/' element={<LandingPage/>}></Route>
            <Route path='/products' element={<ProductsPage/>}></Route>
            <Route path='/product/:id' element={<ProductPage/>}></Route>
            <Route path='/cart' element={<CartPage/>}></Route>
            <Route path='/login' element={<LoginPage/>}></Route>
            <Route path='/registration' element={<RegistrationPage/>}></Route>
            <Route path='/profile' element={<ProfilePage/>}></Route>
            <Route path='/checkout' element={<CheckoutPage/>}></Route>
            </Routes>
         </main>
      </Router>
      <Footer/>
    </ChakraProvider> 
  );
}

export default App;
