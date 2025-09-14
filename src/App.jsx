// App.jsx
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import WebDevelopment from "./components/WebDevelopment/WebDevelopment.jsx";
import ContactUS from "./components/Contact/ContactUs.jsx";
import WebDesign from "./components/WebDesign/WebDesign.jsx"
import DigitalMarketing from "./components/digitalMarketing/digitalMarketing.jsx"
import SEOSMO from './components/SEOSMO/SEOSMO.jsx'
// import LoginModal from "./pages/Login.jsx";
import Portfolio from "./components/portfolio/portfolio.jsx";
import AppDevelopment from "./components/AppDevlopment/Appdevlopment.jsx";
import LoginPage from "./pages/Login.jsx";
import SignupPage from "./pages/SignupPage.jsx";
// import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services/web-development" element={<WebDevelopment/>}/>
          <Route path = "services/web-design" element={<WebDesign/>}/>
          <Route path = "services/digital-marketing" element={<DigitalMarketing/>}/>
          <Route path = "services/seo-smo" element={<SEOSMO/>}/>
          <Route path = "services/app-development" element={<AppDevelopment/>}/>
          <Route path= "contact" element={<ContactUS/>}/>
          {/* <Route path = "/dashboard" element={<LoginModal/>}/>
           */}
          <Route path= "dashboard" element={<LoginPage/>}/>
          <Route path="signup" element={<SignupPage/>}/>


          <Route path = "/portfolio" element={<Portfolio/>}/>






        </Route>
      </Routes>
   
    </>
  );
}
export default App;
