import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/header/Header';

import Home from "./Page/Home";
import About from "./Page/About";
import SkillPage from "./Page/SkillPage";
import ContactsPage from "./Page/ContactsPage";
import PortfolioPage from "./Page/PortfolioPage";

import './App.css';
import { useState } from "react";
import BurgerMenu from "./components/burgerMenu/BurgerMenu";

function App() {
  const [lang, setLang] = useState("eng")
  const [menu, setMenu] = useState(false)


  const isActiveMenu = () => {
    setMenu(!menu)
  }
  return (
    <div className="App">
      <Router>
        <Header currentLang={lang} />
        <BurgerMenu />
        <Routes>
          <Route path="/" element={<Home setLang={setLang} currentLang={lang} />} />
          <Route path="/about" element={<About currentLang={lang} />} />
          <Route path="/skills" element={<SkillPage currentLang={lang} />} />
          <Route path="/portfolio" element={<PortfolioPage currentLang={lang} />} />
          <Route path="/contacts" element={<ContactsPage currentLang={lang} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
