import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Portfiolio from "./pages/Portfiolio";
import Career from "./pages/Career";
import Web_Details from "./pages/Web_Details";
import App_Details from "./pages/App_Details";
import UI_UX_Details from "./pages/UI_UX_Details";
import Marketing_Details from "./pages/Marketing_Details";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Forget_Password from "./pages/Forget-Password";
import { Toaster } from "react-hot-toast";
import Verify_Email from "./pages/Verify-Email";
import Admin_Dashboard from "./pages/Admin_Dashboard";
import Reset_Password from "./pages/Reset-Password";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const location = useLocation();

  const hideHeaderPath = [
    "/login",
    "/signup",
    "/forget-password",
    "/verify-email",
    "/dashboard",
    "/reset-password",
  ];
  const hideFooterPath = [
    "/login",
    "/signup",
    "/forget-password",
    "/verify-email",
    "/dashboard",
    "/reset-password",
  ];

  const hideHeader = hideHeaderPath.includes(location.pathname);
  const hideFooter = hideFooterPath.includes(location.pathname);
  return (
    <>
      <ScrollToTop />
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/service/web-dev" element={<Web_Details />} />
        <Route path="/service/app-dev" element={<App_Details />} />
        <Route path="/service/ui-ux-design" element={<UI_UX_Details />} />
        <Route
          path="/service/digital-marketing"
          element={<Marketing_Details />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfiolio />} />
        <Route path="/career" element={<Career />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-password" element={<Forget_Password />} />
        <Route path="/reset-password" element={<Reset_Password />} />
        <Route path="/verify-email" element={<Verify_Email />} />
        <Route path="/dashboard" element={<Admin_Dashboard />} />
      </Routes>
      {!hideFooter && <Footer />}
      <Toaster />
    </>
  );
}

export default App;
