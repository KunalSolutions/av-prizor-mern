import { NavLink } from "react-router-dom";

const Pages = () => {
  const baseStyle =
    "text-sm font-medium text-indigo-500 transition duration-200";

  const activeStyle =
    "underline underline-offset-4 decoration-2 text-black  ";

  const inactiveStyle =
    "text-slate-700 hover:text-indigo-600";

  return (
    <nav className="hidden md:flex items-center gap-8">
      
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
        }
      >
        About
      </NavLink>

      {/* <a
        href="/#products"
        className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition duration-200"
      >
        Product
      </a> */}

      <NavLink
        to="/blog"
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
        }
      >
        Blog
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
        }
      >
        Contact
      </NavLink>

    </nav>
  );
};

export default Pages;
