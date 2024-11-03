import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar  z-50 backdrop-blur-sm bg-white/30 fixed  bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu md:gap-10 gap-4 menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`} to='/'>Home</NavLink>
                        <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`} to='coffee'>Coffee</NavLink>
                        <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`} to='dashboard'>Deashboard</NavLink>
                    </ul>
                </div>
                <a className="text-xl">COFFEE_BOOK</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu gap-10 menu-horizontal px-1">
                    <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`} to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`} to='coffee'>Coffee</NavLink>
                    <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`} to='dashboard'>Deashboard</NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;