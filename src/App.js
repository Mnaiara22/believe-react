
import './App.css';
import { Grid, ThemeProvider } from '@mui/material'; 
import theme from './MuiTheme';
import Box from '@mui/material/Box';


//Secciones
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Main from './components/Main';
import TitleAromas from './components/TitleAromas';
import Aromas from './components/Aromas';
import ItemListContainer from './components/ItemListContainer'
import Informacion from './components/Informacion';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetail from './components/ItemDetail';
import AromasContainer from './components/AromasContainer';
import Cart from './components/Cart'
import {CartProvider} from './context/CartContext'
import Checkout from './components/Checkout';
import { useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase/firebase';
import { productos } from './mocks/mockData';

function App() {

const saludo = ""

//useEffect(()=>{
//  const productosCollection = collection(db, 'products')
//  productos.map((item)=> addDoc(productosCollection, item))
//},[])

  return (

    <ThemeProvider theme={theme}>

      <div className="App">
          <CartProvider>
          <BrowserRouter>
          <NavBar/>
        
            <Routes>
              <Route path='/' element= {<ItemListContainer/> }/>
              <Route path='/introduccion' element= {<Main/>}/>
              <Route path='/aromas' element= {<AromasContainer/>}/>
              <Route path='/category/:lineaId'element={<ItemListContainer/>}/>
              <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
              <Route path='/informacion' element={<Informacion img={'images/fondo.avif'}/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
            </Routes>
        </BrowserRouter>
        </CartProvider>
      </div>

    </ThemeProvider>
  );

}

export default App;
