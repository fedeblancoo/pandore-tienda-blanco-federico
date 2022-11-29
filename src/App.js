import './App.css';
//componentes
import CartContextProvider from './context/cartContext';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './ItemList/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';



function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <ItemListContainer /> } />
          
          <Route path="/category/:idCategory" element={ <ItemListContainer /> } />

          <Route path="/detail/:id" element={ <ItemDetailContainer /> } />

          <Route path="/cart" element= { <Cart />} />

          <Route path="*" element={<h2>Error 404: Not Found</h2>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

