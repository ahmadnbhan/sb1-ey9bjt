import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-amber-500 to-yellow-400 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-4">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-white">🌙 القمر الذهبي</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-100 px-3 py-2">الرئيسية</a>
            <a href="#" className="text-white hover:text-gray-100 px-3 py-2">خدماتنا</a>
            <a href="#" className="text-white hover:text-gray-100 px-3 py-2">أعمالنا</a>
            <a href="#" className="text-white hover:text-gray-100 px-3 py-2">اتصل بنا</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;