import {BrowserRouter, Routes, Route} from 'react-router-dom';

import ProductsMainView from './views/Products.main';
import ProductDetailsView from './views/Products.details';
import ProductEditOne from './components/products/product.edit';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ProductsMainView/>} path="/products" />
          <Route element={<ProductDetailsView/>} path="/products/:id" />
          <Route element={<ProductEditOne/>} path="/products/:id/edit" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
