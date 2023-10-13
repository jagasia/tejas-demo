import './App.css';
import { Product } from './Components/Product';
import { ProductGrid } from './Components/ProductGrid';

function App() {
  return (
    <div className="App">
      <div className='p-5 container-fluid bg-primary text-white text-center'>
        <h1>Product page</h1>
      </div>

      <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-3'>
          <Product />
        </div>
        <div className='col-md-3'></div>
        <div className='col-md-3'></div>
      </div>

      <div className='row'>
        <div className='col-sm-2'></div>
        <div className='col-sm-8'>
          <ProductGrid />
        </div>
        <div className='col-sm-2'></div>
      </div>
    </div>
  );
}

export default App;
