// Importing router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Importing Pages
import Home from './../pages/Home'
import ProductStore from './../pages/ProductStore'
import BasketView from './../pages/BasketView'
// Importing Layouts
import Main from '../layouts/Main'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* ROUTE (PUBLIC) */}
        <Route path="/" element={<Home />} />
        {/* ROUTE MAIN (PUBLIC) */}
        <Route element={<Main />}>
          <Route path="/product-store" element={<ProductStore />} />
          <Route path="/basket-view" element={<BasketView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router