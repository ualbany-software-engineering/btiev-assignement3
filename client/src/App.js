import Home from "./pages/Home.js"
import HelloWorld from "./pages/HelloWorld.js"
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="/helloworld" element={<HelloWorld/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
