import "./App.css";
import Layout from "./Layout";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
    <Toaster
          position="bottom-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
            style: {
              background: "#363636",
              color: "#fff",
            },

            // Default options for specific types
            success: {
              duration: 3000,
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/register"} element={<Register />} />
        
      </Route>
    </Routes>
    </>
  );
}

export default App;
