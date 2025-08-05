import { useEffect } from 'react';
import SimulationWrapper from './SimulationWrapper.jsx';
import { AwsIcon } from './icons.jsx';

const AwsSnsView = ({ onComplete, onReset }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 3000);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  const aiAssistantText = "An S3 event triggers a notification to an Amazon SNS topic. This decouples our services, allowing multiple systems to subscribe and react to new data. Here, an SQS queue is subscribed to this topic to receive the notification.";

  return (
    <SimulationWrapper
      title="Step 3: Notification via Amazon SNS"
      aiAssistantText={aiAssistantText}
      onReset={onReset}
      hideNextButton={true}
    >
      <div className="overflow-hidden border border-gray-200 rounded-lg bg-gray-50">
        {/* Header */}
        <div className="flex items-center justify-between p-4 text-white bg-gray-800">
            <div className="flex items-center space-x-4">
                <AwsIcon className="w-8 h-8" />
                <span className="text-xl font-semibold">Amazon SNS</span>
            </div>
        </div>

        {/* Breadcrumbs */}
        <div className="p-3 text-sm text-gray-600 bg-white border-b">
            <span className="font-bold">Amazon SNS</span> &gt; <span className="font-bold">Topics</span> &gt; bcas-sqs-sns
        </div>
        
        <div className="p-6">
            {/* Topic Details */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">bcas-sqs-sns</h2>
                <div className="space-x-2">
                    <button className="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300">Edit</button>
                    <button className="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300">Delete</button>
                    <button className="px-4 py-2 text-sm font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600">Publish message</button>
                </div>
            </div>
            
            <div className="p-4 mb-6 bg-white border rounded-lg">
                <h3 className="mb-4 text-lg font-semibold">Details</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div><span className="font-bold text-gray-600">Name</span><p>bcas-sqs-sns</p></div>
                    <div><span className="font-bold text-gray-600">Display name</span><p>-</p></div>
                    <div><span className="font-bold text-gray-600">ARN</span><p>arn:aws:sns:us-east-2:552181196650:bcas-sqs-sns</p></div>
                    <div><span className="font-bold text-gray-600">Topic owner</span><p>552181196650</p></div>
                    <div><span className="font-bold text-gray-600">Type</span><p>Standard</p></div>
                </div>
            </div>

            {/* Subscriptions */}
            <div className="bg-white border rounded-lg">
                <div className="flex items-center justify-between p-4 border-b">
                    <h3 className="text-lg font-semibold">Subscriptions (1)</h3>
                    <button className="px-4 py-2 text-sm font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600">Create subscription</button>
                </div>
                <div className="p-4 m-4 border-2 border-green-400 rounded-lg animate-pulse bg-green-50">
                    <table className="w-full text-sm text-left">
                        <thead>
                            <tr className="text-xs text-gray-700 uppercase">
                                <th className="px-3 py-2">ID</th>
                                <th className="px-3 py-2">Endpoint</th>
                                <th className="px-3 py-2">Status</th>
                                <th className="px-3 py-2">Protocol</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t">
                                <td className="px-3 py-3 font-medium text-blue-600">d889074b-d7be-4a2c-b51e-9b5db74fcfba</td>
                                <td className="px-3 py-3">arn:aws:sqs:us-east-2:552181196650:bcas-sqs</td>
                                <td className="px-3 py-3"><span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">Confirmed</span></td>
                                <td className="px-3 py-3">SQS</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div>
    </SimulationWrapper>
  );
};

export default AwsSnsView;
