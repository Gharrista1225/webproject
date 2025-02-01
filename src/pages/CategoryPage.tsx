import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const categoryProducts: Record<string, Product[]> = {
  'wall-art': [
    {
      id: 1,
      name: 'Abstract Canvas Print',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&q=80',
      category: 'Wall Art'
    },
    {
      id: 2,
      name: 'Modern Art Collection',
      price: 399.99,
      image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?auto=format&fit=crop&q=80',
      category: 'Wall Art'
    }
  ],
  'vases': [
    {
      id: 3,
      name: 'Ceramic Vase Set',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1612196808214-b40ab6cd2980?auto=format&fit=crop&q=80',
      category: 'Vases'
    },
    {
      id: 4,
      name: 'Modern Glass Vase',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1581912492723-688317ba2162?auto=format&fit=crop&q=80',
      category: 'Vases'
    }
  ],
  'lighting': [
    {
      id: 5,
      name: 'Modern Pendant Light',
      price: 249.99,
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80',
      category: 'Lighting'
    },
    {
      id: 6,
      name: 'Table Lamp',
      price: 159.99,
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80',
      category: 'Lighting'
    }
  ],
  'mirrors': [
    {
      id: 7,
      name: 'Round Wall Mirror',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?auto=format&fit=crop&q=80',
      category: 'Mirrors'
    },
    {
      id: 8,
      name: 'Decorative Mirror',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&q=80',
      category: 'Mirrors'
    }
  ],
  'cushions': [
    {
      id: 9,
      name: 'Decorative Cushion Set',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&q=80',
      category: 'Cushions'
    },
    {
      id: 10,
      name: 'Velvet Cushion',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?auto=format&fit=crop&q=80',
      category: 'Cushions'
    }
  ],
  'rugs': [
    {
      id: 11,
      name: 'Vintage Persian Rug',
      price: 599.99,
      image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&q=80',
      category: 'Rugs'
    },
    {
      id: 12,
      name: 'Modern Area Rug',
      price: 399.99,
      image: 'https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?auto=format&fit=crop&q=80',
      category: 'Rugs'
    }
  ],
  'candles': [
    {
      id: 13,
      name: 'Scented Candle Set',
      price: 69.99,
      image: 'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&q=80',
      category: 'Candles'
    },
    {
      id: 14,
      name: 'Luxury Candle',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1608181831718-c9ffd8728e95?auto=format&fit=crop&q=80',
      category: 'Candles'
    }
  ],
  'plants-planters': [
    {
      id: 15,
      name: 'Ceramic Planter Set',
      price: 119.99,
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80',
      category: 'Plants & Planters'
    },
    {
      id: 16,
      name: 'Modern Plant Stand',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1598880940371-c756e015faf1?auto=format&fit=crop&q=80',
      category: 'Plants & Planters'
    }
  ],
  'sculptures': [
    {
      id: 17,
      name: 'Abstract Sculpture',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80',
      category: 'Sculptures'
    },
    {
      id: 18,
      name: 'Modern Art Piece',
      price: 449.99,
      image: 'https://images.unsplash.com/photo-1569430044663-054ffc0c50c5?auto=format&fit=crop&q=80',
      category: 'Sculptures'
    }
  ]
};

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { dispatch } = useCart();
  const products = categoryProducts[categoryName?.toLowerCase() ?? ''] || [];
  const categoryTitle = products[0]?.category || categoryName;

  const addToCart = (product: Product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8 text-center">{categoryTitle}</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </div>
  );
};

export default CategoryPage;