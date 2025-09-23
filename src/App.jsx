import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Experiencia from "./pages/Experiencia";
import Educacion from "./pages/Educacion";
import Habilidades from "./pages/Habilidades";
import Idiomas from "./pages/Idiomas";
import Cursos from "./pages/Cursos";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/educacion" element={<Educacion />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/idiomas" element={<Idiomas />} />
          <Route path="/cursos" element={<Cursos />} />
        </Routes>
      </main>
      <Footer className="footer"/>
    </div>
  );
}

export default App;
