import { useEffect, useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import SimulationWrapper from './SimulationWrapper.jsx';
import { ArrowRightIcon, AwsIcon, KinesisIcon, S3Icon } from './icons.jsx';

const initialData = [
  { name: 'T-4m', requests: 0, success: 0 },
  { name: 'T-3m', requests: 0, success: 0 },
  { name: 'T-2m', requests: 0, success: 0 },
  { name: 'T-1m', requests: 0, success: 0 },
  { name: '01:06 PM', requests: 0, success: 0 },
];

const finalDataPoints = [
    { name: 'T-4m', requests: 20, success: 20 },
    { name: 'T-3m', requests: 45, success: 45 },
    { name: 'T-2m', requests: 70, success: 70 },
    { name: 'T-1m', requests: 95, success: 95 },
    { name: '01:06 PM', requests: 100, success: 100 },
];

const logMessages = [
    "INFO: Received new email blob in Kinesis...",
    "INFO: Stored in s3://dummy-bucket/product-a",
    "INFO: Triggering Databricks job 'email_processor'",
    "INFO: Job completed successfully"
];

const DataOverviewFlowView = ({ onComplete, onReset }) => {
    const [chartData, setChartData] = useState(initialData);
    const [currentLog, setCurrentLog] = useState('');

    useEffect(() => {
        let step = 0;
        const interval = setInterval(() => {
            if (step < finalDataPoints.length) {
                setChartData(current => {
                    const newData = [...current];
                    newData[step] = finalDataPoints[step];
                    return newData;
                });
                setCurrentLog(prev => prev + logMessages[step] + ' ');
                step++;
            } else {
                clearInterval(interval);
                setTimeout(onComplete, 2000);
            }
        }, 1000);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const aiAssistantText = "The email has been sent and received by our system. It's now streamed into Amazon Kinesis Data Firehose, which delivers it to an S3 bucket. The charts show the real-time flow of data.";

  return (
    <SimulationWrapper
      title="Step 2: Data Overview Flow"
      aiAssistantText={aiAssistantText}
      onReset={onReset}
      hideNextButton={true}
    >
      <div className="p-6 bg-gray-100 rounded-lg">
        <div className="flex items-center p-4 text-sm text-gray-600 bg-white border-b rounded-t-lg">
          <AwsIcon className="w-6 h-6 mr-2" />
          <span className="font-bold">AWS Management Console</span>
          <span className="mx-2">&gt;</span>
          <span>Services</span>
          <span className="mx-2">&gt;</span>
          <span className="font-bold">Kinesis</span>
          <span className="mx-2">&gt;</span>
          <span className="font-bold">S3</span>
        </div>
        <div className="p-6 bg-white rounded-b-lg shadow-inner">
          <h3 className="mb-6 text-xl font-semibold text-gray-700">Data Overview Flow</h3>
          <div className="flex items-center justify-center my-8 space-x-8">
            <div className="flex flex-col items-center">
              <div className="p-4 bg-white border rounded-full shadow-lg">
                <KinesisIcon className="w-16 h-16" />
              </div>
              <span className="mt-2 font-semibold text-gray-600">Kinesis</span>
            </div>
            <ArrowRightIcon className="w-12 h-12 text-gray-400" />
            <div className="flex flex-col items-center">
              <div className="p-4 bg-white border rounded-full shadow-lg">
                <S3Icon className="w-16 h-16" />
              </div>
              <span className="mt-2 font-semibold text-gray-600">S3</span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ChartCard title="Incoming Put Requests" data={chartData} dataKey="requests" />
            <ChartCard title="Delivery to Amazon S3 Success" data={chartData} dataKey="success" />
          </div>
          <div className="mt-8">
            <p className="text-lg font-semibold text-center">
              <span className="text-purple-600">Kinesis</span> received the message and pushed it to <span className="text-red-600">S3</span>.
            </p>
            <div className="p-4 mt-4 overflow-x-auto font-mono text-sm text-white bg-gray-800 rounded-lg">
              {currentLog}
              <span className="animate-ping">_</span>
            </div>
          </div>
        </div>
      </div>
    </SimulationWrapper>
  );
};


const ChartCard = ({title, data, dataKey}) => (
    <div className="p-4 bg-white border rounded-lg shadow">
        <h4 className="mb-4 font-semibold text-gray-700">{title}</h4>
        <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} tickFormatter={(tick) => `${tick}%`} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey={dataKey} stroke="#3b82f6" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="constant" stroke="#22c55e" strokeDasharray="5 5" data={[{name: 'T-4m', constant:100}, {name: '01:06 PM', constant:100}]} />
            </LineChart>
        </ResponsiveContainer>
    </div>
);

export default DataOverviewFlowView;
