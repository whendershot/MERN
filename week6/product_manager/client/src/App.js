import AddProductForm from './components/products/product.createOne';
import ProductList from './components/products/product.list';

import './App.css';

function App() {
  return (
    <>
      <AddProductForm />
      <div className="divider"></div>
      <ProductList />
    </>
  );
}

export default App;
