import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductSelector({ onSelect }) {
  const [selectedProduct, setSelectedProduct] = React.useState("");
  const navigate = useNavigate();

  const handleLearn = () => {
    if (selectedProduct) {
      navigate(`/learn/${encodeURIComponent(selectedProduct)}`);
    }
  };

  return (
    <div className="space-y-4 w-full max-w-xl">
      <h2 className="text-xl font-semibold text-center mb-4">Select a product to simulate:</h2>
      <select
        className="w-full px-6 py-3 rounded-lg border border-blue-300 bg-white text-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={e => { setSelectedProduct(e.target.value); onSelect(e.target.value); }}
        value={selectedProduct}
      >
        <option value="" disabled>Select a product...</option>
        <option value="BCAS">BCAS</option>
        <option value="IP/IR">IP/IR</option>
        <option value="WAF">WAF</option>
      </select>
      <button
        className="w-full mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold shadow hover:bg-blue-600 transition"
        onClick={handleLearn}
        disabled={!selectedProduct}
      >
        Learn
      </button>
    </div>
  );
}