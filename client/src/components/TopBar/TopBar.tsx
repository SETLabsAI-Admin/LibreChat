import React from 'react';

export default function TopBar() {
  return (
    <div className="flex items-center px-4 py-2 shadow-md"
         style={{ backgroundColor: "#004080" }}> {/* brand color */}
      <img src="/logo.png" alt="Logo" className="h-8 mr-3" />
      <span className="text-white font-semibold text-lg">Your Company</span>
    </div>
  );
}
