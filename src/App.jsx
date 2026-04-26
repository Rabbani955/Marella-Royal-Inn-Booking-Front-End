import React, { useState, useEffect } from "react";

import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import {
  Calendar,
  User,
  CreditCard,
  CheckCircle,
  Star,
  MapPin,
  Wifi,
  Coffee,
  Tv,
  ArrowLeft,
  ChevronRight,
  Bed,
  ShowerHead,
  Wind,
  Briefcase,
  Lock,
  Shirt,
  Armchair,
  Phone,
  Ban,
  ShieldCheck,
  ConciergeBell,
  Brush,
  Utensils,
  Monitor,
  GlassWater,
  Layers,
  Droplets,
  Smile,
  Scissors,
  Cloud,
  Footprints,
  Droplet,
  Beaker,
  BedDouble,
  Users,
  ChevronLeft,
  ChevronDown,
} from "lucide-react";
import room1 from "./assets/Room1.png";
import room2 from "./assets/Room2.png";
import room3 from "./assets/Room3.png";
import room4 from "./assets/Room4.png";
import room5 from "./assets/Room5.png";
import room6 from "./assets/Room6.png";
import room7 from "./assets/Room7.png";
import room8 from "./assets/Room8.png";

import bathroom1 from "./assets/Bathroom1.jpg";
import bathroom2 from "./assets/Bathroom2.jpg";

import logo from "./assets/Hotel Logo.jpg";
import receptionVideo from "./assets/reception.mp4";

const loadRazorpay = () => {
  return new Promise((resolve) => {
    // ✅ Check if already loaded
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    // ✅ Check if script already exists
    const existingScript = document.querySelector(
      'script[src="https://checkout.razorpay.com/v1/checkout.js"]',
    );

    if (existingScript) {
      existingScript.onload = () => resolve(true);
      return;
    }

    // ✅ Create new script only once
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);

    document.body.appendChild(script);
  });
};

