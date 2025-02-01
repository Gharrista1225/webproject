import React from 'react';
import { Award, Heart, Package, Truck } from 'lucide-react';

const features = [
  {
    icon: <Award className="h-8 w-8 text-amber-600" />,
    title: "Curated Collection",
    description: "Each piece in our collection is carefully selected for its unique design and superior quality."
  },
  {
    icon: <Heart className="h-8 w-8 text-amber-600" />,
    title: "Handcrafted with Love",
    description: "We partner with skilled artisans who pour their heart into creating beautiful pieces."
  },
  {
    icon: <Package className="h-8 w-8 text-amber-600" />,
    title: "Secure Packaging",
    description: "Your items are carefully packaged to ensure they arrive safely at your doorstep."
  },
  {
    icon: <Truck className="h-8 w-8 text-amber-600" />,
    title: "Fast Delivery",
    description: "We ensure quick and reliable delivery to bring beauty to your home sooner."
  }
];

const About = () => {
  return (
    <div className="bg-neutral-50">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white font-bold">Our Story</h1>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Welcome to Gharista</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Founded in 2024, Gharista was born from a passion for transforming houses into homes through carefully curated decor pieces. Our name, derived from 'Ghar' meaning home, represents our commitment to helping you create spaces that tell your unique story.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center p-6 rounded-lg">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80"
                alt="Our Workshop"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Our Values</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Craftsmanship</h3>
                  <p className="text-gray-600">We believe in the beauty of well-crafted pieces that stand the test of time.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainable Practices</h3>
                  <p className="text-gray-600">Our commitment to sustainability guides every decision we make.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Satisfaction</h3>
                  <p className="text-gray-600">Your happiness with our products and service is our top priority.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;