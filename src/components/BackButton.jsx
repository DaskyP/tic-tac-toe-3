import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; 

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition shadow-md"
    >
      <ArrowLeft size={20} />
      <span>Regresar</span>
    </button>
  );
};

export default BackButton;
