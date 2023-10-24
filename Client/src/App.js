import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Loginn from "./component/Loginn";
import Register from "./component/Register";
import ResetPassowrd from "./component/ResetPassowrd";
import ForgetPass from "./component/ForgetPass";
import EmailVerify from "./component/EmailVerify";
import Books from "./component/Books";
function App() {
  return (
    <>
      <Routes>
        {["/", "login"].map((e, ind) => (
          <Route path={e} element={<Loginn />} key={ind} />
        ))}
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="Reset" element={<ResetPassowrd />} />
        <Route path="forget" element={<ForgetPass />} />
        <Route path="emailVerify" element={<EmailVerify />} />
        <Route path="books" element={<Books />} />
      </Routes>
    </>
  );
}

export default App;
