import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import ProductSelector from './components/ProductSelector.jsx';
import FakeOutlook from './components/simulators/FakeOutlook.jsx';
import FakeAWSConsole from './components/simulators/FakeAWSConsole.jsx';

function Home() {
  const [showDialog, setShowDialog] = React.useState(false);
  const navigate = useNavigate();

  const handleSelect = (product) => {
    if (product === 'Product A') {
      setShowDialog(true);
    }
  };

  const handleDialogOk = () => {
    setShowDialog(false);
    navigate('/outlook');
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">AI Simulation Demo</h1>
      <ProductSelector onSelect={handleSelect} />
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Simulate Product A</h2>
            <p>Are you sure you want to simulate Product A?</p>
            <div className="mt-6 flex justify-end gap-2">
              <button onClick={() => setShowDialog(false)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                Cancel
              </button>
              <button onClick={handleDialogOk} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/outlook"
          element={
            <FakeOutlook
              onNext={() => window.location.replace('/kinesistoS3')}
            />
          }
        />
        <Route path="/kinesistoS3" element={<FakeAWSConsole />} />
      </Routes>
    </Router>
  );
}
