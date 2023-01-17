// import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./modulos/NavBar/navbar";
import TabelaComplexa from "./modulos/Tabela/tabela";


function App() {

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Navbar/>
    //     <Route path="/" element={ <TabelaComplexa/> } />
    //   </Routes>
    // </BrowserRouter>
    
    <app-main>
      <Navbar/>
      <TabelaComplexa/>
    </app-main> 
  );
}

export default App;