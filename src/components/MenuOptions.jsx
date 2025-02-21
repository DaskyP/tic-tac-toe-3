import { Link } from "react-router-dom";

const MenuOptions = () => {
  return (
    <div className="border-2 border-white shadow-lg h-[70vh] rounded-lg p-6 flex flex-col items-center justify-center w-full">
      <h2 className="text-gray-100 text-2xl font-semibold mb-6 text-center">Menú</h2>
      <ul className="space-y-6 w-full flex flex-col items-center">
        <li className="w-full max-w-md">
          <Link
            to="/tic-tac-toe"
            className="block w-full py-4 bg-gray-800 text-white rounded-lg text-center text-lg font-medium hover:bg-gray-200 hover:text-gray-900 transition"
          >
            Tic-Tac-Toe
          </Link>
        </li>
        <li className="w-full max-w-md">
          <Link
            to="/tic-tac-toe-pc"
            className="block w-full py-4 bg-gray-800 text-white rounded-lg text-center text-lg font-medium hover:bg-gray-200 hover:text-gray-900 transition"
          >
            Tic-Tac-Toe vs PC
          </Link>
        </li>
        <li className="w-full max-w-md">
          <Link
            to="/todo-list"
            className="block w-full py-4 bg-gray-800 text-white rounded-lg text-center text-lg font-medium hover:bg-gray-200 hover:text-gray-900 transition"
          >
            To-Do List
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuOptions;
