import React from 'react';

function KinesisIcon() {
  return (
    <div className="bg-white rounded-full shadow-lg p-2 flex items-center justify-center mx-4">
      <img
        src="https://worldvectorlogo.com/logos/amazon-kinesis-1.svg"
        alt="Kinesis"
        style={{ width: 64, height: 64 }}
      />
    </div>
  );
}

function S3Icon() {
  return (
    <div className="bg-white rounded-full shadow-lg p-2 flex items-center justify-center mx-4">
      <img
        src="https://www.streamlinehq.com/icons/tag/s3.svg"
        alt="S3"
        style={{ width: 64, height: 64 }}
      />
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 32 32" className="inline mx-2" fill="none">
      <path d="M8 16h16m-4-4l4 4-4 4" stroke="#F59E42" strokeWidth="3" fill="none"/>
    </svg>
  );
}

function SimpleGraph({ title }) {
  const now = new Date();
  const timeLabel = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return (
    <div className="bg-white rounded-lg shadow border p-4 mb-8 w-full">
      <div className="font-semibold mb-2">{title}</div>
      <svg width="100%" height="120" viewBox="0 0 400 120">
        {/* Y axis */}
        <line x1="40" y1="10" x2="40" y2="100" stroke="#888" />
        {/* X axis */}
        <line x1="40" y1="100" x2="380" y2="100" stroke="#888" />
        {/* 100% line */}
        <line x1="40" y1="20" x2="380" y2="20" stroke="#22c55e" strokeDasharray="6" strokeWidth="2" />
        {/* Current time marker */}
        <circle cx="370" cy="20" r="5" fill="#22c55e" />
        {/* Example data line */}
        <polyline
          fill="none"
          stroke="#2563eb"
          strokeWidth="3"
          points="40,100 100,60 180,40 260,30 370,20"
        />
        {/* Y axis labels */}
        <text x="10" y="25" fontSize="12" fill="#555">100%</text>
        <text x="10" y="60" fontSize="12" fill="#555">50%</text>
        <text x="10" y="100" fontSize="12" fill="#555">0%</text>
        {/* X axis labels */}
        <text x="40" y="115" fontSize="12" fill="#555">T-4m</text>
        <text x="100" y="115" fontSize="12" fill="#555">T-3m</text>
        <text x="180" y="115" fontSize="12" fill="#555">T-2m</text>
        <text x="260" y="115" fontSize="12" fill="#555">T-1m</text>
        <text x="350" y="115" fontSize="12" fill="#555">{timeLabel}</text>
      </svg>
    </div>
  );
}

export default function FakeAWSConsole() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation Bar */}
      <div className="bg-gray-900 text-white flex items-center px-6 py-3 shadow">
        <img
          src="https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png"
          alt="AWS"
          style={{ height: 32, marginRight: 16 }}
        />
        <span className="font-bold text-lg tracking-wide">AWS Management Console</span>
        <span className="ml-6 text-gray-300">Services &gt; Kinesis &gt; S3</span>
      </div>
      {/* Main Content */}
      <div className="flex justify-center mt-10">
        <div className="bg-white rounded-xl shadow-xl border p-8 w-[90vw] max-w-[1400px]">
          <h2 className="text-2xl font-semibold mb-8 text-gray-800">Data Overview Flow</h2>
          <div className="flex items-center justify-center mb-8">
            <KinesisIcon />
            <ArrowIcon />
            <S3Icon />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <SimpleGraph title="Incoming Put Requests" />
            <SimpleGraph title="Delivery to Amazon S3 Success" />
          </div>
          <div className="text-center mb-4 text-lg text-gray-800 font-semibold">
            <span className="text-orange-500">Kinesis</span> received the message and pushed it to <span className="text-yellow-600">S3</span>.
          </div>
          <div className="bg-gray-50 border rounded p-4 font-mono text-sm text-gray-700">
{`INFO: Received new email blob in Kinesis
INFO: Stored in s3://dummy-bucket/product-a
INFO: Triggering Databricks job 'email_processor'
INFO: Job completed successfully`}
          </div>
        </div>
      </div>
    </div>
  );
}