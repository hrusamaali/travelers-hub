// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <header className="bg-white shadow">
            <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo on the left */}
                <div className="text-2xl font-bold text-blue-600">
                    Travelers Hub
                </div>

                {/* Navigation links on the right */}
                <ul className="flex space-x-6 text-sm sm:text-base">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'text-blue-600 font-semibold underline' : 'text-gray-700 hover:text-blue-600'
                            }
                        >
                            Rockets
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/missions"
                            className={({ isActive }) =>
                                isActive ? 'text-blue-600 font-semibold underline' : 'text-gray-700 hover:text-blue-600'
                            }
                        >
                            Missions
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/profile"
                            className={({ isActive }) =>
                                isActive ? 'text-blue-600 font-semibold underline' : 'text-gray-700 hover:text-blue-600'
                            }
                        >
                            My Profile
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
