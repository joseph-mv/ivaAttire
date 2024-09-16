import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DashBoard from "./pages/DashBoard";
import ScrollToTop from "../src/components/ScrollToTop/ScrollToTop";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dash-board" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
