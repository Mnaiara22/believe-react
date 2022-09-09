
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


function App() {




  return (

    <ThemeProvider theme={theme}>

      <div className="App">
          <BrowserRouter>
          <NavBar/>
        
            <Routes>
              <Route path='/' element= {<ItemListContainer/>}/>
              <Route path='/introduccion' element= {<Main/>}/>
              <Route path='/aromas' element= {<AromasContainer/>}/>
              <Route path='/categoty/:lineaId'element={<ItemDetailContainer/>}/>
              <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
              <Route path='/info' element={<Informacion img={'images/fondo.avif'}/>}/>
            </Routes>
        </BrowserRouter>

      </div>

    </ThemeProvider>
  );

}

export default App;
