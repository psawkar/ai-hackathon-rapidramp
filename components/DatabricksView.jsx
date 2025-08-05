import { useEffect, useState } from 'react';
import SimulationWrapper from './SimulationWrapper.jsx';
import { CheckCircleIcon, DatabricksIcon, LoadingSpinner } from './icons.jsx';

const initialJobs = [
    { id: 17071820, startTime: 'Jun 12, 2025, 01:26', duration: '16h 58m 5s', status: 'Canceled' },
    { id: 82639278, startTime: 'Jun 02, 2025, 01:26', duration: '24h 24m 29s', status: 'Canceled' },
];

const newJob = {
    id: 68265981, startTime: 'Jul 08, 2025, 12:26', duration: '187d 18m 9s', status: 'Running'
};

const DatabricksView = ({ onComplete, onReset }) => {
    const [jobs, setJobs] = useState(initialJobs);
    const [isJobAdded, setIsJobAdded] = useState(false);

    useEffect(() => {
        const addJobTimer = setTimeout(() => {
            setJobs(prev => [newJob, ...prev]);
            setIsJobAdded(true);
            
            const succeedJobTimer = setTimeout(() => {
                setJobs(prev => prev.map(job => job.id === newJob.id ? { ...job, status: 'Succeeded' } : job));
                
                const completeTimer = setTimeout(onComplete, 2000);
                return () => clearTimeout(completeTimer);

            }, 4000);
            return () => clearTimeout(succeedJobTimer);

        }, 2000);
        
        return () => clearTimeout(addJobTimer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const aiAssistantText = "The new file in S3 has triggered a Databricks job. This job reads the structured JSON data, performs transformations and enrichments, and loads it into a Delta Table for analytics and querying. The job is now running.";

    return (
    <SimulationWrapper
        title="Step 6: Processing with Databricks"
        aiAssistantText={aiAssistantText}
        onReset={onReset}
        hideNextButton={true}
    >
      <div className="bg-[#1a2332] text-white rounded-lg border border-gray-700">
        <div className="flex items-center p-4 space-x-4 border-b border-gray-700">
            <DatabricksIcon className="w-8 h-8 rounded-md" />
            <h2 className="text-xl font-semibold">Jobs & Pipelines</h2>
        </div>
        <div className="p-6">
            <h3 className="mb-4 text-2xl font-bold">Runs</h3>
            <div className="bg-[#242e3e] border border-gray-600 rounded-lg">
                <div className="p-4 border-b border-gray-600">
                    <h4 className="text-lg font-semibold">Job details</h4>
                </div>
                <div className="p-4">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-400 uppercase">
                            <tr>
                                <th className="px-3 py-2">Start time</th>
                                <th className="px-3 py-2">Run ID</th>
                                <th className="px-3 py-2">Duration</th>
                                <th className="px-3 py-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map((job, index) => (
                                <tr key={job.id} className={`border-t border-gray-600 ${index === 0 && isJobAdded ? 'bg-blue-900/50' : ''}`}>
                                    <td className="px-3 py-3">{job.startTime}</td>
                                    <td className="px-3 py-3 text-blue-400 cursor-pointer hover:underline">{job.id}</td>
                                    <td className="px-3 py-3">{job.duration}</td>
                                    <td className="px-3 py-3">
                                        <span className={`flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                            job.status === 'Succeeded' ? 'bg-green-900 text-green-300' : 
                                            job.status === 'Running' ? 'bg-blue-900 text-blue-300' : 
                                            'bg-red-900 text-red-300'
                                        }`}>
                                            {job.status === 'Running' && <LoadingSpinner className="w-3 h-3"/>}
                                            {job.status === 'Succeeded' && <CheckCircleIcon className="w-4 h-4"/>}
                                            {job.status}
                                        </span>
                                    </td>
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

export default DatabricksView;
