import { useState } from "react";

export default function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        "https://hotel-backend-jqdh.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        },
      );

      if (!res.ok) {
        const text = await res.text();
        console.error("LOGIN ERROR:", res.status, text);
        alert("Login failed ❌");
        return;
      }

      const data = await res.json();
      const token = data.token || data.jwt || data.accessToken;

      if (!token) {
        alert("Token not received ❌");
        return;
      }

      localStorage.setItem("token", token);
      onLogin();
    } catch (err) {
      console.error(err);
      alert("Server error ⚠️");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-yellow-500 opacity-20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full bottom-10 right-10"></div>

      {/* Card */}
      <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl p-8 w-[350px]">
        {/* Logo / Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-white">Marella Admin</h1>
          <p className="text-gray-300 text-sm">Secure Login Panel</p>
        </div>

        {/* Form */}
        <form
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          {/* 🔥 Hidden fake fields (MUST be inside form, NOT inside tag) */}
          <input type="text" name="fakeuser" style={{ display: "none" }} />
          <input type="password" name="fakepass" style={{ display: "none" }} />
          
          {/* Username */}
          <div className="mb-4">
            <label className="text-gray-300 text-sm">Username</label>
            <input
              type="text"
              name="no-username"
              autoComplete="off"
              placeholder="Enter username"
              className="mt-1 w-full px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="text-gray-300 text-sm">Password</label>
            <input
              type="password"
              name="no-password"
              autoComplete="new-password"
              placeholder="Enter password"
              className="mt-1 w-full px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold hover:scale-105 transition-all duration-200 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-400 text-xs mt-6">
          © 2026 Marella Royal Inn
        </p>
      </div>
    </div>
  );
}
