import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[600px] bg-cover bg-center" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80")'
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-serif text-white font-bold mb-6">
            Transform Your Space Into Art
          </h1>
          <p className="text-xl text-white mb-8">
            Discover our curated collection of elegant home decor pieces that bring sophistication to every corner of your home.
          </p>
          <button className="bg-amber-600 text-white px-8 py-3 rounded-md hover:bg-amber-700 transition-colors">
            Shop Collection
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;