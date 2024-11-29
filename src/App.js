import { useEffect } from 'react';
import './App.css';
import { Outlet } from "react-router-dom"
import { fetchAllProducts } from './features/products/productsActions';
import { useDispatch } from 'react-redux';
import Header from './components/Header';


function App() {

   

  return (
    <div className="App">
      <Header/>
      <main>
          <Outlet/>
      </main>
      
    </div>
  );
}

export default App;
