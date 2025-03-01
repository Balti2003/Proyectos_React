import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemList/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetail/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nosotros from './components/Nosotros/Nosotros';
import Contacto from './components/Contacto/Contacto';
import Carrito from './components/Carrito/Carrito';
import { CartProvider } from './context/CartContext';

function App() {

  return (

    <CartProvider>
    
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='item/:id' element={<ItemDetailContainer />}/>
          <Route path='/productos' element={<ItemListContainer />}/>
          <Route path='/productos/:categoria' element={<ItemListContainer />}/>
          <Route path='/nosotros' element={<Nosotros />}/>
          <Route path='/contacto' element={<Contacto />}/>
          <Route path='/carrito' element={<Carrito />}/>
        </Routes>

      </BrowserRouter>

    </CartProvider>  
  )
};

export default App;
