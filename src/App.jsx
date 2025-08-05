import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import ProductSelector from './components/ProductSelector.jsx';
import FakeOutlook from './components/simulators/FakeOutlook.jsx';
import FakeAWSConsole from './components/simulators/FakeAWSConsole.jsx';
import TerminalLogPreview from './components/simulators/TerminalLogPreview.jsx';
import LearnProduct from './components/LearnProduct.jsx';
import { useParams } from 'react-router-dom';

// Wrapper to extract product from URL and pass to LearnProduct
function LearnProductWrapper() {
  const { product } = useParams();
  const architectureImg = "/image.png";
  const confluenceLinks = [{ label: `${product} Docs`, url: `https://confluence.example.com/${product}` }];
  const githubLinks = [{ label: `${product} Repo`, url: `https://github.com/example/${product}` }];
  return (
    <LearnProduct
      product={product}
      architectureImg={architectureImg}
      confluenceLinks={confluenceLinks}
      githubLinks={githubLinks}
    />
  );
}

function Home() {
  const navigate = useNavigate();

  // Only update selected product, do not navigate
  const [selectedProduct, setSelectedProduct] = React.useState("");
  const handleSelect = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        background: 'radial-gradient(circle, #fff 0%, #e0f2fe 100%)',
        boxShadow: '0 4px 24px 0 rgba(59, 130, 246, 0.15)',
        padding: '48px 0',
        zIndex: 10
      }}>
        <h1 className="text-5xl font-extrabold text-center text-gray-900 font-semibold">
          Barracuda Learning Tool
        </h1>
      </div>
      <div style={{ height: '120px' }} />
      <div
        style={{
          margin: '5vh 20vw',
          borderRadius: '1.5rem',
          background: '#f0f9ff',
          boxShadow: '0 2px 16px 0 rgba(59,130,246,0.10)',
          border: '1px solid #bae6fd',
          padding: '2.5rem',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#2563eb' }}>
          AI-Driven Simulation Platform for Internal Use:
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: 1.7 }}>
          A smart onboarding and productivity platform that reads internal documentation, understands system workflows, and auto-generates interactive simulations of complex products. New Employees can explore step-by-step flows in simulated UIs guided by an AI assistant that explains, suggests actions, and answers questions in real time, consequently saving time spent on understanding the product.
        </p>
      </div>
      <div className="flex justify-center items-center w-full mt-8 mb-8">
        <ProductSelector onSelect={handleSelect} selectedProduct={selectedProduct} navigate={navigate} />
      </div>
      {/* Confirmation dialog removed. */}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="simulators/outlook"
          element={
            <FakeOutlook
              onNext={() => window.location.replace('/kinesistoS3')}
            />
          }
        />
        <Route path="/kinesistoS3" element={<FakeAWSConsole />} />
        <Route path="/simulators/terminallog" element={<TerminalLogPreview />} />
        <Route
          path="/learn/:product"
          element={<LearnProductWrapper />}
        />
      </Routes>
    </Router>
  );
}

