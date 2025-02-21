import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Game from "./pages/TutorialPage";
import TicTacToePC from "./pages/TicTacToePC";
import TodoList from "./pages/TodoPage";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/tic-tac-toe" element={<Game />} />
        <Route path="/tic-tac-toe-pc" element={<TicTacToePC />} />
        <Route path="/todo-list" element={<TodoList />} />
      </Routes>
    </Router>
  );
};

export default App;
