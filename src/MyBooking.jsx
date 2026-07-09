import { useState } from "react";

const formatDate = (date) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const API = "https://hotel-backend-jqdh.onrender.com/api/bookings";

export default function MyBooking({ onBack }) {
  const [bookingReference, setBookingReference] = useState("");
  const [email, setEmail] = useState("");

  const [booking, setBooking] = useState(null);
  const [bookings, setBookings] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Search by Booking Reference
  const searchByReference = async () => {
    if (!bookingReference.trim()) {
      alert("Enter Booking Reference");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setBooking(null);
      setBookings([]);

      const res = await fetch(`${API}/reference/${bookingReference}`);

      if (!res.ok) {
        throw new Error("Booking not found");
      }

      const data = await res.json();

      setBooking(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Search by Email
  const searchByEmail = async () => {
    if (!email.trim()) {
      alert("Enter Email");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setBooking(null);
      setBookings([]);

      const res = await fetch(`${API}/email/${email}`);

      if (!res.ok) {
        throw new Error("No bookings found");
      }

      const data = await res.json();

      setBookings(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-5 py-10">
      <button onClick={onBack} className="mb-8 text-yellow-600 font-semibold">
        ← Back
      </button>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8">My Booking</h1>

        {/* Booking Reference */}

        <div className="mb-8">
          <label className="font-semibold">Booking Reference</label>

          <div className="flex gap-3 mt-2">
            <input
              className="flex-1 border rounded-lg p-3"
              placeholder="BK12345678"
              value={bookingReference}
              onChange={(e) => setBookingReference(e.target.value)}
            />

            <button
              onClick={searchByReference}
              className="bg-yellow-500 text-white px-6 rounded-lg"
            >
              Search
            </button>
          </div>
        </div>

        {/* OR */}

        <div className="text-center my-5 font-bold">OR</div>

        {/* Email */}

        <div>
          <label className="font-semibold">Email</label>

          <div className="flex gap-3 mt-2">
            <input
              className="flex-1 border rounded-lg p-3"
              placeholder="abc@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              onClick={searchByEmail}
              className="bg-blue-600 text-white px-6 rounded-lg"
            >
              Search
            </button>
          </div>
        </div>

        {/* Loading */}

        {loading && (
          <div className="text-center mt-8">
            <div className="text-center mt-8">
              <div className="animate-spin h-10 w-10 border-4 border-yellow-500 border-t-transparent rounded-full mx-auto"></div>

              <p className="mt-3">Searching booking...</p>
            </div>
          </div>
        )}

        {/* Error */}

        {error && <div className="text-red-600 text-center mt-8">{error}</div>}

        {/* Booking By Reference */}

        {booking && (
          <>
            <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5 mt-10 mb-6">
              <h2 className="text-2xl font-bold text-yellow-700">
                Booking Summary
              </h2>

              <div className="grid md:grid-cols-2 gap-5 mt-5">
                <div>
                  <p className="text-gray-500">Booking Reference</p>
                  <p className="font-bold">{booking.bookingReference}</p>
                </div>

                <div>
                  <p className="text-gray-500">Total Amount</p>
                  <p className="font-bold text-yellow-600 text-xl">
                    ₹ {booking.totalPrice}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 border rounded-2xl p-6 shadow">
              <h2 className="text-2xl font-bold mb-5 text-green-700">
                Booking Details
              </h2>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <p className="text-gray-500">Booking Reference</p>
                  <p className="font-semibold">{booking.bookingReference}</p>
                </div>

                <div>
                  <p className="text-gray-500">Guest Name</p>
                  <p className="font-semibold">{booking.guestName}</p>
                </div>

                <div>
                  <p className="text-gray-500">Email</p>
                  <p>{booking.email}</p>
                </div>

                <div>
                  <p className="text-gray-500">Phone</p>
                  <p>{booking.phone}</p>
                </div>

                <div>
                  <p className="text-gray-500">Room</p>
                  <p>{booking.roomName}</p>
                </div>

                <div>
                  <p className="text-gray-500">Guests</p>
                  <p>{booking.guests}</p>
                </div>

                <div>
                  <p className="text-gray-500">Rooms Booked</p>
                  <p>{booking.roomsCount}</p>
                </div>

                <div>
                  <p className="text-gray-500">Check-In</p>
                  <p>{formatDate(booking.checkIn)}</p>
                </div>

                <div>
                  <p className="text-gray-500">Check-Out</p>
                  <p>{formatDate(booking.checkOut)}</p>
                </div>

                <div>
                  <p className="text-gray-500">Payment Method</p>
                  <p>{booking.paymentMethod}</p>
                </div>

                <div>
                  <p className="text-gray-500">Payment Status</p>

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-bold ${
                      booking.paymentStatus === "SUCCESS"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {booking.paymentStatus}
                  </span>
                </div>

                <div>
                  <p className="text-gray-500">Booking Status</p>

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-bold ${
                      booking.status === "CHECKED_IN"
                        ? "bg-green-100 text-green-700"
                        : booking.status === "CHECKED_OUT"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-red-100 text-red-700"
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>

                <div>
                  <p className="text-gray-500">Total Price</p>

                  <p className="text-2xl font-bold text-yellow-600">
                    ₹ {booking.totalPrice}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <button
                  onClick={() => window.print()}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
                >
                  Download Receipt
                </button>
                {booking.status !== "CANCELLED" &&
                  booking.status !== "CHECKED_OUT" && (
                    <button
                      onClick={async () => {
                        if (
                          !window.confirm(
                            "Are you sure you want to cancel this booking?",
                          )
                        ) {
                          return;
                        }

                        try {
                          const response = await fetch(
                            `${API}/cancel/${booking.id}`,
                            {
                              method: "PUT",
                            },
                          );

                          if (!response.ok) {
                            const text = await response.text();
                            throw new Error(text || "Cancellation failed");
                          }

                          const updatedBooking = await response.json();

                          setBooking(updatedBooking);

                          alert("Booking cancelled successfully.");
                        } catch (error) {
                          alert(error.message);
                        }
                      }}
                      className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg"
                    >
                      Cancel Booking
                    </button>
                  )}
              </div>
            </div>
          </>
        )}

        {/* Bookings By Email */}

        {bookings.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-6">Your Bookings</h2>

            <div className="space-y-5">
              {bookings.map((b) => (
                <div key={b.id} className="border rounded-xl p-5 shadow">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-gray-500">Status</p>

                      <span
                        className={`px-2 py-1 rounded-full text-xs font-bold ${
                          b.status === "CHECKED_IN"
                            ? "bg-green-100 text-green-700"
                            : b.status === "CHECKED_OUT"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {b.status}
                      </span>
                    </div>
                    <div>
                      <p className="text-gray-500">Reference</p>
                      <p className="font-bold">{b.bookingReference}</p>
                    </div>

                    <div>
                      <p className="text-gray-500">Room</p>
                      <p>{b.roomName}</p>
                    </div>

                    <div>
                      <p className="text-gray-500">Guests</p>
                      <p>{b.guests}</p>
                    </div>

                    <div>
                      <p className="text-gray-500">Check-In</p>
                      <p>{formatDate(b.checkIn)}</p>
                    </div>

                    <div>
                      <p className="text-gray-500">Check-Out</p>
                      <p>{formatDate(b.checkOut)}</p>
                    </div>

                    <div>
                      <p className="text-gray-500">Price</p>
                      <p className="font-bold text-yellow-600">
                        ₹ {b.totalPrice}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
