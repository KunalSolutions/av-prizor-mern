import { NavLink } from "react-router-dom";

const Pages = () => {
  const baseStyle =
    "relative text-sm font-medium text-white transition-all duration-300";

  return (
    <nav className="hidden md:flex items-center gap-10">
      
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `${baseStyle} ${
            isActive
              ? "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white"
              : "hover:opacity-80"
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/shop"
        className={({ isActive }) =>
          `${baseStyle} ${
            isActive
              ? "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white"
              : "hover:opacity-80"
          }`
        }
      >
        Shop
      </NavLink>

      <NavLink
        to="/blog"
        className={({ isActive }) =>
          `${baseStyle} ${
            isActive
              ? "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white"
              : "hover:opacity-80"
          }`
        }
      >
        Blog
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `${baseStyle} ${
            isActive
              ? "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white"
              : "hover:opacity-80"
          }`
        }
      >
        Contact
      </NavLink>

    </nav>
  );
};

export default Pages;