import {BrowserRouter, Routes, Route} from 'react-router-dom';

import ProductsMainView from './views/Products.main';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ProductsMainView/>} path="/products" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
