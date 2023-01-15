import './App.css';
import Counter from './Counter/Counter';
import { NavLink, Route, Routes } from "react-router-dom";
import NameGenerator from './NameGenerator/NameGenerator';

const ROOT_PATH = "/";
const NAMES_PATH = "/names";

function App() {
  return(
  <>
    <nav>
      <NavLink to="/">Compteur</NavLink>
      <NavLink to="/names">Générateur de noms</NavLink>
    </nav>
    <main className='App'>
      <Routes>
        <Route path={ROOT_PATH} element={<Counter/>}/>
        <Route path={NAMES_PATH} element={<NameGenerator/>}/>
      </Routes>
    </main>
  </>
  );
}

export default App;
