const ProfileCard = () => {
    return (
      <div className="border-2 border-white  shadow-lg rounded-lg p-6 text-center">
        <img
          src="/images/smallville.jpg" 
          alt="Profile"
          className="w-24 h-24 mx-auto rounded-full object-cover"
        />
        <h2 className="text-gray-100 text-xl font-semibold mt-4">Erick Mata</h2>
        <p className="text-gray-200">Esta es mi práctica 03 de Tecnologías y Aplicaciones</p>
      </div>
    );
  };
  
  export default ProfileCard;
  