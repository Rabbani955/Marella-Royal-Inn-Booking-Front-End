import { useEffect, useState } from "react";

export default function WelcomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative overflow-hidden animate-fade-in">
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-2xl text-gray-600 hover:text-red-600"
        >
          ✕
        </button>

        {/* Offer Image */}
        <img src="/offer2.png" alt="Hotel Offer" className="w-full h-auto" />
        
     
      </div>
    </div>
  );
}
