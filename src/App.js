
import Header from './shared/Header';
import Footer from './shared/Footer';
import './style/App.css';

import ProductList from './pages/product/ProductList';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      {/* <ProductList/> */}
      <Footer/>
    </>
  );
};

export default App;
