import React, { useState, useEffect } from "react";
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
import room1 from "./assets/Room1.jpg";
import room2 from "./assets/Room2.jpg";
import room3 from "./assets/Room3.jpg";
import room4 from "./assets/Room4.jpg";
import room5 from "./assets/Room5.jpg";
import room6 from "./assets/Room6.jpg";
import room7 from "./assets/Room7.jpg";
import room8 from "./assets/Room8.jpg";
import bathroom1 from "./assets/Bathroom1.jpg";




// --- MOCK DATA (Simulating Spring Boot GET /api/rooms) ---
const MOCK_ROOMS = [
  {
    id: 1,
    name: "Standard Room",
    images: [
  room5,
  room4,
  room6,
  bathroom1
],
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
        name: "Air Conditioner",
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
        name: "Room Slippers",
        icon: <Footprints size={20} className="mr-3 text-[#FFC107] shrink-0" />,
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
     images: [
  room4,
  room1,
  room2,
  room3,
  bathroom1
],
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
     images: [
  room1,
  room8,
  room4,
  room2,
  bathroom1
],
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
        name: "Buffet Breakfast",
        icon: <Utensils size={20} className="mr-3 text-[#FFC107] shrink-0" />,
      },
      {
        name: "Bucket & Mug",
        icon: <Beaker size={20} className="mr-3 text-[#FFC107] shrink-0" />,
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
const AMENITIES_LIST = [
  { name: "Cloud Beds™", icon: <Bed strokeWidth={1.2} size={42} /> },
  { name: "Rain Showers", icon: <ShowerHead strokeWidth={1.2} size={42} /> },
  { name: "Air Conditioner", icon: <Wind strokeWidth={1.2} size={42} /> },
  { name: "Luggage Storage", icon: <Briefcase strokeWidth={1.2} size={42} /> },
  { name: "Digital Safe", icon: <Lock strokeWidth={1.2} size={42} /> },
  { name: "Cloth Hanging Unit", icon: <Shirt strokeWidth={1.2} size={42} /> },
  {
    name: "Tea / Coffee kettles",
    icon: <Coffee strokeWidth={1.2} size={42} />,
  },
  { name: "Free Wi-Fi", icon: <Wifi strokeWidth={1.2} size={42} /> },
  { name: '32" TV', icon: <Tv strokeWidth={1.2} size={42} /> },
  { name: "Desk & Chair", icon: <Armchair strokeWidth={1.2} size={42} /> },
  { name: "In room intercom", icon: <Phone strokeWidth={1.2} size={42} /> },
  { name: "Non-Smoking Rooms", icon: <Ban strokeWidth={1.2} size={42} /> },
  { name: "24x7 Security", icon: <ShieldCheck strokeWidth={1.2} size={42} /> },
  {
    name: "24x7 Reception",
    icon: <ConciergeBell strokeWidth={1.2} size={42} />,
  },
  { name: "Daily Housekeeping", icon: <Brush strokeWidth={1.2} size={42} /> },
  { name: "Buffet Breakfast", icon: <Utensils strokeWidth={1.2} size={42} /> },
  { name: "iMac Stations", icon: <Monitor strokeWidth={1.2} size={42} /> },
  { name: "Mineral Water", icon: <GlassWater strokeWidth={1.2} size={42} /> },
  { name: "Fresh Towels", icon: <Layers strokeWidth={1.2} size={42} /> },
  { name: "Body & Hair Wash", icon: <Droplets strokeWidth={1.2} size={42} /> },
  { name: "Dental Kit", icon: <Smile strokeWidth={1.2} size={42} /> },
  { name: "Shaving Kit", icon: <Scissors strokeWidth={1.2} size={42} /> },
  { name: "Shower Cap", icon: <Cloud strokeWidth={1.2} size={42} /> },
  { name: "Room Slippers", icon: <Footprints strokeWidth={1.2} size={42} /> },
  { name: "Moisturiser", icon: <Droplet strokeWidth={1.2} size={42} /> },
  { name: "Bucket & Mug", icon: <Beaker strokeWidth={1.2} size={42} /> },
  { name: "Extra Bed*", icon: <BedDouble strokeWidth={1.2} size={42} /> },
];

export default function App() {
  const [currentView, setCurrentView] = useState("home");
  const [rooms, setRooms] = useState([]);
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

const fetchBookings = () => {
  fetch("http://localhost:8080/api/bookings")
    .then(res => res.json())
    .then(data => {
      setAdminBookings(data);
    })
    .catch(err => console.error(err));
};

const deleteBooking = (id) => {
  fetch(`http://localhost:8080/api/bookings/${id}`, {
    method: "DELETE",
  })
    .then(() => {
      fetchBookings(); // refresh list
    })
    .catch((err) => console.error(err));
};

useEffect(() => {
  setRooms(MOCK_ROOMS);
  fetchBookings();
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
const handleConfirmBooking = (guestInfo, paymentMethod) => {
  const bookingReference = "HMRI-" + Date.now().toString().slice(-6);

  const bookingData = {
    guestName: guestInfo.guestName,
    email: guestInfo.email,
    phone: guestInfo.phone,
    roomName: selectedRoom.name,
    guests: bookingDetails.guests,
    checkIn: bookingDetails.checkIn,
    checkOut: bookingDetails.checkOut,
    totalPrice: bookingDetails.total,
    paymentMethod: paymentMethod === "hotel" ? "Pay at Hotel" : "Card",
    bookingReference: bookingReference,
  };


  // 1️⃣ Save booking in Spring Boot database
  fetch("http://localhost:8080/api/bookings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookingData),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Booking saved:", data);
      fetchBookings();
    })
    .catch((error) => {
      console.error("Error saving booking:", error);
    });

  // 2️⃣ Send Email
  const templateParams = {
    booking_reference: bookingReference,
    guest_name: guestInfo.guestName,
    guest_email: guestInfo.email,
    guest_phone: guestInfo.phone,
    room_name: selectedRoom.name,
    guests: bookingDetails.guests,
    check_in: bookingDetails.checkIn,
    check_out: bookingDetails.checkOut,
    total: bookingDetails.total,
    payment_method: bookingData.paymentMethod,
    special_request: guestInfo.message || "None",
  };

  fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: "service_79vxn5l",
      template_id: "template_hj48bne",
      user_id: "n94jEJBXkDeCf_eH4",
      template_params: templateParams,
    }),
  });

  // 3️⃣ WhatsApp message
  const messageDetails = `*New Booking Request!*

Booking Reference: ${bookingReference}

Guest: ${guestInfo.guestName}
Phone: ${guestInfo.phone}

Room: ${selectedRoom.name}
Guests: ${bookingDetails.guests}

Dates: ${bookingDetails.checkIn} to ${bookingDetails.checkOut}

Total: ₹${bookingDetails.total}

Payment: ${bookingData.paymentMethod}

Special Request: ${guestInfo.message || "None"}`;

  const hotelWhatsAppNumber = "917780423648";

  const whatsappUrl = `https://wa.me/${hotelWhatsAppNumber}?text=${encodeURIComponent(messageDetails)}`;

  window.open(whatsappUrl, "_blank");

  // 4️⃣ Success page
  setTimeout(() => {
    setCurrentView("success");
    window.scrollTo(0, 0);
  }, 1000);
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
        <div className="relative w-full h-20 flex items-center">
          <div
            className="absolute inset-y-0 left-4 sm:left-8 lg:left-12 flex items-center cursor-pointer group z-10"
            onClick={goHome}
          >
            {/* Using the provided Hotel Logo here */}
            <img
              src="Hotel Logo.jpg"
              alt="Hotel Marella Royal Inn Logo"
              className="h-16 w-auto object-contain group-hover:scale-105 transition-transform mr-4"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <button
  onClick={() => setCurrentView("admin")}
  className="bg-black text-white px-4 py-2 rounded"
