import { useEffect, useState } from 'react';
import SimulationWrapper from './SimulationWrapper.jsx';
import { AwsIcon, CheckCircleIcon, LoadingSpinner } from './icons.jsx';

const existingMessages = [
    { id: '1f9d7305-18ab-4f07-b6ca-5b990b7d5e7a', sent: '2025-08-02+05:30', size: '1.89 KB', count: 2 },
    { id: '6aa0d4a7-d721-4f5d-8d0c-bdc1-4a3d6185e2', sent: '2025-08-02+05:30', size: '1.89 KB', count: 2 },
    { id: '5c7d7c8-9392-4a3c-b82a-4100c777f5e', sent: '2025-08-02+05:30', size: '1.89 KB', count: 2 },
];

const newMessage = { id: 'd889074b-d7be-4a2c-b51e-9b5db74fcfba', sent: '2025-08-05+05:30', size: '1.91 KB', count: 1 };


const AwsSqsView = ({ onComplete, onReset }) => {
    const [messages, setMessages] = useState(existingMessages);
    const [isPolling, setIsPolling] = useState(true);
    const [isNewMessageAdded, setIsNewMessageAdded] = useState(false);

    useEffect(() => {
        const pollTimer = setTimeout(() => {
            setIsPolling(false);
            setMessages(prev => [newMessage, ...prev]);
            setIsNewMessageAdded(true);
            const completeTimer = setTimeout(onComplete, 2000);
            return () => clearTimeout(completeTimer);
        }, 3000);
        
        return () => clearTimeout(pollTimer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const aiAssistantText = "The SNS notification is pushed to this SQS queue. A worker service is constantly polling this queue for new messages. A new message representing our email has just arrived and is now ready for processing.";

    return (
    <SimulationWrapper
      title="Step 4: Message Queued in Amazon SQS"
      aiAssistantText={aiAssistantText}
      onReset={onReset}
      hideNextButton={true}
    >
        <div className="bg-white border border-gray-200 rounded-lg">
            {/* Header */}
            <div className="flex items-center justify-between p-4 text-white bg-gray-800">
                <div className="flex items-center space-x-4">
                    <AwsIcon className="w-8 h-8" />
                    <span className="text-xl font-semibold">Amazon SQS</span>
                </div>
            </div>

            {/* Breadcrumbs */}
            <div className="p-3 text-sm text-gray-600 bg-white border-b">
                <span className="font-bold">Queues</span> &gt; bcas-dev-us2-ena-databricks &gt; <span className="font-bold">Send and receive messages</span>
            </div>

            <div className="p-6">
                <div className="flex items-start justify-between">
                    <h2 className="mb-4 text-2xl font-bold text-gray-800">Receive messages</h2>
                    <button className="px-4 py-2 text-sm font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600">Send message</button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-100 border rounded-lg">
                    <div className="flex items-center space-x-4">
                        <span className="font-semibold">Polling progress</span>
                        {isPolling ? (
                            <>
                                <LoadingSpinner className="w-5 h-5 text-blue-600" />
                                <span className="text-sm text-gray-600">5 receives/second</span>
                            </>
                        ) : (
                            <>
                                <CheckCircleIcon className="w-6 h-6 text-green-500" />
                                <span className="text-sm font-semibold text-green-700">Message received</span>
                            </>
                        )}
                    </div>
                    <button onClick={() => { setIsPolling(true); /* a real app would restart polling */}} disabled={isPolling} className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:bg-blue-300">
                        {isPolling ? 'Stop polling' : 'Poll for messages'}
                    </button>
                </div>
                
                <div className="mt-6 bg-white border rounded-lg">
                    <div className="flex items-center justify-between p-4 border-b">
                        <h3 className="text-lg font-semibold">Messages ({messages.length})</h3>
                    </div>
                    <div className="p-4">
                        <table className="w-full text-sm text-left">
                            <thead>
                                <tr className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <th className="px-3 py-2"><input type="checkbox" /></th>
                                    <th className="px-3 py-2">ID</th>
                                    <th className="px-3 py-2">Sent</th>
                                    <th className="px-3 py-2">Size</th>
                                    <th className="px-3 py-2">Receive count</th>
                                </tr>
                            </thead>
                            <tbody>
                                {messages.map((msg, index) => (
                                    <tr key={msg.id} className={`border-t ${index === 0 && isNewMessageAdded ? 'bg-green-100 animate-pulse' : ''}`}>
                                        <td className="px-3 py-3"><input type="checkbox" /></td>
                                        <td className="px-3 py-3 font-medium text-blue-600">{msg.id}</td>
                                        <td className="px-3 py-3">{msg.sent}</td>
                                        <td className="px-3 py-3">{msg.size}</td>
                                        <td className="px-3 py-3">{msg.count}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </SimulationWrapper>
    );
};

export default AwsSqsView;
