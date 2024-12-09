import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart, faUserCircle } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-black">
          <Link href="/">SHOP.CO</Link>
        </h1>
        
        {/* Navigation Links */}
        <ul className="ml-8 flex items-center space-x-6">
          <li>
            <Link href="/shop" className="hover:text-gray-700 text-black font-medium">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/on-sale" className="hover:text-gray-700 text-black font-medium">
              On Sale
            </Link>
          </li>
          <li>
            <Link href="/new-arrivals" className="hover:text-gray-700 text-black font-medium">
              New Arrivals
            </Link>
          </li>
        </ul>

        {/* Search Bar and Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              className="w-64 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black font-medium"
              placeholder="Search for products..."
            />
            <button className="absolute right-2 top-2">
              <FontAwesomeIcon icon={faSearch} className="h-5 w-5 text-gray-400" />
            </button>
          </div>

          {/* Cart Icon */}
          <button>
            <FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5 text-gray-400" />
          </button>

          {/* Account Icon */}
          <button>
            <FontAwesomeIcon icon={faUserCircle} className="h-5 w-5 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
