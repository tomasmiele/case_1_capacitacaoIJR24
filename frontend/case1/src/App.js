import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Paginas/Home/home"
import Login from "./Paginas/Login/login"
import Cadastro from "./Paginas/Cadastro/cadastro"
import Consultas from "./Paginas/Consultas/consultas"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/cadastro",
    element: <Cadastro></Cadastro>
  },
  {
    path: "/consultas",
    element: <Consultas></Consultas>
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;