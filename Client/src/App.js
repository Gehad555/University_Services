import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Context from "./Context";
import Loginn from "./component/Loginn";
import Register from "./component/Register";
import ForgetPassowrd from "./component/ForgetPassowrd";
function App() {
  return (
    <>
      <Routes>
        {["/", "login"].map((e, ind) => (
          <Route path={e} element={<Loginn />} key={ind} />
        ))}
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="forget" element={<ForgetPassowrd />} />
      </Routes>
    </>
  );
}

export default App;
