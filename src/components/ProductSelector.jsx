import React from 'react';
export default function ProductSelector({ onSelect }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Select a product to simulate:</h2>
      <button
        onClick={() => onSelect('Product A')}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Simulate Product A
      </button>
    </div>
  );
}