import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from './components/Cart'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CartProvider from './context/CartContext'

function App() {
  return (
    <>
      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenido a nuestra tienda" />}/>
          <Route path='/category/:id' element={<ItemListContainer greeting="Bienvenido a nuestra tienda" />}/>
          <Route path='/item/:id' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/search/:tag' element={<ItemListContainer greeting="Bienvenido a nuestra tienda" />} />
          <Route path='/search/' element={ <Navigate to='/' />} />
        </Routes>
      </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
