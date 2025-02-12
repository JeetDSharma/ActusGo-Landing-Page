import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./pages/App.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Footer from "./components/Footer/Footer.jsx"; // Import the Footer component
import "./index.css";
import "../i18n.js"; // Import your i18n configuration
import Announce from "./components/announce.jsx";
import Header from "./components/Header/Header.jsx";
import AuthHeader from "./components/Header/AuthHeader/index.jsx";
import Signup from "./pages/auth/signup.jsx";
import Login from "./pages/auth/signin.jsx";
import SmallFooter from "./components/Footer/SmallFooter/SmallFooter.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

const isInsideDashboardFolder = window.location.pathname.includes("/dashboard");
const isInsideAuthFolder = window.location.pathname.includes("/auth");

if (!isInsideDashboardFolder) {
  createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider>
      <Router>

        {isInsideDashboardFolder ? null : <Announce />}
        {isInsideAuthFolder ?  <AuthHeader /> :  <Header />}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/login" element={<Login />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {isInsideAuthFolder ? <SmallFooter /> : <Footer />}
      </Router>
        </ThemeProvider>
    </StrictMode>,
    (document.getElementById("root").className =
      "dark:bg-black bg-yellow-50/70"),
  );
}
