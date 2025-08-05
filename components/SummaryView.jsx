import SimulationWrapper from './SimulationWrapper.jsx';
import { CheckCircleIcon } from './icons.jsx';

const SummaryView = ({ onComplete, onReset }) => {
  const aiAssistantText = "Congratulations! You have completed the simulation of the product workflow. From sending an email to processing it through Kinesis, S3, SNS, SQS, and finally Databricks, you've seen the entire data journey. The data is now ready for use in our systems.";

  return (
    <SimulationWrapper
      title="Simulation Complete!"
      aiAssistantText={aiAssistantText}
      onReset={onReset}
      onNext={onComplete}
      nextButtonText="Start Over"
    >
      <div className="p-8 text-center border-2 border-green-300 rounded-lg bg-green-50">
        <CheckCircleIcon className="w-24 h-24 mx-auto mb-4 text-green-500" />
        <h2 className="mb-2 text-3xl font-bold text-gray-800">Workflow Completed Successfully</h2>
        <p className="max-w-2xl mx-auto mb-6 text-gray-600">
          You have successfully simulated the end-to-end process. This interactive walkthrough demonstrated how different services work together to process incoming data.
        </p>
        <div className="max-w-3xl p-2 mx-auto my-4 bg-white rounded-lg shadow">
          <img src="https://i.ibb.co/6PSpWJg/architecture.png" alt="Architecture Diagram" className="rounded-md" />
        </div>
      </div>
    </SimulationWrapper>
  );
};

export default SummaryView;
