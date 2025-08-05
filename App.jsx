import { useCallback, useState } from 'react';
import AwsS3View from './components/AwsS3View.jsx';
import AwsSnsView from './components/AwsSnsView.jsx';
import AwsSqsView from './components/AwsSqsView.jsx';
import ConfirmationModal from './components/ConfirmationModal.jsx';
import DatabricksView from './components/DatabricksView.jsx';
import DataOverviewFlowView from './components/DataOverviewFlowView.jsx';
import LandingPage from './components/LandingPage.jsx';
import SmtpClientView from './components/SmtpClientView.jsx';
import SummaryView from './components/SummaryView.jsx';
import { SimulationStep } from './types.js';

const App = () => {
  const [currentStep, setCurrentStep] = useState(SimulationStep.LANDING);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleStartSimulation = useCallback((product) => {
    setSelectedProduct(product);
    setShowConfirmation(true);
  }, []);

  const handleConfirmSimulation = useCallback(() => {
    setShowConfirmation(false);
    setCurrentStep(SimulationStep.SMTP_CLIENT);
  }, []);

  const handleCancelSimulation = useCallback(() => {
    setShowConfirmation(false);
  }, []);

  const handleReset = useCallback(() => {
    setCurrentStep(SimulationStep.LANDING);
    setSelectedProduct(null);
  }, []);

  const advanceStep = useCallback(() => {
    setCurrentStep(prev => {
        if (prev === SimulationStep.SUMMARY) return SimulationStep.LANDING;
        return prev + 1;
    });
  }, []);

  const renderCurrentStep = () => {
    switch (currentStep) {
      case SimulationStep.LANDING:
        return <LandingPage onStartSimulation={handleStartSimulation} />;
      case SimulationStep.SMTP_CLIENT:
        return <SmtpClientView onComplete={advanceStep} onReset={handleReset} />;
      case SimulationStep.DATA_OVERVIEW:
        return <DataOverviewFlowView onComplete={advanceStep} onReset={handleReset} />;
      case SimulationStep.SNS_VIEW:
        return <AwsSnsView onComplete={advanceStep} onReset={handleReset} />;
      case SimulationStep.SQS_VIEW:
        return <AwsSqsView onComplete={advanceStep} onReset={handleReset} />;
      case SimulationStep.S3_VIEW:
        return <AwsS3View onComplete={advanceStep} onReset={handleReset} />;
      case SimulationStep.DATABRICKS_VIEW:
        return <DatabricksView onComplete={advanceStep} onReset={handleReset} />;
      case SimulationStep.SUMMARY:
        return <SummaryView onComplete={handleReset} onReset={handleReset} />;
      default:
        return <LandingPage onStartSimulation={handleStartSimulation} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="w-full bg-white shadow-md">
        <div className="w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-800">
            Barracuda Learning Tool
          </h1>
        </div>
      </header>
      <main className="py-10">
        {renderCurrentStep()}
        {selectedProduct && (
          <ConfirmationModal
            isOpen={showConfirmation}
            productName={selectedProduct}
            onConfirm={handleConfirmSimulation}
            onCancel={handleCancelSimulation}
          />
        )}
      </main>
    </div>
  );
};

export default App;
