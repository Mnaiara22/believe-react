import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Producto from './components/Producto';
import ItemListContainer from './components/ItemListContainer';
import { ThemeProvider } from '@mui/material';
import theme from './MuiTheme';




function App() {

  const saludo = "Bienvenidos a Believe"
  const info = 'esta es la info del componente'

  let producto1 = {id:1, name: "Nala", price: 290, measure: "80cc", linea: "Clásica"};
  let producto2 = {id:2, name: "Kala", price: 380, measure: "150cc", linea: "Clásica"};
  let producto3 = {id:3, name: "Anna ", price: 590, measure: "360cc", linea: "Clásica"};
  let producto4 = {id:4, name: "Bella", price: 795, measure: "150cc", linea: "Romántica"};
  let producto5 = {id:5, name: "Duquesa", price: 865, measure: "100cc", linea: "Romántica"};
  let producto6 = {id:6, name: "Lilo ", price: 805, measure: "200cc", linea: "Romántica"};

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      
      <NavBar/>
      <ItemListContainer saludo={saludo} color={"blue"} />

      <Producto item={producto1} color={"pink"} img={'images/nala.avif'}/>
      <Producto item={producto2} color={"red"} img={'images/kala.avif'}/>
      <Producto item={producto3} color={"pink"} img={'images/anna.avif'}/>
      <Producto item={producto4} color={"red"} img={'images/bella.avif'}/>
      <Producto item={producto5} color={"pink"} img={'images/duquesa.avif'}/>
      <Producto item={producto6} color={"red"} img={'images/lilo.avif'}/>
      </div>
      </ThemeProvider>
    
    
  );
}

export default App;
