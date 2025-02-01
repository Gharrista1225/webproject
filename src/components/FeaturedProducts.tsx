import React from 'react';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: 'Ceramic Vase Set',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1612196808214-b40ab6cd2980?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Abstract Wall Art',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'Modern Table Lamp',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    name: 'Decorative Mirror',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?auto=format&fit=crop&q=80'
  }
];

const FeaturedProducts = () => {
  const { dispatch } = useCart();

  const addToCart = (product: typeof products[0]) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden rounded-lg bg-white shadow-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                  <p className="text-amber-600 font-semibold mt-2">${product.price}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full mt-4 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;