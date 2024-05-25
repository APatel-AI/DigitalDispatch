import "./App.css";
import Layout from "./Layout";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path={"/login"} element={<LoginPage/>} />
        <Route path={"/register"} element={<Register/>} />
      </Route>
    </Routes>
  );
}

export default App;
