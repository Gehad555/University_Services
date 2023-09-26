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
      <Routes>
        {["/", "login"].map((e, ind) => (
          <Route path={e} element={<Loginn />} key={ind}/>
        ))}
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
