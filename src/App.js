import MainPage from "./pages/mainPage/MainPage"
import './App.css';
import ContactsPage from "./pages/contactsPage/ContactsPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import {Routes, Route} from 'react-router-dom';
import PortfolioPage from "./pages/portfolioPage/PortfolioPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import NotFound from "./pages/notFound/NotFound";
import Description from "./components/description/Description";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contacts" element={<ContactsPage/>}/>
        <Route path="/portfolio" element={<PortfolioPage/>}/>
        <Route path="/description" element={<Description/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