// --- MOCK DATA (Simulating Spring Boot GET /api/rooms) ---
const MOCK_ROOMS = [
  {
    id: 1,
    name: "Standard Room",
    images: [room5, room4, room6, bathroom1],
    description:
      "The Standard Room is designed to provide a comfortable and affordable stay for solo travelers or couples. The room features a cozy bed, modern furnishings, air conditioning, free Wi-Fi, a flat-screen TV, and a clean private bathroom with essential toiletries. It offers a peaceful environment where guests can relax after a long day of travel or work. Perfect for short stays, the Standard Room combines comfort, convenience, and value.",
    basePrice: 1100,
    extraGuestPrice: 500,
    rating: 4.4,
    amenities: [
      {
        name: "High-Speed WiFi",
        icon: <Wifi size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "Flat-screen TV",
        icon: <Tv size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "Fan",
        icon: <Wind size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "Rain Showers",
        icon: <ShowerHead size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "Daily Housekeeping",
        icon: <Brush size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "Mineral Water",
        icon: <GlassWater size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "Fresh Towels",
        icon: <Layers size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "Dental Kit",
        icon: <Smile size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "Shampoo",
        icon: <Droplet size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "Soap",
        icon: <Beaker size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "Combo Kit",
        icon: <Layers size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "In room intercom",
        icon: <Phone size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "24x7 Security",
        icon: (
          <ShieldCheck size={20} className="mr-3 text-[#FFC107] shrink-0" />
        ),
      },
    ],
  },
  {
    id: 2,
    name: "Deluxe Room",
    images: [room4, room1, room2, room3, bathroom2],
    description:
      "The Deluxe Room offers a more spacious and luxurious experience for guests who want extra comfort. This room includes a large comfortable bed, elegant interior design, air conditioning, high-speed Wi-Fi, a smart TV, wardrobe space, and a modern attached bathroom. Guests can enjoy additional seating space and enhanced room amenities that make their stay more relaxing and enjoyable. The Deluxe Room is ideal for couples or business travelers seeking a premium stay experience.",
    basePrice: 1400,
    extraGuestPrice: 600,
    rating: 4.7,
    amenities: [
      {
        name: "High-Speed WiFi",
        icon: <Wifi size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "Smart TV",
        icon: <Tv size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "Air Conditioner",
        icon: <Wind size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "Cloud Beds™",
        icon: <Bed size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "Digital Safe",
        icon: <Lock size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "Desk & Chair",
        icon: <Armchair size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "Tea / Coffee kettles",
        icon: <Coffee size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "Body & Hair Wash",
        icon: <Droplets size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "Dental Kit",
        icon: <Smile size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "Shampoo",
        icon: <Droplet size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "Soap",
        icon: <Beaker size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "Combo Kit",
        icon: <Layers size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "Rain Showers",
        icon: <ShowerHead size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "24x7 Reception",
        icon: (
          <ConciergeBell size={20} className="mr-3 text-[#FFC107] shrink-0" />
        ),
      },
    ],
  },
  {
    id: 3,
    name: "Family Room",
    images: [room1, room8, room4, room2, bathroom2],
    description:
      "The Family Room is specially designed for families or groups traveling together. It provides a larger living space with multiple beds to comfortably accommodate several guests. The room includes air conditioning, free Wi-Fi, a flat-screen TV, spacious seating area, wardrobe, and a fully equipped private bathroom. With its roomy layout and comfortable amenities, the Family Room ensures that families can enjoy a relaxing and memorable stay together.",
    basePrice: 1500,
    extraGuestPrice: 600,
    rating: 4.9,
    amenities: [
      {
        name: "High-Speed WiFi",
        icon: <Wifi size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: '32" TV',
        icon: <Tv size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "Air Conditioner",
        icon: <Wind size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "Extra Bed*",
        icon: <BedDouble size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "Luggage Storage",
        icon: <Briefcase size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "Cloth Hanging Unit",
        icon: <Shirt size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "Dental Kit",
        icon: <Smile size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "Shampoo",
        icon: <Droplet size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "Soap",
        icon: <Beaker size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "Combo Kit",
        icon: <Layers size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "Daily Housekeeping",
        icon: <Brush size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "In room intercom",
        icon: <Phone size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
    ],
  },
];

// --- AMENITIES DATA (Matched to User Image) ---
const AMENITIES_GROUPS = [
  {
    title: "Basic Amenities",
    items: [
      { name: "Free Wi-Fi", icon: <Wifi size={36} /> },
      { name: "Air Conditioner", icon: <Wind size={36} /> },
      { name: "TV", icon: <Tv size={36} /> },
      { name: "Mineral Water", icon: <GlassWater size={36} /> },
    ],
  },
  {
    title: "Bathroom Essentials",
    items: [
      { name: "Shampoo", icon: <Droplet size={36} /> },
      { name: "Soap", icon: <Beaker size={36} /> },
      { name: "Dental Kit", icon: <Smile size={36} /> },
    ],
  },
  {
    title: "Refreshments & Entertainment",
    items: [
      { name: "Electric Kettle", icon: <Coffee size={36} /> },
      { name: "Instant Milk", icon: <GlassWater size={36} /> },
      { name: "Coffee", icon: <Coffee size={36} /> },
      { name: "Tea Powder", icon: <Beaker size={36} /> },
      { name: "Android TV", icon: <Tv size={36} /> },
    ],
  },
];

export default function App() {
  const [currentView, setCurrentView] = useState("home");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [occupiedRooms, setOccupiedRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [adminBookings, setAdminBookings] = useState([]);
  const [bookingDetails, setBookingDetails] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
    guestName: "",
    email: "",
    phone: "",
    message: "",
    total: 0,
    paymentMethod: "card",
  });

  /*const fetchBookings = () => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:8080/api/bookings/admin", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text();
          console.error("❌ API ERROR:", res.status, text);
          throw new Error("Failed to fetch bookings");
        }
        return res.json();
      })
      .then((data) => {
        console.log("📦 DATA RECEIVED:", data);
        setAdminBookings(data);
      })
      .catch((err) => {
        console.error("❌ Fetch Failed:", err);
        setAdminBookings([]);
      });
  }; */

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No token found. Please login again.");
      }

      const res = await fetch(
        "https://hotel-backend-jqdh.onrender.com/api/bookings/admin",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        },
      );

      if (!res.ok) {
        const text = await res.text();
        console.error("❌ API ERROR:", res.status, text);
        throw new Error("Failed to fetch bookings");
      }

      const data = await res.json();
      console.log("✅ BOOKINGS:", data);

      setAdminBookings(data);
    } catch (err) {
      console.error("❌ Fetch Failed:", err.message);
      setAdminBookings([]);
    }
  };

  const fetchOccupiedRooms = () => {
    fetch("https://hotel-backend-jqdh.onrender.com/api/bookings/occupied-rooms")
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text();
          console.error("Occupied rooms error:", res.status, text);
          throw new Error("Failed");
        }
        return res.json();
      })
      .then((data) => setOccupiedRooms(data))
      .catch((err) => {
        console.error(err);
        setOccupiedRooms([]);
      });
  };

  // ✅ DELETE BOOKING (FIXED)
  const deleteBooking = (id) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Unauthorized ❌");
      return;
    }

    fetch(`https://hotel-backend-jqdh.onrender.com/api/bookings/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        if (!res.ok) {
          console.error("Delete failed ❌");
          return;
        }
        fetchBookings();
      })
      .catch((err) => {
        console.error(err);
        console.error("Delete failed ❌");
      });
  };

  const handleCheckout = (id) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Unauthorized ❌");
      return;
    }

    fetch(
      `https://hotel-backend-jqdh.onrender.com/api/bookings/checkout/${id}`,
      {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    )
      .then((res) => {
        if (!res.ok) {
          console.error("Checkout failed ❌");
          return;
        }
        alert("Guest checked out ✅");
        fetchBookings();
        fetchOccupiedRooms(); // ✅ ADD THIS LINE
      })
      .catch((err) => {
        console.error(err);
        console.error("Checkout failed ❌");
      });
  };

  const fetchRooms = async () => {
    try {
      const token = localStorage.getItem("token");

      const headers = {
        "Content-Type": "application/json",
      };

      // ✅ Attach token only if valid
      if (token && token !== "null" && token !== "undefined") {
        headers.Authorization = "Bearer " + token;
      }

      const res = await fetch(
        "https://hotel-backend-jqdh.onrender.com/api/rooms",
        {
          method: "GET",
          headers: headers,
        },
      );

      if (!res.ok) {
        throw new Error(`API failed: ${res.status}`);
      }

      const data = await res.json();
      //console.log("ROOMS DATA:", data);

      // ✅ Merge backend + MOCK (FIXED)
      const updatedRooms = data.map((room) => {
        const mockRoom = MOCK_ROOMS.find(
          (m) => m.name?.toLowerCase() === room.name?.toLowerCase(),
        );

        return {
          ...room,

          // ✅ Always ensure image exists
          images: mockRoom?.images || ["https://via.placeholder.com/400"],

          // ✅ UI fields from mock
          description: mockRoom?.description || "",
          amenities: mockRoom?.amenities || [],
          rating: mockRoom?.rating || 4.5,
          extraGuestPrice: mockRoom?.extraGuestPrice || 500,
        };
      });

      setRooms([...updatedRooms]); // 🔥 IMPORTANT FIX
    } catch (err) {
      console.error("❌ Rooms fetch failed:", err);

      // ✅ fallback if backend fails
      setRooms(MOCK_ROOMS);
    }
  };

  /*useEffect(() => {
    fetchRooms();

    // ✅ Refresh rooms every 5 seconds (PRICE UPDATE FIX)
    const roomInterval = setInterval(() => {
      fetchRooms();
    }, 5000);

    // ✅ Existing occupied rooms refresh
    const occupiedInterval = setInterval(() => {
      fetchOccupiedRooms();
    }, 5000);

    return () => {
      clearInterval(roomInterval);
      clearInterval(occupiedInterval);
    };
  }, []); */

  /*useEffect(() => {
    fetchRooms();
  }, []);*/

  useEffect(() => {
    if (currentView === "home") {
      fetchRooms();
    }
  }, [currentView]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token && token !== "null" && token !== "undefined") {
      setIsAdminLoggedIn(true);
      fetchBookings();
    } else {
      setIsAdminLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");

      if (!token || token === "null" || token === "undefined") {
        setIsAdminLoggedIn(false);

        setCurrentView((prev) =>
          prev === "admin_dashboard" ? "admin_login" : prev,
        );
      }
    };

    window.addEventListener("storage", checkAuth);

    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const handleSelectRoom = (room) => {
    setSelectedRoom(room);
    setCurrentView("room_details");
    window.scrollTo(0, 0);
  };

  const handleProceedToCheckout = (datesAndGuests, total) => {
    setBookingDetails((prev) => ({ ...prev, ...datesAndGuests, total }));
    setCurrentView("checkout");
    window.scrollTo(0, 0);
  };

  const handleConfirmBooking = async (formData, paymentMethod) => {
    const bookedCount = occupiedRooms.filter(
      (r) => r === selectedRoom.name,
    ).length;

    if (selectedRoom && bookedCount >= 5) {
      alert("All rooms are occupied ❌");
      return;
    }

    if (isSubmitting) return;

    setIsSubmitting(true);

    const bookingReference = "HMRI-" + Date.now().toString().slice(-6);

    const updatedDetails = {
      ...bookingDetails,
      bookingReference,
      paymentMethod: paymentMethod === "hotel" ? "Pay at Hotel" : "Card",
    };

    setBookingDetails(updatedDetails);

    const bookingData = {
      guestName: formData.guestName,
      email: formData.email,
      phone: formData.phone,
      roomName: selectedRoom?.name,
      guests: updatedDetails.guests,
      checkIn: updatedDetails.checkIn,
      checkOut: updatedDetails.checkOut,
      totalPrice: updatedDetails.total,
      paymentMethod: paymentMethod === "hotel" ? "Pay at Hotel" : "Card",
      bookingReference: bookingReference,
    };

    // ✅ WhatsApp message
    const messageDetails = `*New Booking Request!*

Booking Reference: ${bookingReference}

Guest: ${formData.guestName}
Phone: ${formData.phone}

Room: ${selectedRoom?.name}
Guests: ${updatedDetails.guests}

Dates: ${updatedDetails.checkIn} to ${updatedDetails.checkOut}

Total: ₹${updatedDetails.total}

Payment: ${bookingData.paymentMethod}

Special Request: ${formData.message || "None"}`;

    //const HOTEL_PHONE = "917780423648";
    const HOTEL_PHONE = import.meta.env.VITE_HOTEL_PHONE || "917780423648";
    const whatsappUrl = `https://wa.me/${HOTEL_PHONE}?text=${encodeURIComponent(messageDetails)}`;

    // ✅ EMAIL DATA
    const templateParams = {
      booking_reference: bookingReference,
      guest_name: formData.guestName,
      guest_email: formData.email,
      guest_phone: formData.phone,
      room_name: selectedRoom?.name,
      guests: updatedDetails.guests,
      check_in: updatedDetails.checkIn,
      check_out: updatedDetails.checkOut,
      total: updatedDetails.total,
      payment_method: bookingData.paymentMethod,
      special_request: formData.message || "None",
    };

    // =========================
    // 🔥 PAYMENT FLOW CONTROL
    // =========================

    try {
      console.log("Payment Method:", paymentMethod);

      // ✅ FORCE Pay-at-Hotel flow (temporary fix)
      if (paymentMethod === "hotel") {
        // ✅ 1. Save booking in DB
        const res = await fetch(
          "https://hotel-backend-jqdh.onrender.com/api/bookings",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(bookingData),
          },
        );

        if (!res.ok) {
          throw new Error("Booking failed");
        }

        // WhatsApp
        window.open(whatsappUrl, "_blank");

        // Background emails
        fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: "service_79vxn5l",
            template_id: "template_hj48bne",
            user_id: "n94jEJBXkDeCf_eH4",
            template_params: templateParams,
          }),
        }).catch(() => {});

        fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: "service_79vxn5l",
            template_id: "template_lf1532q",
            user_id: "n94jEJBXkDeCf_eH4",
            template_params: {
              ...templateParams,
              to_email: formData.email,
            },
          }),
        }).catch(() => {});

        // ✅ CRITICAL FIX
        setIsSubmitting(false); // force reset BEFORE navigation
        setCurrentView("success");

        return;
      }
    } catch (err) {
      console.error(err);
      alert("Booking failed ❌");
    } finally {
      setIsSubmitting(false); // 🔥 ALWAYS RUNS
    }
  };

  const goHome = () => {
    setCurrentView("home");
    setSelectedRoom(null);
    setBookingDetails({
      checkIn: "",
      checkOut: "",
      guests: 1,
      guestName: "",
      email: "",
      phone: "",
      message: "",
      total: 0,
      paymentMethod: "card",
    });
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-[#FFC107] selection:text-slate-900">
      {/* Top Navigation Bar */}
      <nav className="bg-white shadow-sm border-b border-slate-100 sticky top-0 z-50">
        <div className="relative w-full h-20 flex items-center justify-between">
          <div
            className="flex items-center cursor-pointer group z-10 ml-4"
            onClick={goHome}
          >
            {/* Using the provided Hotel Logo here */}
            <img
              src={logo}
              alt="Hotel Marella Royal Inn Logo"
              className="h-16 w-auto object-contain group-hover:scale-105 transition-transform mr-4"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <span className="font-extrabold text-1xl md:text-1xl tracking-tight text-slate-600 font-serif">
              Hotel Marella Royal Inn
            </span>
          </div>

          {/* Right Side: Links (Kept exactly in the same place) */}
          <div className="flex items-center gap-4 mr-6">
            {/*  <button
              onClick={() => {
                const token = localStorage.getItem("token");

                if (token && token !== "null" && token !== "undefined") {
                  fetchBookings();
                  setIsAdminLoggedIn(true);
                  setCurrentView("admin_dashboard");
                } else {
                  setCurrentView("admin_login");
                }
              }}
              className="bg-black text-white px-4 py-2 rounded"
            > */}
            <button
              onClick={() => {
                setCurrentView("admin_login"); // 🔥 ALWAYS GO TO LOGIN FIRST
              }}
            >
              Admin
            </button>

            <div className="hidden md:flex space-x-8 text-sm font-semibold text-slate-600">
              <a href="#rooms">Rooms</a>
              <a href="#amenities">Amenities</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="pb-20">
        {currentView === "home" && (
          <HomeView
            rooms={rooms}
            occupiedRooms={occupiedRooms}
            onSelectRoom={handleSelectRoom}
          />
        )}
        {currentView === "room_details" && (
          <RoomDetailsView
            room={selectedRoom}
            occupiedRooms={occupiedRooms} // ✅ ADD THIS
            onBack={() => setCurrentView("home")}
            onProceed={handleProceedToCheckout}
          />
        )}
        {currentView === "checkout" && (
          <CheckoutView
            room={selectedRoom}
            bookingDetails={bookingDetails}
            onBack={() => setCurrentView("room_details")}
            onSubmit={handleConfirmBooking}
            isSubmitting={isSubmitting}
          />
        )}
        {currentView === "success" && (
          <SuccessView
            onHome={goHome}
            bookingDetails={bookingDetails}
            room={selectedRoom}
          />
        )}
        {currentView === "admin_login" && (
          <AdminLogin
            onLogin={() => {
              setIsAdminLoggedIn(true);
              fetchBookings(); // 🔥 ADD THIS

              setCurrentView("admin_dashboard");
            }}
          />
        )}

        {currentView === "admin_dashboard" &&
          (isAdminLoggedIn ? (
            <AdminDashboard
              bookings={adminBookings}
              refreshRooms={fetchRooms}
              onDelete={deleteBooking}
              onCheckout={handleCheckout}
              onLogout={() => {
                localStorage.removeItem("token");
                //onDelete = { deleteBooking };
                //onCheckout = { handleCheckout };
                setIsAdminLoggedIn(false);
                setCurrentView("home");
              }}
            />
          ) : (
            <AdminLogin
              onLogin={() => {
                setIsAdminLoggedIn(true);
                fetchBookings();
                setCurrentView("admin_dashboard");
              }}
            />
          ))}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-14 pb-8 border-t-4 border-[#FFC107]">
        {/* GRID */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1 - Logo & About */}
          <div>
            <div className="bg-white inline-block p-2 rounded-xl mb-4">
              <img
                src={logo}
                alt="Hotel Marella Royal Inn Logo"
                className="h-16 object-contain"
                onError={(e) => {
                  e.target.parentElement.style.display = "none";
                }}
              />
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Experience luxury, comfort, and premium hospitality at Marella
              Royal Inn. Book your stay with ease and confidence.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-5">
              <a href="#" className="hover:text-[#FFC107] text-lg">
                📸
              </a>
              <a href="#" className="hover:text-[#FFC107] text-lg">
                👍
              </a>
              <a href="#" className="hover:text-[#FFC107] text-lg">
                🐦
              </a>
            </div>
          </div>

          {/* Column 2 - Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>

            <p className="text-sm mb-3 flex items-start">
              <MapPin size={16} className="mr-2 text-[#FFC107] mt-1" />
              <a
                href="https://maps.google.com/?q=RNSIT Bangalore"
                target="_blank"
                className="hover:text-[#FFC107]"
              >
                33, Sai Nisargha Layout, Opp RNSIT College,
                <br />R R Nagar, Bangalore
              </a>
            </p>

            <p className="text-sm mb-3 flex items-center">
              <Phone size={16} className="mr-2 text-[#FFC107]" />
              <a href="tel:+917795951743" className="hover:text-[#FFC107]">
                +91 7795951743
              </a>
            </p>

            <p className="text-sm flex items-center">
              <User size={16} className="mr-2 text-[#FFC107]" />
              <a
                href="mailto:info@hotelmarellaroyalinn.in"
                className="hover:text-[#FFC107]"
              >
                info@hotelmarellaroyalinn.in
              </a>
            </p>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-[#FFC107]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFC107]">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFC107]">
                  Cancellation Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFC107]">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Trust / Extra */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Why Choose Us</h3>
            <ul className="text-sm space-y-3 text-slate-400">
              <li>✔ Best Price Guarantee</li>
              <li>✔ 24x7 Support</li>
              <li>✔ Secure Booking</li>
              <li>✔ Prime Location</li>
            </ul>
            <div className="mt-5">
              <p className="text-sm text-slate-400 mb-2 font-semibold">
                ⭐ 4.5 Rating on Google
              </p>

              <div className="flex items-center gap-1 text-yellow-400 text-lg">
                ★★★★★
              </div>

              <a
                href="https://www.google.com/maps"
                target="_blank"
                className="text-xs text-slate-400 hover:text-[#FFC107]"
              >
                See Reviews on Google →
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-slate-700 mt-10 pt-6 text-center">
          <p className="text-sm text-slate-400 font-medium tracking-wide">
            © {new Date().getFullYear()} All Rights Reserved —
            <span className="text-[#FFC107] font-semibold ml-1 hover:underline cursor-pointer">
              RabbaniTech Solution Pvt. Ltd.
            </span>
          </p>

          <p className="text-xs text-slate-500 mt-2">
            Designed & Developed with ❤️ by RabbaniTech
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917780423648"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-xl hover:scale-110 transition z-50"
      >
        <Phone size={28} className="text-white" />
      </a>
    </div>
  );
}

function AdminView({ bookings, rooms, onBack, onDelete, onCheckout }) {
  const [search, setSearch] = React.useState("");

  const filteredBookings = (bookings || []).filter((b) =>
    (b.guestName || "").toLowerCase().includes(search.toLowerCase()),
  );

  const totalRevenue = (bookings || []).reduce(
    (sum, b) => sum + (b.totalPrice || 0),
    0,
  );

  const ROOM_LIMIT = 5;
  const totalRooms = (rooms || []).length * ROOM_LIMIT;
  const occupiedRooms = (bookings || [])
    .filter((b) => b.status !== "CHECKED_OUT")
    .reduce((sum, b) => sum + (b.roomsCount || 1), 0);

  const availableRooms = totalRooms - occupiedRooms;
  const today = new Date().toLocaleDateString("en-CA");

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={onBack}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Back to Site
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-sm text-gray-500">Available Rooms</h3>
          <p className="text-2xl font-bold">{availableRooms}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-sm text-gray-500">Total Bookings</h3>
          <p className="text-2xl font-bold">{(bookings || []).length}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-sm text-gray-500">Total Revenue</h3>
          <p className="text-2xl font-bold">₹{totalRevenue}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-sm text-gray-500">Today Bookings</h3>
          <p className="text-2xl font-bold">
            {
              (bookings || []).filter(
                (b) =>
                  new Date(b.checkIn).toLocaleDateString("en-CA") === today,
              ).length
            }
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by guest name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 p-3 border rounded-lg"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-200">
            <tr>
              <th className="p-3">Guest</th>
              <th className="p-3">Room</th>
              <th className="p-3">Dates</th>
              <th className="p-3">Guests</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredBookings.map((b) => (
              <tr key={b.id} className="border-b">
                <td className="p-3">
                  <div className="font-semibold">{b.guestName || "N/A"}</div>
                  <div className="text-sm text-gray-500">{b.email}</div>
                </td>

                <td className="p-3">{b.roomName}</td>

                <td className="p-3 text-sm">
                  {b.checkIn} → {b.checkOut}
                </td>

                <td className="p-3">{b.guests}</td>

                <td className="p-3 font-bold">₹{b.totalPrice}</td>

                <td className="p-3">
                  {b.status === "CHECKED_OUT" ? (
                    <span className="text-green-600 font-bold">
                      Checked Out
                    </span>
                  ) : (
                    <span className="text-red-500 font-bold">Active</span>
                  )}
                </td>

                <td className="p-3">
                  <button
                    onClick={() => {
                      if (window.confirm("Delete this booking?")) {
                        onDelete(b.id);
                      }
                    }}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                  {b.status !== "CHECKED_OUT" && (
                    <button
                      onClick={() => onCheckout(b.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 ml-2"
                    >
                      Checkout
                    </button>
                  )}
                </td>
              </tr>
            ))}

            {filteredBookings.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center p-6 text-gray-500">
                  No bookings found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ==========================================
// 1. HOME PAGE COMPONENT
// ==========================================
function HomeView({ rooms, onSelectRoom, occupiedRooms }) {
  const ROOM_LIMIT = 5;
  if (!rooms.length) {
    return (
      <div className="text-center p-20 text-lg font-semibold">
        Loading rooms...
      </div>
    );
  }

  const [currentImageIndex, setCurrentImageIndex] = useState({});

  useEffect(() => {
    const initialIndexes = {};
    rooms.forEach((room) => {
      initialIndexes[room.id] = 0;
    });
    setCurrentImageIndex(initialIndexes);
  }, [rooms]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (document.hidden) return;
      setCurrentImageIndex((prev) => {
        const updated = { ...prev };

        rooms.forEach((room) => {
          if (!Array.isArray(room.images) || room.images.length === 0) return;

          const current = prev[room.id] ?? 0;
          updated[room.id] = (current + 1) % room.images.length;
        });

        return updated;
      });
    }, 3000); // change image every 3 seconds

    return () => clearInterval(interval);
  }, [rooms]);
  return (
    <div className="animate-in fade-in duration-500 bg-white">
      {/* Hero Banner with Video */}
      <div className="relative h-[65vh] bg-black flex items-center justify-center border-b-8 border-[#FFC107] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        >
          <source src={receptionVideo || ""} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mt-12">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl tracking-tight">
            Welcome to <span className="text-[#FFC107]">Marella</span> Royal Inn
          </h1>

          <p className="text-xl md:text-2xl text-slate-100 mb-10 drop-shadow-lg font-medium">
            Experience comfort, elegance, and premium hospitality at Marella
            Royal Inn — book your perfect stay in just a few clicks.
          </p>
        </div>
      </div>

      {/* Room Listing */}
      <div
        id="rooms"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-slate-200"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Our Exclusive Rooms
          </h2>
          <div className="w-24 h-1.5 bg-[#FFC107] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">
            Select from our range of beautifully appointed rooms and suites,
            designed to provide the ultimate comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Array.isArray(rooms) &&
            rooms.map((room) => {
              const bookedCount = occupiedRooms.filter(
                (r) => r === room.name,
              ).length;

              const isFull = bookedCount >= ROOM_LIMIT;

              return (
                <div
                  key={room.id}
                  className="bg-white rounded-3xl shadow-md border border-slate-100 overflow-hidden hover:shadow-2xl hover:border-[#FFC107] transition-all duration-300 group flex flex-col hover:-translate-y-1"
                >
                  <div className="relative h-64 overflow-hidden bg-slate-200">
                    <div className="absolute top-4 left-4 z-10">
                      {isFull ? (
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          Occupied
                        </span>
                      ) : (
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          Available ({ROOM_LIMIT - bookedCount} left)
                        </span>
                      )}
                    </div>
                    <img
                      src={
                        Array.isArray(room.images) && room.images.length > 0
                          ? room.images?.[currentImageIndex?.[room.id] ?? 0]
                          : "https://via.placeholder.com/400"
                      }
                      alt={room.name}
                      onError={(e) => {
                        if (e.target.src.includes("placeholder.com")) return;
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/400";
                      }}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center shadow-md">
                      <Star
                        size={16}
                        className="text-[#FFC107] mr-1 fill-current"
                      />
                      <span className="text-sm font-extrabold text-slate-900">
                        {room.rating}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {room.name}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed font-medium">
                      {room.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                      <div>
                        <span className="text-3xl font-black text-slate-900">
                          ₹{room.basePrice}
                        </span>
                        <span className="text-slate-500 font-medium text-sm">
                          {" "}
                          / night
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          if (!room || !room.id) {
                            alert("Room data error ❌");
                            return;
                          }
                          onSelectRoom(room);
                        }}
                        disabled={isFull}
                        className={`px-6 py-3 rounded-xl font-bold ${
                          isFull
                            ? "bg-gray-400 text-white cursor-not-allowed pointer-events-none"
                            : "bg-[#FFC107] text-slate-900 hover:bg-yellow-400"
                        }`}
                      >
                        {isFull ? "Not Available" : "Book Room"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* Amenities Grid matching User Image */}
      <div id="amenities" className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#FFC107] mb-3">
              Amenities
            </h2>
            <p className="text-slate-500 text-lg">
              Designed for your comfort & luxury
            </p>
          </div>

          {AMENITIES_GROUPS.map((group, index) => (
            <div key={index} className="mb-16">
              {/* Category Title */}
              <h3 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-[#FFC107] pl-4">
                {group.title}
              </h3>

              {/* Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {group.items.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="group bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center cursor-pointer hover:-translate-y-1"
                  >
                    {/* Icon */}
                    <div className="text-[#FFC107] mb-3 flex justify-center group-hover:scale-110 group-hover:drop-shadow-lg transition-all">
                      {amenity.icon}
                    </div>

                    {/* Name */}
                    <p className="text-sm font-semibold text-slate-600 group-hover:text-slate-900 transition">
                      {amenity.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Google Maps Location Section */}
      <div id="contact" className="bg-slate-50 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Find Us</h2>

        <div className="max-w-6xl mx-auto h-[400px] rounded-xl overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.2652334599069!2d77.51897199999996!3d12.903803400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fb2a7a436d9%3A0xc61c8aa7fed06f1b!2sHotel%20Marella%20Royal%20Inn!5e0!3m2!1sen!2sin!4v1776081433728!5m2!1sen!2sin"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
          {/* <iframe
            src="https://www.google.com/maps?q=Hotel%20Marella%20Royal%20Suites20Bangalore&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe> */}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 2. ROOM DETAILS & DATE SELECTION PAGE
// ==========================================
function RoomDetailsView({ room, onBack, onProceed, occupiedRooms }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomsCount, setRoomsCount] = useState(1);
  const [guests, setGuests] = useState(1); // ✅ ADD THIS LINE
  const [error, setError] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!room || !room.name) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-bold">Room data loading...</h2>
        <button onClick={onBack}>Go Back</button>
      </div>
    );
  }

  const calculateDetails = () => {
    let currentPrice = room.basePrice;
    if (guests > 2) {
      currentPrice += room.extraGuestPrice;
    }

    if (!checkIn || !checkOut) return { nights: 0, total: 0, currentPrice };

    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end - start;
    const nights =
      diffTime > 0 ? Math.ceil(diffTime / (1000 * 60 * 60 * 24)) : 0;

    return {
      nights: nights > 0 ? nights : 0,
      total: nights > 0 ? nights * currentPrice * roomsCount : 0,
      currentPrice,
    };
  };

  const { nights, total, currentPrice } = calculateDetails();

  // ✅ FIRST: define totals BEFORE using them
  const gstRate = 0.12;
  const gstAmount = total * gstRate;
  const finalTotal = total + gstAmount;

  // ✅ THEN use in function
  const handleProceed = () => {
    setError("");

    if (!checkIn || !checkOut) {
      setError("Please select both check-in and check-out dates.");
      return;
    }

    if (nights <= 0) {
      setError("Check-out date must be after check-in date.");
      return;
    }

    onProceed({ checkIn, checkOut, guests, roomsCount }, finalTotal);
  };

  // ✅ IMAGE NAVIGATION (KEEP SAME)
  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      room.images && room.images.length > 0
        ? (prev + 1) % room.images.length
        : 0,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      room.images && room.images.length > 0
        ? prev === 0
          ? room.images.length - 1
          : prev - 1
        : 0,
    );
  };

  // ✅ DATE
  const today = new Date().toISOString().split("T")[0];

  const bookedCount = occupiedRooms.filter((r) => r === room.name).length;

  const availableRooms = 5 - bookedCount;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-in slide-in-from-right-8 duration-300">
      <button
        onClick={onBack}
        className="flex items-center text-slate-600 hover:text-[#FFC107] mb-8 transition-colors font-bold bg-white px-4 py-2 rounded-lg shadow-sm w-fit border border-slate-200"
      >
        <ArrowLeft size={18} className="mr-2" /> Back to Rooms
      </button>

      <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
        {/* Left Side: Room Info & Gallery */}
        <div className="lg:w-3/5">
          {/* Image Gallery */}
          <div className="relative h-80 lg:h-96 bg-slate-200 group">
            <img
              src={
                Array.isArray(room.images) && room.images.length > 0
                  ? room.images[currentImageIndex]
                  : "https://via.placeholder.com/400"
              }
              alt={room.name}
              onError={(e) => {
                if (e.target.src.includes("placeholder.com")) return;
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/400";
              }}
              className="w-full h-full object-cover"
            />
            {/* Gallery Controls */}
            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={prevImage}
                className="bg-white/80 hover:bg-white p-2 rounded-full shadow-md text-slate-800 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="bg-white/80 hover:bg-white p-2 rounded-full shadow-md text-slate-800 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            {/* Image Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {room.images?.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 rounded-full transition-all ${idx === currentImageIndex ? "w-6 bg-[#FFC107]" : "w-2 bg-white/60"}`}
                />
              ))}
            </div>
          </div>

          <div className="p-10">
            <div className="flex justify-between items-start mb-6">
              <h1 className="text-4xl font-extrabold text-slate-900">
                {room.name}
              </h1>
              <p className="text-sm text-green-600 font-bold mt-2">
                Only {availableRooms} rooms left 🔥
              </p>
              <div className="flex items-center bg-yellow-50 px-4 py-1.5 rounded-full border border-[#FFC107]/30 shadow-sm">
                <Star size={20} className="text-[#FFC107] mr-1 fill-current" />
                <span className="font-extrabold text-slate-900">
                  {room.rating}
                </span>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed mb-8 text-lg font-medium">
              {room.description}
            </p>

            <h3 className="font-bold text-slate-900 mb-5 text-xl flex items-center">
              <Star className="text-[#FFC107] mr-2" size={24} /> Highlight
              Amenities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
              {room.amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-center text-slate-700 font-medium bg-slate-50 p-3 rounded-xl border border-slate-100"
                >
                  {amenity.icon}
                  <span className="truncate">{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right Side: Date Selection, Guests & Price */}
        <div className="lg:w-2/5 bg-slate-50 p-10 border-l border-slate-100 flex flex-col">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8">
            Booking Details
          </h2>
          <div className="space-y-6 flex-grow">
            {/* Guest Selection */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Number of Guests
              </label>
              <div className="relative flex items-center">
                <Users
                  className="absolute left-4 text-slate-400 pointer-events-none"
                  size={22}
                />
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="pl-12 w-full rounded-xl border-2 border-slate-200 py-3 px-4 focus:ring-4 focus:ring-[#FFC107]/20 focus:border-[#FFC107] transition outline-none font-medium text-slate-900 bg-white appearance-none cursor-pointer"
                >
                  <option value={1}>1 Guest</option>
                  <option value={2}>2 Guests</option>
                  <option value={3}>3 Guests (+₹{room.extraGuestPrice})</option>
                </select>
                <ChevronDown
                  className="absolute right-4 text-slate-400 pointer-events-none"
                  size={20}
                />
              </div>
              <p className="text-xs text-slate-500 mt-2 ml-1">
                Base price includes up to 2 guests.
              </p>
            </div>
            {/* Number of Rooms */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Number of Rooms
              </label>

              <div className="flex items-center justify-between bg-white border-2 border-slate-200 rounded-xl px-4 py-3">
                <button
                  onClick={() => setRoomsCount(Math.max(1, roomsCount - 1))}
                  className="text-xl font-bold px-3 py-1 rounded-lg hover:bg-slate-100"
                >
                  -
                </button>

                <span className="font-bold text-lg">
                  {roomsCount} Room{roomsCount > 1 && "s"}
                </span>

                <button
                  onClick={() => setRoomsCount(roomsCount + 1)}
                  className="text-xl font-bold px-3 py-1 rounded-lg hover:bg-slate-100"
                >
                  +
                </button>
              </div>

              <p className="text-xs text-slate-500 mt-2 ml-1">
                Select number of rooms required
              </p>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Check-in Date
              </label>
              <div className="relative">
                <Calendar
                  className="absolute left-4 top-3.5 text-slate-400"
                  size={22}
                />
                <input
                  type="date"
                  min={today}
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="pl-12 w-full rounded-xl border-2 border-slate-200 py-3 px-4 focus:ring-4 focus:ring-[#FFC107]/20 focus:border-[#FFC107] transition outline-none font-medium text-slate-900 bg-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Check-out Date
              </label>
              <div className="relative">
                <Calendar
                  className="absolute left-4 top-3.5 text-slate-400"
                  size={22}
                />
                <input
                  type="date"
                  min={checkIn || today}
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="pl-12 w-full rounded-xl border-2 border-slate-200 py-3 px-4 focus:ring-4 focus:ring-[#FFC107]/20 focus:border-[#FFC107] transition outline-none font-medium text-slate-900 bg-white"
                />
              </div>
            </div>
            {error && (
              <div className="p-4 bg-red-50 text-red-700 text-sm font-bold rounded-xl border border-red-200">
                {error}
              </div>
            )}
            <div className="pt-6 border-t border-slate-200">
              <div className="space-y-4">
                {/* Price per night */}
                <div className="flex justify-between text-slate-600 font-medium">
                  <span>
                    Price per night{" "}
                    {guests > 2 && (
                      <span className="text-xs text-[#FFC107] font-bold bg-yellow-50 px-2 py-0.5 rounded ml-2">
                        + Extra Guest
                      </span>
                    )}
                  </span>
                  <span className="font-bold text-slate-900">
                    ₹{currentPrice}
                  </span>
                </div>

                {/* Nights */}
                <div className="flex justify-between text-slate-600 font-medium">
                  <span>Total nights</span>
                  <span>{nights}</span>
                </div>

                {/* Rooms */}
                <div className="flex justify-between text-slate-600 font-medium">
                  <span>Rooms</span>
                  <span>{roomsCount}</span>
                </div>

                <div className="border-t my-2"></div>

                {/* Room Total */}
                <div className="flex justify-between">
                  <span>Room Total</span>
                  <span>₹{total}</span>
                </div>

                {/* GST */}
                <div className="flex justify-between">
                  <span>GST (12%)</span>
                  <span>₹{gstAmount.toFixed(0)}</span>
                </div>

                <div className="border-t border-dashed my-2"></div>

                {/* Final Total */}
                <div className="flex justify-between text-xl font-bold">
                  <span>Total Price</span>
                  <span>₹{finalTotal.toFixed(0)}</span>
                </div>
              </div>

              <p className="text-xs text-slate-500 mt-2">Includes all taxes</p>
            </div>{" "}
            {/* price section */}
          </div>{" "}
          {/* space-y-6 flex-grow */}
          <button
            onClick={handleProceed}
            className="w-full mt-10 bg-[#FFC107] hover:bg-yellow-400 text-slate-900 py-4 rounded-2xl font-black text-xl flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
          >
            Continue to Booking <ChevronRight size={24} className="ml-2" />
          </button>
        </div>{" "}
        {/* right side */}
      </div>
    </div>
  );
}

// ==========================================
// 3. GUEST DETAILS & PAYMENT PAGE
// ==========================================
function CheckoutView({
  room,
  bookingDetails,
  onBack,
  onSubmit,
  isSubmitting,
}) {
  // ✅ ADD THIS BLOCK HERE (FIRST LINE INSIDE FUNCTION)
  if (!room) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-bold">Something went wrong ⚠️</h2>
        <p>Please go back and try again.</p>
      </div>
    );
  }

  const [formData, setFormData] = useState({
    guestName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [paymentError, setPaymentError] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card"); // 'card' or 'hotel'

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const validateField = (name, value) => {
    let error = "";

    if (name === "phone") {
      if (value.length !== 10 || !/^[6-9]\d{9}$/.test(value)) {
        error = "Enter valid 10-digit Indian number";
      } else if (/^(\d)\1{9}$/.test(value)) {
        error = "Invalid phone number";
      }
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!value || !emailRegex.test(value)) {
        error = "Enter valid email address";
      }
    }

    return error;
  };

  const handleGoogleSignIn = () => {
    setFormData((prev) => ({
      ...prev,
      guestName: "",
      email: "",
    }));
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    // ✅ Allow only numbers for phone
    if (name === "phone") {
      value = value.replace(/\D/g, "");
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    const error = validateField(name, value);

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneError = validateField("phone", formData.phone);
    const emailError = validateField("email", formData.email);

    if (phoneError || emailError) return;

    if (paymentMethod === "card") {
      await startRazorpayPayment();
    } else {
      await onSubmit(formData, "hotel"); // no try/catch needed here
    }
  };

  const formatDate = (dateString) => {
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const startRazorpayPayment = async () => {
    try {
      setPaymentError("");

      // ✅ ADD THIS LINE (VERY IMPORTANT)
      const isLoaded = await loadRazorpay();

      if (!isLoaded) {
        alert("Razorpay failed to load ❌");
        return;
      }

      // ✅ ADD HERE 👇
      if (!window.Razorpay) {
        alert("Razorpay not available ❌");
        return;
      }

      const res = await fetch(
        "https://hotel-backend-jqdh.onrender.com/api/payment/create-order",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: bookingDetails.total }),
        },
      );

      if (!res.ok) {
        throw new Error("Backend not running");
      }

      const data = await res.json();

      if (!data || !data.orderId) {
        throw new Error("Invalid payment response");
      }

      if (!window.Razorpay) {
        alert("Payment gateway not loaded ❌");
        return;
      }

      const options = {
        key: data.key,
        amount: data.amount,
        currency: "INR",
        name: "Marella Royal Inn",
        description: "Room Booking",
        order_id: data.orderId,

        handler: function (response) {
          onSubmit(
            {
              ...formData,
              paymentId: response.razorpay_payment_id,
            },
            "card",
          );
        },

        modal: {
          ondismiss: function () {},
        },

        prefill: {
          name: formData.guestName || "Guest",
          email: formData.email || "guest@email.com",
          contact: formData.phone || "9999999999",
        },

        theme: {
          color: "#FFC107",
        },
      };

      const rzp = new window.Razorpay(options);

      rzp.on("payment.failed", function (response) {
        console.error(response.error);

        setPaymentError("Payment failed ❌");
        alert("Try Pay at Hotel option");
      });

      rzp.open();
    } catch (err) {
      console.error("PAYMENT ERROR:", err);

      // ✅ THIS LINE PREVENTS WHITE SCREEN
      setPaymentError("Payment failed or backend not running ❌");

      alert("Payment failed or backend not running ❌");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-in slide-in-from-right-8 duration-300">
      <button
        onClick={onBack}
        className="flex items-center text-slate-600 hover:text-[#FFC107] mb-8 transition-colors font-bold bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200 w-fit"
      >
        <ArrowLeft size={18} className="mr-2" /> Back to Dates
      </button>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        {/* Left Column: Form & Payment */}

        <div className="xl:col-span-2 space-y-10">
          {/* Form Section */}
          <div className="bg-white p-10 rounded-3xl shadow-md border border-slate-100 relative overflow-hidden">
            {/* Decorative banner */}
            <div className="absolute top-0 left-0 w-full h-2 bg-[#FFC107]"></div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
              <h2 className="text-3xl font-extrabold text-slate-900 flex items-center">
                <User className="mr-3 text-[#FFC107]" size={32} /> Guest Details
              </h2>
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center text-sm font-bold text-slate-700 bg-white border-2 border-slate-200 rounded-xl px-5 py-3 hover:bg-slate-50 hover:border-[#FFC107] transition-all shadow-sm"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Auto-fill with Google
              </button>
            </div>

            <form
              id="booking-form"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="guestName"
                  disabled={isSubmitting}
                  required
                  value={formData.guestName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border-2 border-slate-200 py-3.5 px-5 focus:ring-4 focus:ring-[#FFC107]/20 focus:border-[#FFC107] transition outline-none text-slate-900 font-medium bg-white"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    disabled={isSubmitting}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter you email"
                    className={`w-full rounded-xl border-2 py-3.5 px-5 outline-none transition 
    ${errors.email ? "border-red-500 bg-red-50" : "border-slate-200 focus:border-[#FFC107]"}`}
                  />

                  {errors.email && formData.email && (
                    <p className="text-red-500 text-sm mt-1 font-semibold">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    disabled={isSubmitting}
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength="10"
                    inputMode="numeric"
                    placeholder="Enter 10-digit mobile number"
                    className={`w-full rounded-xl border-2 py-3.5 px-5 outline-none transition 
    ${errors.phone ? "border-red-500 bg-red-50" : "border-slate-200 focus:border-[#FFC107]"}`}
                  />

                  {errors.phone && formData.phone && (
                    <p className="text-red-500 text-sm mt-1 font-semibold">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  placeholder="E.g., late check-in, extra towels..."
                  className="w-full rounded-xl border-2 border-slate-200 py-3.5 px-5 focus:ring-4 focus:ring-[#FFC107]/20 focus:border-[#FFC107] transition outline-none resize-none text-slate-900 font-medium bg-white"
                ></textarea>
              </div>
            </form>
          </div>

          {/* Payment Section */}
          <div className="bg-white p-10 rounded-3xl shadow-md border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-slate-900"></div>

            <h2 className="text-3xl font-extrabold text-slate-900 mb-8 flex items-center">
              <CreditCard className="mr-3 text-[#FFC107]" size={32} /> Payment
              Options
            </h2>

            {/* Payment Method Selector */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {/* ONLINE */}
              <div
                onClick={() => !isSubmitting && setPaymentMethod("card")}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center ${
                  paymentMethod === "card"
                    ? "border-[#FFC107] bg-yellow-50/50 shadow-sm"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                    paymentMethod === "card"
                      ? "border-[#FFC107]"
                      : "border-slate-300"
                  }`}
                >
                  {paymentMethod === "card" && (
                    <div className="w-2.5 h-2.5 bg-[#FFC107] rounded-full"></div>
                  )}
                </div>

                <CreditCard
                  className={`mr-2 ${
                    paymentMethod === "card"
                      ? "text-[#FFC107]"
                      : "text-slate-400"
                  }`}
                  size={20}
                />

                <span className="font-bold">Pay Online Now</span>
              </div>

              {/* HOTEL */}
              <div
                onClick={() => !isSubmitting && setPaymentMethod("hotel")}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center ${
                  paymentMethod === "hotel"
                    ? "border-[#FFC107] bg-yellow-50/50 shadow-sm"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                    paymentMethod === "hotel"
                      ? "border-[#FFC107]"
                      : "border-slate-300"
                  }`}
                >
                  {paymentMethod === "hotel" && (
                    <div className="w-2.5 h-2.5 bg-[#FFC107] rounded-full"></div>
                  )}
                </div>

                <MapPin className="mr-2" size={20} />
                <span className="font-bold">Pay at Hotel</span>
              </div>
            </div>

            {/* ✅ CONDITIONAL BLOCK */}
            {paymentMethod === "card" ? (
              <div className="space-y-5">
                <div className="p-4 border-2 border-slate-100 bg-slate-50 rounded-xl">
                  <p className="text-sm font-semibold flex items-center">
                    <CheckCircle size={18} className="mr-2 text-green-500" />
                    Secure payment with Razorpay
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-green-700">
                  🔐 Razorpay secure checkout (UPI / Cards / Net Banking)
                </div>
              </div>
            ) : (
              <div className="p-6 border-2 border-[#FFC107]/30 bg-yellow-50/30 rounded-xl flex items-start">
                <ConciergeBell className="text-[#FFC107] mr-4" size={28} />

                <div>
                  <h4 className="font-bold">No payment required now</h4>
                  <p className="text-sm text-slate-600">
                    Pay at hotel during check-in.
                  </p>
                </div>
              </div>
            )}

            {paymentError && (
              <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-xl mt-4 text-sm font-semibold">
                ❌ {paymentError}
              </div>
            )}
          </div>

          {/* Right Column: Order Summary */}
          <div className="xl:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-[#FFC107] sticky top-24">
              <h3 className="text-2xl font-black text-slate-900 mb-6 border-b border-slate-100 pb-4">
                Booking Summary
              </h3>

              <div className="flex gap-4 mb-8">
                <img
                  src={
                    Array.isArray(room.images) && room.images.length > 0
                      ? room.images[0]
                      : "https://via.placeholder.com/400"
                  }
                  alt={room.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/400";
                  }}
                  className="w-24 h-20 object-cover rounded-lg"
                />
                <div className="flex flex-col justify-center">
                  <h4 className="font-extrabold text-slate-900 text-lg leading-tight mb-1">
                    {room.name}
                  </h4>
                  <div className="text-sm text-slate-600 font-bold flex items-center bg-slate-50 w-fit px-2 py-1 rounded-md border border-slate-100 mb-1">
                    <Star
                      size={14}
                      className="text-[#FFC107] mr-1 fill-current"
                    />{" "}
                    {room.rating} Rating
                  </div>
                  <div className="text-xs text-slate-500 font-medium flex items-center">
                    <Users size={12} className="mr-1" /> {bookingDetails.guests}{" "}
                    Guest(s)
                  </div>
                </div>
              </div>

              <div className="space-y-5 mb-8 text-base bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-semibold">Check-in</span>
                  <span className="font-bold text-slate-900">
                    {formatDate(bookingDetails.checkIn)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-semibold">
                    Check-out
                  </span>
                  <span className="font-bold text-slate-900">
                    {formatDate(bookingDetails.checkOut)}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-slate-700 font-bold">
                  <span>Total (Incl. GST)</span>
                  <span>₹{bookingDetails.total}</span>
                </div>
                <div className="flex justify-between text-slate-700 font-bold">
                  <span>Taxes & Fees</span>
                  <span className="text-slate-500 bg-slate-100 px-2 rounded">
                    Included
                  </span>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6 mb-8">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xl font-black text-slate-900">
                    Total Amount
                  </span>
                  <span className="text-4xl font-black text-[#FFC107]">
                    ₹{bookingDetails.total}
                  </span>
                </div>
                {paymentMethod === "hotel" && (
                  <p className="text-right text-sm text-slate-500 font-medium italic">
                    To be paid at hotel
                  </p>
                )}
              </div>

              <button
                type="submit"
                form="booking-form"
                disabled={isSubmitting} // ✅ FIXED (boolean)
                className={`w-full mt-4 bg-[#FFC107] py-3 rounded-xl font-bold transition-all duration-200 ${
                  isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-yellow-400"
                }`}
              >
                {isSubmitting
                  ? "Processing..."
                  : paymentMethod === "hotel"
                    ? "Confirm Reservation"
                    : `Pay ₹${bookingDetails.total} & Book`}
              </button>

              <p className="text-sm font-semibold text-center text-slate-400 mt-5">
                By booking, you agree to our terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// ==========================================
// 4. BOOKING SUCCESS PAGE
// ==========================================
function SuccessView({ onHome, bookingDetails, room }) {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 animate-in zoom-in-95 duration-500 bg-slate-50">
      <div className="bg-white p-12 max-w-lg w-full rounded-[2rem] shadow-xl text-center border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-3 bg-[#FFC107]"></div>

        <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
          Booking Confirmed!
        </h1>

        <p className="text-slate-500 mb-8 leading-relaxed font-medium text-lg">
          Thank you for choosing Hotel Marella Royal Inn. Your reservation has
          been sent to our system.
        </p>

        {bookingDetails.paymentMethod === "hotel" && (
          <div className="bg-yellow-50 border border-[#FFC107]/30 p-4 rounded-xl mb-8 flex items-center justify-center text-yellow-800 font-bold">
            <ConciergeBell size={20} className="mr-2" />
            Please pay ₹{bookingDetails.total} at the reception.
          </div>
        )}

        {/* Booking Reference */}
        <div className="bg-slate-50 p-5 rounded-2xl mb-6 border border-slate-200">
          <p className="text-sm text-slate-400 font-bold mb-1 uppercase tracking-wider">
            Booking Reference
          </p>

          <p className="font-mono text-2xl font-black text-[#FFC107] drop-shadow-sm">
            {bookingDetails.bookingReference}
          </p>
        </div>

        {/* Booking Summary */}
        <div className="text-sm text-slate-600 space-y-1 mb-10">
          <p>
            <strong>Room:</strong> {room?.name}
          </p>
          <p>
            <strong>Guests:</strong> {bookingDetails.guests}
          </p>
          <p>
            <strong>Total:</strong> ₹{bookingDetails.total}
          </p>
        </div>

        <button
          onClick={onHome}
          className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-2xl font-black text-lg transition-all shadow-lg hover:shadow-xl"
        >
          Return to Homepage
        </button>
      </div>
    </div>
  );
}
