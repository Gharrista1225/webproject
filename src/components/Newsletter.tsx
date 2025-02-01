import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-16 bg-amber-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-serif font-bold text-white mb-4">
          Join Our Newsletter
        </h2>
        <p className="text-white mb-8 max-w-2xl mx-auto">
          Subscribe to receive updates about new collections, special offers, and interior design inspiration.
        </p>
        <div className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;