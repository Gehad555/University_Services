import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Context from "./Context";
import Loginn from "./component/Loginn";
function App() {
  return (
    <>
      <Loginn />
      <Routes>
        <Route path="home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
