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
  const RoutesData = [
    {
      page: <Home setLang={setLang} currentLang={lang} />,
      link: "/"
    },
    {
      page: <About currentLang={lang} />,
      link: "/about"
    },
    {
      page: <SkillPage currentLang={lang} />,
      link: "/skills"
    },
    {
      page: <PortfolioPage currentLang={lang} />,
      link: "/portfolio"
    },
    {
      page: <ContactsPage currentLang={lang} />,
      link: "/contacts"
    },
  ]
  const createRoute = () => {
    const route = RoutesData.map((data, id) => {
      return (
        <Route path={data.link}
          element={menu ? <Menu setMenu={setMenu} currentLang={lang} setLang={setLang} />
            : data.page}
          key={id} />
      )
    });
    return (
      <Routes>
        {route}
      </Routes>
    )
  }

  return (
    <div className="App">
      <Router>
        <Header currentLang={lang} />
        < BurgerMenu setMenu={setMenu} menu={menu} />
        {createRoute()}
      </Router>
    </div>
  );
}

export default App;
