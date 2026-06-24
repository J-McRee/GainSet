import { NavLink } from 'react-router-dom';
import { logout } from '../api/auth';
import { useNavigate } from 'react-router-dom';

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: '⊞' },
  { to: '/kitchen', label: 'Kitchen', icon: '🥗' },
  { to: '/fitness', label: 'Fitness', icon: '💪' },
  { to: '/habits', label: 'Habits', icon: '✅' },
];

export default function Sidebar() {
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/login');
  }

  return (
    <aside className="w-56 min-h-screen bg-gray-900 border-r border-gray-800 flex flex-col">
      <div className="px-4 py-5 border-b border-gray-800">
        <span className="text-lg font-bold text-white tracking-tight">Gainset</span>
        <p className="text-xs text-gray-500 mt-0.5">Your life, dialed in</p>
      </div>

      <nav className="flex-1 py-4 space-y-0.5 px-2">
        {navItems.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                isActive
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`
            }
          >
            <span>{icon}</span>
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="p-2 border-t border-gray-800">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
        >
          <span>→</span> Log out
        </button>
      </div>
    </aside>
  );
}
