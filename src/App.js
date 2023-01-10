import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/header/Header';
import BurgerMenu from "./components/burgerMenu/BurgerMenu";
import Menu from "./components/menu/Menu";
import Home from "./Page/Home";
import About from "./Page/About";
import SkillPage from "./Page/SkillPage";
import ContactsPage from "./Page/ContactsPage";
import PortfolioPage from "./Page/PortfolioPage";

import './App.css';



function App() {
  const [lang, setLang] = useState("eng")
  const [menu, setMenu] = useState(false)


  return (
    <div className="App">
      <Router>
        <Header currentLang={lang} />
        < BurgerMenu setMenu={setMenu} menu={menu} />
        <Routes>
          <Route path="/"
            element={menu ? <Menu setMenu={setMenu} currentLang={lang} setLang={setLang} />
              : <Home setLang={setLang} currentLang={lang} />} />


          <Route path="/about"
            element={menu ? <Menu setMenu={setMenu} currentLang={lang} setLang={setLang} />
              : <About currentLang={lang} />} />


          <Route path="/skills"
            element={menu ? <Menu setMenu={setMenu} currentLang={lang} setLang={setLang} />
              : <SkillPage currentLang={lang} />} />


          <Route path="/portfolio"
            element={menu ? <Menu setMenu={setMenu} currentLang={lang} setLang={setLang} />
              : <PortfolioPage currentLang={lang} />} />


          <Route path="/contacts"
            element={menu ? <Menu setMenu={setMenu} currentLang={lang} setLang={setLang} />
              : <ContactsPage currentLang={lang} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
