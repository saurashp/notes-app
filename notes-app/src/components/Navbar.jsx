import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="bg-slate-900 border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-white">Notes App</h1>

        <div className="flex gap-6 text-sm">
          <Link
            to="/"
            className={`${
              pathname === "/" ? "text-blue-400" : "text-slate-300"
            } hover:text-blue-400`}
          >
            Home
          </Link>

          <Link
            to="/create"
            className={`${
              pathname === "/create" ? "text-blue-400" : "text-slate-300"
            } hover:text-blue-400`}
          >
            Create
          </Link>
        </div>
      </div>
    </nav>
  );
}
