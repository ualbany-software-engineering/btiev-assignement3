import Home from "./pages/Home.js"
import HelloWorld from "./pages/HelloWorld.js"
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="" element={<HelloWorld/>}/>
          <Route path="/profile" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
