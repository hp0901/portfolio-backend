import React, { useState } from "react";

const SettingsPage = () => {
  const [username, setUsername] = useState("john_doe");
  const [email, setEmail] = useState("john@example.com");
  const [password, setPassword] = useState("");
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
  });

  const handleNotificationChange = (e) => {
    setNotifications({
      ...notifications,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your save logic here
    alert("Settings saved!");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white/10 backdrop-blur rounded-xl text-white">
      <h2 className="text-3xl font-semibold mb-6">Settings</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Username */}
        <div>
          <label className="block mb-2 font-medium" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="w-full px-4 py-2 rounded-md bg-white/20 focus:bg-white/30 focus:outline-none text-white"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 font-medium" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-2 rounded-md bg-white/20 focus:bg-white/30 focus:outline-none text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div>
          <label className="block mb-2 font-medium" htmlFor="password">
            New Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-2 rounded-md bg-white/20 focus:bg-white/30 focus:outline-none text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Notifications */}
        <fieldset>
          <legend className="mb-2 font-medium">Notification Preferences</legend>

          <label className="flex items-center gap-3 mb-2">
            <input
              type="checkbox"
              name="email"
              checked={notifications.email}
              onChange={handleNotificationChange}
              className="w-5 h-5 rounded bg-white/20 checked:bg-indigo-600 text-indigo-600"
            />
            Email Notifications
          </label>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              name="sms"
              checked={notifications.sms}
              onChange={handleNotificationChange}
              className="w-5 h-5 rounded bg-white/20 checked:bg-indigo-600 text-indigo-600"
            />
            SMS Notifications
          </label>
        </fieldset>

        {/* Save Button */}
        <button
          type="submit"
          className="px-6 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 transition-colors font-semibold"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
