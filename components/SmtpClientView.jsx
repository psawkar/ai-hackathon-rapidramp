import { useState } from 'react';
import SimulationWrapper from './SimulationWrapper.jsx';

const SmtpClientView = ({ onComplete, onReset }) => {
  const [to, setTo] = useState('dvdvkdkm');
  const [subject, setSubject] = useState('fhvh');
  const [body, setBody] = useState('kmvkdvknknv');
  const [isSent, setIsSent] = useState(false);

  const handleSend = () => {
    setIsSent(true);
    setTimeout(() => {
        onComplete();
    }, 1500);
  };

  const aiAssistantText = "This is the starting point of our workflow. An external client sends an email. In this simulation, you will act as the client. The fields are pre-filled for this demo. Click 'Send' to kick off the process.";

  return (
    <SimulationWrapper
      title="Step 1: Send Email via SMTP Client"
      aiAssistantText={aiAssistantText}
      onNext={handleSend}
      onReset={onReset}
      nextButtonText='Send'
      isNextDisabled={isSent}
      hideNextButton={true}
    >
        <div className="max-w-4xl p-6 mx-auto text-white bg-gray-800 rounded-lg shadow-2xl">
            <div className="space-y-2">
                <div className="flex items-center pb-2 border-b border-gray-600">
                    <label htmlFor="from" className="w-20 text-gray-400">From:</label>
                    <input id="from" type="text" readOnly value="Pragati Girish Sawkar (psawkar@barracuda.com)" className="w-full p-2 bg-transparent focus:outline-none" />
                </div>
                <div className="flex items-center pb-2 border-b border-gray-600">
                    <label htmlFor="to" className="w-20 text-gray-400">To:</label>
                    <input id="to" type="text" value={to} onChange={e => setTo(e.target.value)} placeholder="Enter recipient" className="w-full p-2 bg-transparent focus:outline-none" />
                </div>
                <div className="flex items-center pb-2 border-b border-gray-600">
                    <label htmlFor="subject" className="w-20 text-gray-400">Subject:</label>
                    <input id="subject" type="text" value={subject} onChange={e => setSubject(e.target.value)} placeholder="Subject line" className="w-full p-2 bg-transparent focus:outline-none" />
                </div>
                <textarea
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    className="w-full h-48 p-2 mt-2 bg-gray-800 border border-blue-500 rounded-md resize-none focus:outline-none"
                    placeholder="Get Outlook for Mac"
                />
            </div>
            <div className="flex mt-4 space-x-2">
                <button onClick={handleSend} disabled={isSent} className="px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700 disabled:bg-blue-400">
                    {isSent ? 'Sending...' : 'Send'}
                </button>
                <button className="px-4 py-2 font-bold text-white bg-gray-600 rounded hover:bg-gray-700">Discard</button>
                <button className="px-4 py-2 font-bold text-white bg-gray-600 rounded hover:bg-gray-700">Attach File</button>
                <button className="px-4 py-2 font-bold text-white bg-gray-600 rounded hover:bg-gray-700">Loop Components</button>
                <button className="px-4 py-2 font-bold text-white bg-gray-600 rounded hover:bg-gray-700">Signature</button>
                <button className="px-4 py-2 font-bold text-white bg-gray-600 rounded hover:bg-gray-700">Sensitivity</button>
                <button className="px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700">Editor</button>
            </div>
        </div>
    </SimulationWrapper>
  );
};

export default SmtpClientView;
