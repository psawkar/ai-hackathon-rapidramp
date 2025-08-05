import React, { useState } from 'react';
import FakeOutlook from './simulators/FakeOutlook';
import FakeAWSConsole from './simulators/FakeAWSConsole';
const simulationSteps = [
  { id: 'outlook', component: FakeOutlook },
  { id: 'aws', component: FakeAWSConsole },
];
export default function SimulationEngine({ product }) {
  const [currentStep, setCurrentStep] = useState(0);
  const StepComponent = simulationSteps[currentStep].component;
  const goNext = () => {
    if (currentStep < simulationSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Simulating: {product}</h2>
      <StepComponent onNext={goNext} />
    </div>
  );
}