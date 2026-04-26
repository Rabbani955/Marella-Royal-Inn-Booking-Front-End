import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function AdminDashboard({
  onLogout,
  bookings = [],
  refreshRooms,
}) {
  const [rooms, setRooms] = useState([]);
  const [editingPrice, setEditingPrice] = useState({});
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchRooms = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        "https://hotel-backend-jqdh.onrender.com/api/rooms/admin",
        {
          headers: { Authorization: "Bearer " + token },
        }
      );

      const data = await res.json();
      setRooms(data);
    } catch {
      toast.error("Failed to load rooms");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const handlePriceChange = (id, value) => {
    setEditingPrice({ ...editingPrice, [id]: value });
  };

  const updatePrice = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await fetch(
        `https://hotel-backend-jqdh.onrender.com/api/rooms/admin/update-price/${id}?price=${editingPrice[id]}`,
        {
          method: "PUT",
          headers: { Authorization: "Bearer " + token },
        }
      );

      toast.success("Price updated");
      fetchRooms();
      refreshRooms();
    } catch {
      toast.error("Update failed");
    }
  };

  const toggleSoldOut = async (id, currentStatus) => {
    try {
      const token = localStorage.getItem("token");

      await fetch(
        `https://hotel-backend-jqdh.onrender.com/api/rooms/admin/soldout/${id}?status=${!currentStatus}`,
        {
          method: "PUT",
          headers: { Authorization: "Bearer " + token },
        }
      );

      fetchRooms();
    } catch {
      toast.error("Error updating");
    }
  };

  const handleCheckout = async (id) => {
    const token = localStorage.getItem("token");

    await fetch(
      `https://hotel-backend-jqdh.onrender.com/api/bookings/checkout/${id}`,
      {
        method: "PUT",
        headers: { Authorization: "Bearer " + token },
      }
    );

    fetchRooms();
    refreshRooms();
  };

  const deleteBooking = async (id) => {
    const token = localStorage.getItem("token");

    await fetch(
      `https://hotel-backend-jqdh.onrender.com/api/bookings/${id}`,
      {
        method: "DELETE",
        headers: { Authorization: "Bearer " + token },
      }
    );

    fetchRooms();
    refreshRooms();
  };

  const totalRevenue = bookings.reduce((sum, b) => sum + b.totalPrice, 0);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <h2 className="text-lg text-gray-500 animate-pulse">
          Loading Dashboard...
        </h2>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#fffdf7] text-gray-800">
      <Toaster />

      {/* SIDEBAR */}
      <div className="w-64 bg-white shadow-lg p-6 border-r">
        <h2 className="text-2xl font-bold text-yellow-600 mb-10">
          🏨 Admin Panel
        </h2>

        <ul className="space-y-5 text-gray-600 font-medium">
          <li className="hover:text-yellow-600 cursor-pointer">Dashboard</li>
          <li className="hover:text-yellow-600 cursor-pointer">Rooms</li>
          <li className="hover:text-yellow-600 cursor-pointer">Bookings</li>
        </ul>

        <button
          onClick={onLogout}
          className="mt-10 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg shadow"
        >
          Logout
        </button>
      </div>

      {/* MAIN */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8 text-yellow-600">
          Dashboard Overview
        </h1>

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          {[
            { label: "Total Rooms", value: rooms.length * 5 },
            { label: "Bookings", value: bookings.length },
            { label: "Revenue", value: `₹${totalRevenue}` },
            { label: "Available", value: rooms.length },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl p-5 shadow hover:shadow-lg transition"
            >
              <p className="text-gray-500">{item.label}</p>
              <h2 className="text-2xl font-bold mt-1 text-yellow-600">
                {item.value}
              </h2>
            </div>
          ))}
        </div>

        {/* ROOMS */}
        <h2 className="text-2xl font-bold mb-5 text-yellow-600">
          Rooms Management
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white border rounded-xl p-5 shadow hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold">{room.name}</h3>

              <p
                className={`mt-2 font-bold ${
                  room.soldOut ? "text-red-500" : "text-green-500"
                }`}
              >
                {room.soldOut ? "SOLD OUT" : "AVAILABLE"}
              </p>

              <input
                type="number"
                value={editingPrice[room.id] ?? room.basePrice}
                onChange={(e) =>
                  handlePriceChange(room.id, e.target.value)
                }
                className="mt-3 w-full p-2 border rounded"
              />

              <button
                onClick={() => updatePrice(room.id)}
                className="mt-3 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded shadow"
              >
                Update Price
              </button>

              <button
                onClick={() =>
                  toggleSoldOut(room.id, room.soldOut)
                }
                className="mt-2 w-full bg-gray-800 hover:bg-black text-white py-2 rounded"
              >
                Toggle Availability
              </button>
            </div>
          ))}
        </div>

        {/* BOOKINGS */}
        <h2 className="text-2xl font-bold mb-5 text-yellow-600">
          Bookings
        </h2>

        <input
          type="text"
          placeholder="Search guest..."
          className="mb-4 p-2 border rounded w-full md:w-1/3"
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="bg-white rounded-xl shadow overflow-hidden border">
          <table className="w-full">
            <thead className="bg-yellow-100">
              <tr>
                <th className="p-3">Guest</th>
                <th className="p-3">Room</th>
                <th className="p-3">Dates</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {bookings
                .filter((b) =>
                  b.guestName
                    .toLowerCase()
                    .includes(search.toLowerCase())
                )
                .map((b) => (
                  <tr key={b.id} className="border-b">
                    <td className="p-3">{b.guestName}</td>
                    <td className="p-3">{b.roomName}</td>
                    <td className="p-3">
                      {b.checkIn} → {b.checkOut}
                    </td>
                    <td className="p-3 font-bold">
                      ₹{b.totalPrice}
                    </td>

                    <td className="p-3">
                      <span className="px-3 py-1 rounded bg-green-100">
                        {b.status}
                      </span>
                    </td>

                    <td className="p-3 flex gap-2">
                      <button
                        onClick={() => handleCheckout(b.id)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded"
                      >
                        Checkout
                      </button>

                      <button
                        onClick={() => deleteBooking(b.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}