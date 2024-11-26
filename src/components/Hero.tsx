import React from 'react';

function Hero() {
  return (
    <div className="bg-gradient-to-b from-amber-500 to-amber-600 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold mb-6">شركة القمر الذهبي للدعاية والإعلان</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">نقدم حلول إعلانية مبتكرة وشاملة في مدينة جدة، من اللافتات الإعلانية إلى المطبوعات وشاشات المستشفيات</p>
        <button className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-colors text-lg">
          احصل على عرض سعر
        </button>
      </div>
    </div>
  );
}

export default Hero;