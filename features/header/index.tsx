import { FiSearch } from "react-icons/fi";
import { IoNotifications } from "react-icons/io5";

const Header = () => {
  return (
    <header className="flex justify-between py-9 items-center">
      {/* logo */}
      <div className="w-1/3">
        <img src="/assets/images/logo.png" alt="logo" />
      </div>
      {/* links section */}
      <div className="w-1/3">
        <ul className="flex justify-evenly font-poppinsMedium">
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
        <div className="relative">
          <IoNotifications />
          <span className="w-2 h-2 bg-red-600 absolute top-0 right-0 rounded-full border border-white" />
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