>
  Admin
</button>
            <span className="font-extrabold text-3xl md:text-4xl tracking-tight text-slate-600 font-serif">
              Hotel Marella Royal Inn
            </span>
          </div>
          {/* Right Side: Links (Kept exactly in the same place) */}
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex justify-end">
            <div className="hidden md:flex space-x-8 text-sm font-semibold text-slate-600">
              <a href="#rooms" className="hover:text-[#FFC107] transition-colors">
Rooms
</a>

<a href="#amenities" className="hover:text-[#FFC107] transition-colors">
Amenities
</a>

<a href="#contact" className="hover:text-[#FFC107] transition-colors">
Contact
</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="pb-20">
        {currentView === "home" && (
          <HomeView rooms={rooms} onSelectRoom={handleSelectRoom} />
        )}
        {currentView === "room_details" && (
          <RoomDetailsView
            room={selectedRoom}
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
          />
        )}
        {currentView === "success" && (
          <SuccessView
            onHome={goHome}
            bookingDetails={bookingDetails}
            room={selectedRoom}
          />
        )}
        {currentView === "admin" && (
  <AdminView 
  bookings={adminBookings} 
  onBack={goHome} 
  onDelete={deleteBooking}
/>
)}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t-4 border-[#FFC107]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            {/* Using the provided Hotel Logo in the footer */}
            <div className="bg-white inline-block p-2 rounded-xl mb-4">
              <img
                src="Hotel Logo.jpg"
                alt="Hotel Marella Royal Inn Logo"
                className="h-16 object-contain"
                onError={(e) => {
                  e.target.parentElement.style.display = "none";
                }}
              />
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Experience unparalleled luxury and comfort in the heart of the
              city. Book directly with us for the best rates.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <p className="text-sm mb-2 flex items-center">
              <MapPin size={16} className="mr-2 text-[#FFC107]" />
              <span>
                33, Marella Royal Inn
                <br />
                Bangalore, Karnataka
              </span>
            </p>
            <p className="text-sm mb-2 flex items-center">
              <Phone size={16} className="mr-2 text-[#FFC107]" />
              +91 7780423648
            </p>
            <p className="text-sm flex items-center">
              <User size={16} className="mr-2 text-[#FFC107]" />{" "}
              marellagrandinn@gmail.com
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-[#FFC107] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFC107] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFC107] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
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

// ==========================================
// 1. HOME PAGE COMPONENT
// ==========================================
function HomeView({ rooms, onSelectRoom }) {
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
>
  <source src={`${import.meta.env.BASE_URL}reception.mp4`} type="video/mp4" />
</video>

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl mt-12">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl tracking-tight">
            Welcome to <span className="text-[#FFC107]">Marella</span> Royal Inn
          </h1>

          <p className="text-xl md:text-2xl text-slate-100 mb-10 drop-shadow-lg font-medium">
            Experience comfort, elegance, and premium hospitality at Marella Royal Inn — book your perfect stay in just a few clicks.
          </p>
        </div>
      </div>

      {/* Room Listing */}
      <div id="rooms" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-slate-50">
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
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-3xl shadow-md border border-slate-100 overflow-hidden hover:shadow-2xl hover:border-[#FFC107] transition-all duration-300 group flex flex-col hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <img
                  src={room.images[0]}
                  alt={room.name}
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000";
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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
                    onClick={() => onSelectRoom(room)}
                    className="bg-[#FFC107] text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 hover:shadow-lg transition-all"
                  >
                    Choose Room
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Amenities Grid matching User Image */}
      <div id="amenities" className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#FFC107] mb-2 tracking-tight">
              Amenities
            </h2>
            <p className="text-slate-500 font-medium text-lg">
              Everything you need for a comfortable stay
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-12 gap-x-6">
            {AMENITIES_LIST.map((amenity, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center group"
              >
                <div className="text-[#ffb300] mb-4 group-hover:scale-110 group-hover:drop-shadow-md transition-all duration-300">
                  {amenity.icon}
                </div>
                <span className="text-slate-500 font-semibold text-sm tracking-wide group-hover:text-slate-900 transition-colors">
                  {amenity.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

   {/* Google Maps Location Section */}
<div id="contact" className="bg-slate-50 py-24 border-t border-slate-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Find Us Here
      </h2>
      <div className="w-24 h-1.5 bg-[#FFC107] mx-auto rounded-full"></div>
    </div>

    <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-xl border-4 border-white relative group">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1848.316547308481!2d77.51819769909685!3d12.903826747231502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f006a93ae01%3A0xbbe8a175abcdf22f!2sThe%20marella%20suits!5e1!3m2!1sen!2skr!4v1772927312786!5m2!1sen!2skr"
        height="100%"
        width="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
      ></iframe>
    </div>
     </div>       
  </div>
</div>
  );
}

// ==========================================
// 2. ROOM DETAILS & DATE SELECTION PAGE
// ==========================================
function RoomDetailsView({ room, onBack, onProceed }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [error, setError] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const calculateDetails = () => {
    let currentPrice = room.basePrice;
    if (guests > 2) {
      currentPrice += room.extraGuestPrice;
    }

    if (!checkIn || !checkOut) return { nights: 0, total: 0, currentPrice };

    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end - start;
    const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return {
      nights: nights > 0 ? nights : 0,
      total: nights > 0 ? nights * currentPrice : 0,
      currentPrice,
    };
  };

  const { nights, total, currentPrice } = calculateDetails();

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
    onProceed({ checkIn, checkOut, guests }, total);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? room.images.length - 1 : prev - 1,
    );
  };

  const today = new Date().toISOString().split("T")[0];

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
              src={room.images[currentImageIndex]}
              alt={`${room.name} view ${currentImageIndex + 1}`}
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000";
              }}
              className="w-full h-full object-cover transition-opacity duration-300"
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
              {room.images.map((_, idx) => (
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

            <div className="pt-8 mt-8 border-t border-slate-200">
              <div className="flex justify-between mb-3 text-slate-600 font-medium">
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
              <div className="flex justify-between mb-6 text-slate-600 font-medium">
                <span>Total nights</span>
                <span className="font-bold text-slate-900">{nights}</span>
              </div>
              <div className="flex justify-between items-center text-2xl font-black text-slate-900 pt-6 border-t border-slate-200">
                <span>Total Price</span>
                <span className="text-[#FFC107] drop-shadow-sm">₹{total}</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleProceed}
            className="w-full mt-10 bg-[#FFC107] hover:bg-yellow-400 text-slate-900 py-4 rounded-2xl font-black text-xl flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
          >
            Continue to Booking <ChevronRight size={24} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}



// ==========================================
// 3. GUEST DETAILS & PAYMENT PAGE
// ==========================================
function CheckoutView({ room, bookingDetails, onBack, onSubmit }) {
  const [formData, setFormData] = useState({
    guestName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("card"); // 'card' or 'hotel'
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleGoogleSignIn = () => {
    setFormData((prev) => ({
      ...prev,
      guestName: "Alex Johnson",
      email: "alex.johnson@gmail.com",
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    onSubmit(formData, paymentMethod);
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
                  required
                  value={formData.guestName}
                  onChange={handleChange}
                  placeholder="John Doe"
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
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full rounded-xl border-2 border-slate-200 py-3.5 px-5 focus:ring-4 focus:ring-[#FFC107]/20 focus:border-[#FFC107] transition outline-none text-slate-900 font-medium bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    required
                    pattern="[0-9]{10}"
                    title="Enter a valid 10 digit phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="7780423648"
                    className="w-full rounded-xl border-2 border-slate-200 py-3.5 px-5 focus:ring-4 focus:ring-[#FFC107]/20 focus:border-[#FFC107] transition outline-none text-slate-900 font-medium bg-white"
                  />
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
              <div
                onClick={() => setPaymentMethod("card")}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center ${paymentMethod === "card" ? "border-[#FFC107] bg-yellow-50/50 shadow-sm" : "border-slate-200 hover:border-slate-300"}`}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${paymentMethod === "card" ? "border-[#FFC107]" : "border-slate-300"}`}
                >
                  {paymentMethod === "card" && (
                    <div className="w-2.5 h-2.5 bg-[#FFC107] rounded-full"></div>
                  )}
                </div>
                <CreditCard
                  className={`mr-2 ${paymentMethod === "card" ? "text-[#FFC107]" : "text-slate-400"}`}
                  size={20}
                />
                <span
                  className={`font-bold ${paymentMethod === "card" ? "text-slate-900" : "text-slate-600"}`}
                >
                  Pay Online Now
                </span>
              </div>

              <div
                onClick={() => setPaymentMethod("hotel")}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center ${paymentMethod === "hotel" ? "border-[#FFC107] bg-yellow-50/50 shadow-sm" : "border-slate-200 hover:border-slate-300"}`}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${paymentMethod === "hotel" ? "border-[#FFC107]" : "border-slate-300"}`}
                >
                  {paymentMethod === "hotel" && (
                    <div className="w-2.5 h-2.5 bg-[#FFC107] rounded-full"></div>
                  )}
                </div>
                <MapPin
                  className={`mr-2 ${paymentMethod === "hotel" ? "text-[#FFC107]" : "text-slate-400"}`}
                  size={20}
                />
                <span
                  className={`font-bold ${paymentMethod === "hotel" ? "text-slate-900" : "text-slate-600"}`}
                >
                  Pay at Hotel
                </span>
              </div>
            </div>

            {/* Conditional Content based on Payment Method */}
            {paymentMethod === "card" ? (
              <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="p-4 border-2 border-slate-100 bg-slate-50 rounded-xl mb-4">
                  <p className="text-sm text-slate-600 font-bold flex items-center">
                    <CheckCircle size={18} className="mr-2 text-green-500" />
                    This is a secure 256-bit encrypted payment placeholder.
                  </p>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full rounded-xl border-2 border-slate-200 py-3.5 px-5 focus:ring-4 focus:ring-[#FFC107]/20 focus:border-[#FFC107] transition outline-none text-slate-900 font-medium bg-white"
                  />
                  <CreditCard
                    className="absolute right-5 top-4 text-slate-400"
                    size={24}
                  />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full rounded-xl border-2 border-slate-200 py-3.5 px-5 focus:ring-4 focus:ring-[#FFC107]/20 focus:border-[#FFC107] transition outline-none text-slate-900 font-medium bg-white"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="w-full rounded-xl border-2 border-slate-200 py-3.5 px-5 focus:ring-4 focus:ring-[#FFC107]/20 focus:border-[#FFC107] transition outline-none text-slate-900 font-medium bg-white"
                  />
                </div>
              </div>
            ) : (
              <div className="p-6 border-2 border-[#FFC107]/30 bg-yellow-50/30 rounded-xl flex items-start animate-in fade-in slide-in-from-bottom-2 duration-300">
                <ConciergeBell
                  className="text-[#FFC107] mr-4 shrink-0 mt-1"
                  size={28}
                />
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">
                    No payment required right now.
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Your room will be reserved. You can pay via cash, card, or
                    UPI directly at the reception desk during your check-in
                    time.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="xl:col-span-1">
          <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-[#FFC107] sticky top-24">
            <h3 className="text-2xl font-black text-slate-900 mb-6 border-b border-slate-100 pb-4">
              Booking Summary
            </h3>

            <div className="flex gap-4 mb-8">
              <img
                src={room.images[0]}
                alt={room.name}
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000";
                }}
                className="w-24 h-24 object-cover rounded-2xl shadow-sm bg-slate-200"
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
                <span className="text-slate-500 font-semibold">Check-out</span>
                <span className="font-bold text-slate-900">
                  {formatDate(bookingDetails.checkOut)}
                </span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-slate-700 font-bold">
                <span>Room charge</span>
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
              disabled={isSubmitting}
              className={`w-full py-5 rounded-2xl font-black text-xl flex items-center justify-center transition-all ${isSubmitting ? "bg-yellow-200 text-slate-500 cursor-not-allowed" : "bg-[#FFC107] text-slate-900 hover:bg-yellow-400 shadow-lg hover:shadow-xl"}`}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-6 w-6 text-slate-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : paymentMethod === "hotel" ? (
                "Confirm Reservation"
              ) : (
                `Pay ₹${bookingDetails.total} & Book`
              )}
            </button>
            <p className="text-sm font-semibold text-center text-slate-400 mt-5">
              By booking, you agree to our terms.
            </p>
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
function AdminView({ bookings, onBack, onDelete}) {
  return (
    <div className="p-10 max-w-6xl mx-auto">
      <button onClick={onBack} className="mb-6 bg-gray-200 px-4 py-2 rounded">
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Room</th>
            <th className="p-2 border">Check-in</th>
            <th className="p-2 border">Guests</th>
            <th className="p-2 border">Total</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((b, index) => (
            <tr key={index}>
              <td className="p-2 border">{b.guestName}</td>
              <td className="p-2 border">{b.roomName}</td>
              <td className="p-2 border">{b.checkIn}</td>
              <td className="p-2 border">{b.guests}</td>
              <td className="p-2 border">₹{b.totalPrice}</td>
              <td className="p-2 border">
  <button
    onClick={() => onDelete(b.id)}
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
  );
}