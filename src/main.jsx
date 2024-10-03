import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import WebLayout from "./layouts/WebLayout";
import Home from "./pages/Home";
import "./scss/pages/home.scss";
import "./styles/main.css";

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <Routes>
      <Route element={<WebLayout />}>
        <Route path="" element={<Home/>} />
      </Route>
    </Routes>
  </Router>
);
