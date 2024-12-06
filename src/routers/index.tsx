import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartPage } from '../pages/CartPage/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage/CheckoutPage';
import { ContactPage } from '../pages/ContactPage/ContactPage';
import { HomePage } from '../pages/HomePage/HomePage';
import { ShopPage } from '../pages/ShopPage/ShopPage';
import { SingleProductPage } from '../pages/SingleProductPage/SingleProductPage';
import { ProtectedRoute } from './ProtectedRoute';

const Routers = () => {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="single-product" element={<SingleProductPage />} />
            <Route  path="/product/:id" element={<SingleProductPage/>}/>
            
            <Route element={<ProtectedRoute />}>
              <Route path="/checkout" element={<CheckoutPage />} />
            </Route>
          </Routes>
      </BrowserRouter>
    );
  };

  export default Routers;