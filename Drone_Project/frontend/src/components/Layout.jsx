import { useState } from 'react';
import Navbar from './Navbar';
import ViewConfig from '../pages/ViewConfig';
import TemperatureFormPage from '../pages/TemperatureFormPage';
import ViewLogs from '../pages/ViewLogs';
import ThemeToggle from './ThemeToggle';
import UserProfile from './UserProfile';
import LoginForm from '../pages/LoginForm';

export default function Layout() {
  const [activeDroneId, setActiveDroneId] = useState(import.meta.env.VITE_DRONE_ID);
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="flex min-h-screen h-100 bg-theme text-theme">
      <Navbar />
      <main className="flex-1 p-6 space-y-10 overflow-y-auto">
        <div className="grid grid-cols-1 gap-6">
          {/* Header Section */}
          <div className="flex justify-end gap-6 items-center">
            <ThemeToggle />
            {!user && (
              <button
                onClick={() => setShowLogin(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Login
              </button>
            )}
            {user && (
              <div className="flex items-center gap-4">
                <UserProfile
                  name={user.username}
                  avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxwl4fhem6m2urbLPsROL7UHP2tjF4CowszALXe5IwDIMG7C2VdCqSyLCsNi4mrqWuKJgVE215SQCpX3TOTQSUgwhOnN_kBr2FB6omLvWww&s=10"
                />
                <button
                  onClick={() => setUser(null)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
          {/* Modal LoginForm */}
          {showLogin && !user && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded shadow-lg">
                <LoginForm
                  onLogin={(data) => {
                    setUser(data);
                    setShowLogin(false);
                  }}
                />
                <button
                  onClick={() => setShowLogin(false)}
                  className="mt-4 text-sm text-gray-500 hover:underline"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <section>
              <ViewConfig droneId={activeDroneId} />
            </section>
            <section>
              <TemperatureFormPage setDroneId={setActiveDroneId} />
            </section>
          </div>
          <section>
            <ViewLogs droneId={activeDroneId} />
          </section>
        </div>
      </main>
    </div>
  );
}