import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount';

const onAdd= () => {
  console.log("Agregado al carrito");
}

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a nuestra tienda"/>
      <ItemCount stock={8} initial={1} onAdd={onAdd}/>
    </>
  );
}

export default App;
