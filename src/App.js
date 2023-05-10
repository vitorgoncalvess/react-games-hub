import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.module.css"
import Game2048 from "./pages/Game2048"
import Hub from "./pages/Hub"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hub" element={<Hub />}/>
        <Route path="/2048" element={<Game2048 />}/>
      </Routes>
    </Router>
  )
}

export default App;
