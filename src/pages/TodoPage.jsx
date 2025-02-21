import { useState, useEffect } from "react";
import { CheckCircle, Trash2, PlusCircle } from "lucide-react"; // Importando íconos de Lucide React
import BackButton from "../components/BackButton";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);

  const [task, setTask] = useState("");

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = () => {
    if (task.trim() === "") return;
    const newTask = { id: Date.now(), text: task, completed: false };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setTask(""); // Limpiar input
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); 
  };

  // Marcar tarea como completada
  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); 
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((t) => t.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); 
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
    <BackButton />
      <h1 className="text-3xl font-bold text-white mb-6">Lista de Tareas</h1>
      <div className="flex w-full max-w-md gap-2">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Agregar nueva tarea..."
          className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
        >
          <PlusCircle size={20} />
          Agregar
        </button>
      </div>

      <ul className="mt-6 w-full max-w-md">
        {tasks.length === 0 && (
          <p className="text-gray-500 text-center">No hay tareas aún.</p>
        )}
        {tasks.map((t) => (
          <li
            key={t.id}
            className="flex justify-between items-center bg-gray-800 text-white p-3 rounded-lg mb-2"
          >
            <span className={`flex-1 ${t.completed ? "line-through text-gray-400" : ""}`}>
              {t.text}
            </span>
            <button
              onClick={() => toggleComplete(t.id)}
              className="mr-2 text-green-500 hover:text-green-400 transition"
            >
              <CheckCircle size={24} />
            </button>
            <button
              onClick={() => deleteTask(t.id)}
              className="text-red-500 hover:text-red-400 transition"
            >
              <Trash2 size={24} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
