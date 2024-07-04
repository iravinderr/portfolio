import React from "react"
import ReactDOM from "react-dom/client"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { About, Contact, Home, Projects, Skills } from "./pages";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import App from "./App.jsx"
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="skills" element={<Skills />}/>
      <Route path="projects" element={<Projects />}/>
      <Route path="contact" element={<Contact />}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
