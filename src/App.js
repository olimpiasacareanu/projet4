import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import ListePays from './components/ListePays/ListePays';
import NavBar from "./components/NavBar/NavBar";
import NavBar2 from "./components/NavBar/NavBar2";
import PaysParams from "./components/PaysDetails/PaysParams"
import Erreur from "./components/Erreur/Erreur";
import Erreur404 from "./components/Erreur/Erreur404/Erreur404";
import "./App.css"
import Accueil from "./components/Accueil/Accueil";

export default App;

function App() {
  return (
    <>
      <BrowserRouter >
      
        <Routes>
          <Route element={<NavBar />}>
            <Route path="/" element={<Accueil />} />
            <Route path="/pays" element={<ListePays />} />
            <Route path="/pays/:id" element={<PaysParams />} />
          </Route>
          <Route element={<NavBar2 />}>
            <Route path="*" element={<Erreur><Erreur404 /></Erreur>}/>
            <Route path="/pays/*" element={<h1>Erreur 404</h1>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

