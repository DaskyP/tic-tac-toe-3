import MenuOptions from "../components/MenuOptions";
import ProfileCard from "../components/ProfileCard";


const Menu = () => {
  return (
    <div className="flex h-screen bg-gray-100 justify-center items-center">
      <div className="w-1/4 p-4">
        <ProfileCard />
      </div>

      <div className="w-3/4 p-6">
        <MenuOptions />
      </div>
    </div>
  );
};

export default Menu;
