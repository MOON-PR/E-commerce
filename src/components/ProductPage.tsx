"use client";

import Link from "next/link";
import React from "react";

// Interface Props
interface ProductPageProps {
  mainImage: string;
  thumbnails: string[];
}

// Mock Data for Recommendations
const recommendations = [
  { name: "Graphic Tee", image: "516VrcCh7rL._AC_UY1000_.jpg", price: "$120" },
  { name: "Denim Jacket", image: "/download.jpeg", price: "$120" },
  { name: "Running Shoes", image: "/download (1).jpeg", price: "$120" },
  { name: "Leather Belt", image: "/download (2).jpeg", price: "$120" },
  { name: "Winter Jacket", image: "/download (3).jpeg", price: "$120" },
  { name: "Sneakers", image: "/download (4).jpeg", price: "$120" },
  { name: "Cargo Pants", image: "/images.jpeg", price: "$120" },
  { name: "Sunglasses", image: "/download (5).jpeg", price: "$120" },
];

const ProductPage: React.FC<ProductPageProps> = ({ mainImage, thumbnails }) => {
  return (
    <div className="container mx-auto px-6 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6">
        <a href="/" className="hover:text-black">Home</a> &gt;{" "}
        <a href="/shop" className="hover:text-black">Shop</a> &gt;{" "}
        <a href="/shop/tshirts" className="hover:text-black">T-Shirts</a> &gt;{" "}
        <span className="text-black">One Life Graphic T-Shirt</span>
      </nav>

      {/* Product Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {/* Product Images */}
        <div>
          <img
            src={mainImage}
            alt="Product"
            className="w-full rounded-lg shadow-md"
          />
          <div className="flex space-x-4 mt-4">
            {thumbnails.map((thumb, idx) => (
              <img
                key={idx}
                src={thumb}
                alt={`Thumbnail ${idx + 1}`}
                className="w-16 h-16 rounded-md border hover:shadow-lg transition-shadow"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4 text-black">One Life Graphic T-Shirt</h1>

          {/* Reviews Section */}
          <div className="flex items-center mb-4">
            <span className="text-yellow-500">★★★★★</span>
            <span className="ml-2 text-black">(4.6/5 - 350 reviews)</span>
          </div>

          {/* Pricing Information */}
          <div className="flex items-center mb-6">
            <span className="text-2xl font-bold text-green-600">$260</span>
            <span className="line-through ml-4 text-sm text-gray-600">$300</span>
          </div>

          {/* Add to Cart Button */}
          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-black">All Reviews</h2>
          <div className="flex gap-4">
            <button className="bg-gray-200 px-4 py-2 rounded-md text-black">Newest</button>
            <button className="bg-gray-200 px-4 py-2 rounded-md text-black">Oldest</button>
            <button className="bg-blue-500 text-black px-4 py-2 rounded-md">Write a Review</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-black">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-black">User {index + 1}</h3>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      className={`w-4 h-4 ${starIndex < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.672c.3.922-.755 1.688-1.538 1.118l-3.976-2.8a1 1 0 00-1.036 0l-3.976 2.8c-.783.57-1.838-.196-1.538-1.118l1.518-4.672a1 1 0 00-.363-1.118L2.489 9.91c-.783-.57-.381-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z" />
                    </svg>
                  ))}
                  <span className="text-sm text-black">4.5</span>
                </div>
              </div>
              <p className="text-black">This is a sample review text for user feedback.</p>
            </div>
          ))}
        </div>

        <button className="mt-6 bg-gray-200 px-6 py-2 rounded-md text-black">Load More Reviews</button>
      </div>

      {/* Recommendations Section */}
      <div className="mt-12 relative">
        <h2 className="text-2xl font-bold mb-6 text-black">You Might Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {recommendations.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 text-center hover:scale-105 transition-transform"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-36 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{product.price}</p>
            </div>
          ))}
        </div>

        {/* Next Page Button */}
        <button className="absolute right-0 top-0 bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-600 transition-colors">
          <Link href={'/casual'}>
          Next Page
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
