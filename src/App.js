import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
