import React from 'react';
export default function ProductSelector({ onSelect }) {
  return (
    <div className="space-y-4 w-full max-w-xl">
      <h2 className="text-xl font-semibold text-center mb-4">Select a product to simulate:</h2>
      <select
        className="w-full px-6 py-3 rounded-lg border border-blue-300 bg-white text-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={e => onSelect(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>Select a product...</option>
        <option value="Product A">Product A</option>
        <option value="Product B">Product B</option>
        <option value="Product C">Product C</option>
      </select>
      <button
        className="w-full mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold shadow hover:bg-blue-600 transition"
        onClick={() => alert('Learn more about the product!')}
      >
        Learn
      </button>
    </div>
  );
}