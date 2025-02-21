import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Game from "./pages/TutorialPage";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/tic-tac-toe" element={<Game />} />
      </Routes>
    </Router>
  );
};

export default App;
