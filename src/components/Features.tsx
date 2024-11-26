import React from 'react';

function Features() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-amber-600">خدماتنا المتميزة</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 hover:shadow-xl transition-shadow rounded-lg">
            <div className="text-4xl mb-4">🖥️</div>
            <h3 className="text-xl font-semibold mb-2">شاشات المستشفيات</h3>
            <p className="text-gray-600">إعلانات رقمية في جميع مستشفيات جدة الرئيسية</p>
          </div>
          <div className="text-center p-6 hover:shadow-xl transition-shadow rounded-lg">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold mb-2">تصميم وطباعة</h3>
            <p className="text-gray-600">جميع أنواع المطبوعات بجودة عالية وتصاميم احترافية</p>
          </div>
          <div className="text-center p-6 hover:shadow-xl transition-shadow rounded-lg">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">لافتات إعلانية</h3>
            <p className="text-gray-600">تصنيع وتركيب جميع أنواع اللافتات الإعلانية</p>
          </div>
        </div>
        
        <div className="mt-16 bg-amber-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-center mb-8 text-amber-600">لماذا تختار القمر الذهبي؟</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="font-bold mb-2">✓ خبرة طويلة</div>
              <p className="text-gray-600">أكثر من 15 عام في السوق</p>
            </div>
            <div className="text-center">
              <div className="font-bold mb-2">✓ تغطية شاملة</div>
              <p className="text-gray-600">نصل لكل مكان في جدة</p>
            </div>
            <div className="text-center">
              <div className="font-bold mb-2">✓ جودة عالية</div>
              <p className="text-gray-600">أحدث التقنيات والمعدات</p>
            </div>
            <div className="text-center">
              <div className="font-bold mb-2">✓ أسعار تنافسية</div>
              <p className="text-gray-600">عروض وباقات متنوعة</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;