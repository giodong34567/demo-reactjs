import { Link, NavLink } from "react-router-dom";

function Header() {
  const routes = [
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Contact", path: "/contact" },
    { label: "Product", path: "/products" },
  ];

  return (
    <div className="flex justify-center gap-6 bg-gray-100 p-4 mx-auto">
      {routes.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold underline"
              : "text-gray-700 hover:text-blue-400"
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}

export default Header;
