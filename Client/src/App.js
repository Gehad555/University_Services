import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Context from "./Context";
import Loginn from "./component/Loginn";
import Register from "./component/Register";
function App() {
  return (
    <>
      {/* <Loginn /> */}
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
