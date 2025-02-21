import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Game from "./pages/TutorialPage";
import TicTacToePC from "./pages/TicTacToePC";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/tic-tac-toe" element={<Game />} />
        <Route path="/tic-tac-toe-pc" element={<TicTacToePC />} />
      </Routes>
    </Router>
  );
};

export default App;
