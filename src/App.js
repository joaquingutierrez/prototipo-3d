import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from './components/Cart'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenido a nuestra tienda" />}/>
          <Route path='/category/:id' element={<ItemListContainer greeting="Bienvenido a nuestra tienda" />}/>
          <Route path='/item/:id' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
