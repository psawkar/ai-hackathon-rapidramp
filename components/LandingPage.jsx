import { useState } from 'react';
import { Product } from '../types.js';

const LandingPage = ({ onStartSimulation }) => {
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleLearnClick = () => {
    if (selectedProduct) {
      onStartSimulation(selectedProduct);
    }
  };

  return (
    <div className="flex flex-col items-center max-w-4xl px-4 mx-auto space-y-8">
      <div className="w-full p-8 bg-white border-2 border-blue-300 shadow-lg rounded-2xl">
        <div className="p-6 text-center bg-blue-50 rounded-xl">
            <h2 className="mb-3 text-2xl font-bold text-blue-800">
            AI-Driven Simulation Platform for Internal Use:
            </h2>
            <p className="leading-relaxed text-gray-600">
            A smart onboarding and productivity platform that reads internal
            documentation, understands system workflows, and auto-generates
            interactive simulations of complex products. New Employees can explore
            step-by-step flows in simulated UIs guided by an AI assistant that
            explains, suggests actions, and answers questions in real time,
            consequently saving time spent on understanding the product.
            </p>
        </div>
      </div>

      <div className="flex flex-col items-center w-full max-w-sm space-y-4">
        <label htmlFor="product-select" className="text-lg font-semibold text-gray-700">
          Select a product to simulate:
        </label>
        <div className="relative w-full">
          <select
            id="product-select"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:bg-white focus:border-blue-500"
          >
            <option value="" disabled>Select a product...</option>
            {Object.values(Product).map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
            <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
        <button
          onClick={handleLearnClick}
          disabled={!selectedProduct}
          className="w-full px-4 py-3 font-bold text-white transition duration-300 ease-in-out bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed"
        >
          Learn
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
