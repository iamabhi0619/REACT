import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nev from "./Components/Nev";
import Login from "./Components/Login";
import SingUp from "./Components/SignUp";
import Dashbord from "./Components/Dashbord";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nev />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SingUp />} />
          <Route path="/dashbord" element={<Dashbord />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
