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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services/web-development" element={<WebDevelopment/>}/>
          <Route path= "contact" element={<ContactUS/>}/>
          <Route path = "services/web-design" element={<WebDesign/>}/>
        </Route>
      </Routes>
   
    </>
  );
}
export default App;
