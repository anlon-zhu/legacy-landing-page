import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./app.scss"
import { useState } from "react";

function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  const [galOpen, setGalOpen] = useState(0);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio galOpen={galOpen} setGalOpen={setGalOpen}/>
        <Experience/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
