import { Link } from "react-router-dom";

const MenuOptions = () => {
  return (
    <div className="bg-white shadow-lg h-[500px] rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Menú</h2>
      <ul className="space-y-4 m-auto">
        <li>
          <Link
            to="/tic-tac-toe"
            className="block px-4 py-2 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-700 transition"
          >
            Tic-Tac-Toe
          </Link>
        </li>
        <li>
          <Link
            to="/tic-tac-toe-pc"
            className="block px-4 py-2 bg-green-500 text-white rounded-lg text-center hover:bg-green-700 transition"
          >
            Tic-Tac-Toe vs PC
          </Link>
        </li>
        <li>
          <Link
            to="/todo-list"
            className="block px-4 py-2 bg-yellow-500 text-white rounded-lg text-center hover:bg-yellow-700 transition"
          >
            To-Do List
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuOptions;
