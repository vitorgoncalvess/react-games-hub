import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.module.css"
import Game2048 from "./pages/Games/2048/Game2048"
import Hub from "./pages/Hub"
import GameMinas from "./pages/Games/CampoMinado/GameMinas";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hub />}/>
        <Route path="/2048" element={<Game2048 />}/>
        <Route path="/minas" element={<GameMinas />}/>
      </Routes>
    </Router>
  )
}

export default App;
