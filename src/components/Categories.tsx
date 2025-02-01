import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Wall Art',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80',
    slug: 'wall-art'
  },
  {
    name: 'Vases',
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&q=80',
    slug: 'vases'
  },
  {
    name: 'Lighting',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80',
    slug: 'lighting'
  },
  {
    name: 'Mirrors',
    image: 'https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?auto=format&fit=crop&q=80',
    slug: 'mirrors'
  },
  {
    name: 'Cushions',
    image: 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&q=80',
    slug: 'cushions'
  },
  {
    name: 'Rugs',
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&q=80',
    slug: 'rugs'
  },
  {
    name: 'Candles',
    image: 'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&q=80',
    slug: 'candles'
  },
  {
    name: 'Plants & Planters',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80',
    slug: 'plants-planters'
  },
  {
    name: 'Sculptures',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80',
    slug: 'sculptures'
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/category/${category.slug}`}
              className="relative group cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden rounded-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 group-hover:bg-opacity-40 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-serif text-white font-bold">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;