import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-amber-700 to-amber-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-right">
            <h4 className="text-lg font-bold mb-4">تواصل معنا</h4>
            <p className="mb-2">📱 جوال: 0500000000</p>
            <p className="mb-2">📞 هاتف: 0126000000</p>
            <p>📧 البريد: info@goldenmoon.com</p>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-bold mb-4">العنوان</h4>
            <p>شارع الأمير سلطان</p>
            <p>جدة، المملكة العربية السعودية</p>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-4">تابعنا على</h4>
            <div className="space-x-4">
              <a href="#" className="hover:text-amber-300">تويتر</a>
              <a href="#" className="hover:text-amber-300">انستغرام</a>
              <a href="#" className="hover:text-amber-300">فيسبوك</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-amber-600">
          <p>جميع الحقوق محفوظة © 2024 شركة القمر الذهبي للدعاية والإعلان</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;