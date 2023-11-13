import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
