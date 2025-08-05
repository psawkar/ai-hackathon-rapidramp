import { InfoIcon } from './icons.jsx';

const SimulationWrapper = ({
  title,
  aiAssistantText,
  children,
  onNext,
  onReset,
  nextButtonText = 'Next Step',
  isNextDisabled = false,
  hideNextButton = false,
}) => {
  return (
    <div className="mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">{title}</h2>
        {children}
      </div>

      <div className="p-4 text-blue-800 border-l-4 border-blue-500 rounded-r-lg shadow-md bg-blue-50" role="alert">
        <div className="flex">
          <div className="py-1"><InfoIcon className="w-6 h-6 mr-4 text-blue-500"/></div>
          <div>
            <p className="font-bold">AI Assistant</p>
            <p className="text-sm">{aiAssistantText}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-6">
        <button
          onClick={onReset}
          className="px-4 py-2 font-bold text-white transition duration-300 ease-in-out bg-gray-500 rounded-lg hover:bg-gray-600"
        >
          Reset Simulation
        </button>
        {!hideNextButton && onNext && (
          <button
            onClick={onNext}
            disabled={isNextDisabled}
            className="flex items-center px-4 py-2 font-bold text-white transition duration-300 ease-in-out bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed"
          >
            {nextButtonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default SimulationWrapper;
