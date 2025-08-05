import { useEffect, useState } from 'react';
import SimulationWrapper from './SimulationWrapper.jsx';
import { AwsIcon } from './icons.jsx';

const initialFiles = [
    { name: 'fh-bcan-qa-us2-ingestion-stream-zip-2-2025-07-17-18-39-06-a1437f30-920f-42d5-b2b7-0f64f043d51f', lastModified: 'August 5, 2025, 01:24:16 (UTC+05:30)', size: '28.2 KB' },
    { name: 'up-0d03d00c-eba8-4f5a-8660-5fe4ae8a09b4.json', lastModified: 'August 5, 2025, 01:24:17 (UTC+05:30)', size: '690.0 B' },
];

const newFile = {
    name: 'email-gen-bma_d704eeb-74d3-4d6d-8276-71becf74cccd-0', lastModified: 'August 5, 2025, 02:31:40 (UTC+05:30)', size: '1.4 MB'
};


const AwsS3View = ({ onComplete, onReset }) => {
    const [files, setFiles] = useState(initialFiles);
    const [isFileAdded, setIsFileAdded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFiles(prev => [newFile, ...prev]);
            setIsFileAdded(true);
            const completeTimer = setTimeout(onComplete, 2000);
            return () => clearTimeout(completeTimer);
        }, 3000);

        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const aiAssistantText = "The parser service, triggered by the SQS message, has processed the raw email. It extracted the content and metadata, and stored the result as a structured JSON file in this 'ingested-documents' S3 bucket. The new file just appeared.";

    return (
    <SimulationWrapper
        title="Step 5: Document Ingested to Amazon S3"
        aiAssistantText={aiAssistantText}
        onReset={onReset}
        hideNextButton={true}
    >
        <div className="bg-white border border-gray-200 rounded-lg">
            {/* Header */}
            <div className="flex items-center justify-between p-4 text-white bg-gray-800">
                <div className="flex items-center space-x-4">
                    <AwsIcon className="w-8 h-8" />
                    <span className="text-xl font-semibold">Amazon S3</span>
                </div>
            </div>

            {/* Breadcrumbs */}
            <div className="p-3 text-sm text-gray-600 bg-white border-b">
                <span className="text-blue-600 cursor-pointer hover:underline">Buckets</span> &gt; <span className="text-blue-600 cursor-pointer hover:underline">bcan-dev-us2-data-ingent</span> &gt; <span className="text-blue-600 cursor-pointer hover:underline">date=2025-08-04/</span>
            </div>

            <div className="p-6">
                <h2 className="mb-4 text-2xl font-bold text-gray-800">Objects</h2>
                <div className="bg-white border rounded-lg">
                    <div className="flex items-center justify-between p-4 border-b">
                        <h3 className="text-lg font-semibold">Objects ( {files.length} )</h3>
                        <div className="space-x-2">
                            <button className="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300">Download</button>
                            <button className="px-4 py-2 text-sm font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600">Upload</button>
                        </div>
                    </div>
                    <div className="p-4">
                        <table className="w-full text-sm text-left">
                            <thead>
                                <tr className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <th className="px-3 py-2"><input type="checkbox" /></th>
                                    <th className="px-3 py-2">Name</th>
                                    <th className="px-3 py-2">Type</th>
                                    <th className="px-3 py-2">Last modified</th>
                                    <th className="px-3 py-2">Size</th>
                                </tr>
                            </thead>
                            <tbody>
                                {files.map((file, index) => (
                                    <tr key={file.name} className={`border-t ${index === 0 && isFileAdded ? 'bg-green-100 animate-pulse' : ''}`}>
                                        <td className="px-3 py-3"><input type="checkbox" /></td>
                                        <td className="px-3 py-3 font-medium text-blue-600 cursor-pointer hover:underline">{file.name}</td>
                                        <td className="px-3 py-3 text-gray-600">{file.name.endsWith('.json') ? 'json' : 'File'}</td>
                                        <td className="px-3 py-3">{file.lastModified}</td>
                                        <td className="px-3 py-3">{file.size}</td>
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

export default AwsS3View;
