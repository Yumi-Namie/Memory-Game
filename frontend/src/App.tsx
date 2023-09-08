import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './pages/Game';
import { HeroPage } from './pages/HeroPage';
import { GameProvider} from './context/GameContext'; 


function App() {
  
  return (
    <Router>
      <GameProvider> 
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </GameProvider>
    </Router>
  );
}

export default App;
