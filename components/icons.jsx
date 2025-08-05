
export const KinesisIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="50" height="50" rx="10" fill="#7B1FA2"/>
    <path d="M25 10L12 18V32L25 40L38 32V18L25 10Z" fill="#9C27B0"/>
    <path d="M25 10V40" stroke="white" strokeWidth="2"/>
    <path d="M12 18L38 32" stroke="white" strokeWidth="2"/>
    <path d="M38 18L12 32" stroke="white" strokeWidth="2"/>
  </svg>
);

export const S3Icon = ({ className }) => (
  <svg className={className} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="50" height="50" rx="10" fill="#D32F2F"/>
    <rect x="10" y="15" width="30" height="20" rx="3" fill="#F44336"/>
    <path d="M10 20H40" stroke="white" strokeWidth="2"/>
    <circle cx="25" cy="28" r="5" fill="white"/>
  </svg>
);

export const SnsIcon = ({ className }) => (
    <img className={className} src="https://static.implemica.com/images/services/aws-sns-logo.png" alt="SNS Logo" />
);

export const SqsIcon = ({ className }) => (
    <img className={className} src="https://static.vecteezy.com/system/resources/previews/021/352/409/non_2x/amazon-sqs-icon-logo-editorial-free-vector.jpg" alt="SQS Logo" />
);

export const DatabricksIcon = ({ className }) => (
    <img className={className} src="https://avatars.githubusercontent.com/u/4925434?s=280&v=4" alt="Databricks Logo" />
);

export const AwsIcon = ({ className }) => (
    <svg className={className} fill="#FF9900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M188.8,88.4a100.2,100.2,0,0,0-121.6,0,12,12,0,0,0,17,17,76.2,76.2,0,0,1,87.6,0,12,12,0,0,0,17-17ZM227.2,46.1a12,12,0,0,0-16.4,2.3,148.2,148.2,0,0,0-169.6,0,12,12,0,0,0-14.1,18.7,172.4,172.4,0,0,1,197.8,0,12,12,0,0,0,18.7-14.1A11.8,11.8,0,0,0,227.2,46.1ZM128,124a52,52,0,1,0,52,52A52.1,52.1,0,0,0,128,124Zm0,80a28,28,0,1,1,28-28A28,28,0,0,1,128,204Z"></path></svg>
);

export const ArrowRightIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);

export const CheckCircleIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const InfoIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const LoadingSpinner = ({className}) => (
    <svg className={`animate-spin ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);
