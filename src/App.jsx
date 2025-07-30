import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
export default function App() {
  return (
    <Router>
      {/* Navigation */}
      <Navbar />
      {/* <nav className="p-4 flex gap-4 border-b bg-white shadow">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'underline text-blue-600' : '')}>
          Rockets
        </NavLink>
        <NavLink to="/missions" className={({ isActive }) => (isActive ? 'underline text-blue-600' : '')}>
          Missions
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => (isActive ? 'underline text-blue-600' : '')}>
          My Profile
        </NavLink>
      </nav> */}

      {/* <h1 className="text-4xl text-blue-500 font-bold text-center my-10">Tailwind is working!</h1> */}


      {/* Page Routes */}
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </Router >
  );
}
