import { FiSearch } from "react-icons/fi";
import { IoNotifications } from "react-icons/io5";

const Header = () => {
  return (
    <header className="flex justify-between pt-9 items-center">
      {/* logo */}
      <div className="w-1/3"></div>
      {/* links section */}
      <div className="w-1/3">
        <ul className="flex justify-evenly">
          <li>Products</li>
          <span>•</span>
          <li>Gallery</li>
          <span>•</span>
          <li>About Us</li>
        </ul>
      </div>
      {/* search section */}
      <div className="w-1/3 flex justify-end items-center gap-5">
        <FiSearch />
        <div>
          <IoNotifications />
        </div>
        <img
          src="/assets/images/girl-avatar.png"
          alt="avatar"
          className="border-2 border-[#FBB03B] rounded-full p-1"
        />
      </div>
    </header>
  );
};

export default Header;
