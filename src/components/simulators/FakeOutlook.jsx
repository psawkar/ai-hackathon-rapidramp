// // import React from 'react';
// // export default function FakeOutlook({ onNext }) {
// //   return (
// //     <div className="border p-4 rounded bg-blue-50">
// //       <h3 className="text-lg font-semibold mb-2">Outlook Simulator</h3>
// //       <p>Compose a dummy email below:</p>
// //       <input
// //         type="text"
// //         placeholder="Subject: Hello World"
// //         className="border p-2 my-2 w-full"
// //       />
// //       <textarea
// //         placeholder="Body content..."
// //         className="border p-2 w-full mb-2"
// //         rows={4}
// //       ></textarea>
// //       <button
// //         onClick={onNext}
// //         className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
// //       >
// //         Send Email & Next Step
// //       </button>
// //     </div>
// //   );
// // }

// import React from 'react';

// export default function FakeOutlookCompose({ onNext }) {
//   return (
//     <div className="max-w-xl mx-auto border rounded-lg shadow bg-white">
//       {/* Top Bar */}
//       <div className="flex items-center justify-between px-4 py-2 border-b bg-gray-50 rounded-t-lg">
//         <span className="font-semibold text-gray-700">New Message</span>
//         <div className="flex space-x-2">
//           <button
//             className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 font-medium"
//             onClick={onNext}
//           >
//             Send
//           </button>
//           <button className="text-gray-500 hover:text-gray-700" title="Attach">
//             <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 13l5-5m0 0l-5-5m5 5H3"></path></svg>
//           </button>
//           <button className="text-gray-500 hover:text-gray-700" title="Discard">
//             <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="10" cy="10" r="8"/><path d="M6 6l8 8M14 6l-8 8"/></svg>
//           </button>
//         </div>
//       </div>
//       {/* Fields */}
//       <div className="px-4 py-2 space-y-2">
//         <input className="w-full border-b focus:outline-none py-1" type="text" placeholder="To" />
//         <input className="w-full border-b focus:outline-none py-1" type="text" placeholder="Cc" />
//         <input className="w-full border-b focus:outline-none py-1" type="text" placeholder="Bcc" />
//         <input className="w-full border-b focus:outline-none py-1 font-semibold" type="text" placeholder="Subject" />
//       </div>
//       {/* Body */}
//       <div className="px-4 pb-4">
//         <textarea
//           className="w-full h-40 border rounded p-2 focus:outline-none resize-none"
//           placeholder="Type your message here..."
//         />
//       </div>
//     </div>
//   );
// }

// import React from 'react';
// export default function FakeOutlook({ onNext }) {
//   return (
//     <div className="border p-4 rounded bg-blue-50">
//       <h3 className="text-lg font-semibold mb-2">Outlook Simulator</h3>
//       <p>Compose a dummy email below:</p>
//       <input
//         type="text"
//         placeholder="Subject: Hello World"
//         className="border p-2 my-2 w-full"
//       />
//       <textarea
//         placeholder="Body content..."
//         className="border p-2 w-full mb-2"
//         rows={4}
//       ></textarea>
//       <button
//         onClick={onNext}
//         className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//       >
//         Send Email & Next Step
//       </button>
//     </div>
//   );
// }

import React, { useState } from 'react';

export default function FakeOutlook({ onNext }) {
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    setSent(true);
    setTimeout(onNext, 1200); // Show message before switching
  };

  return (
    <div className="email-composer">
      <div className="composer-header">
        <div className="field-group">
          <label>From:</label>
          <input type="text" value="Pragati Girish Sawkar (psawkar@barracuda.com)" readOnly />
        </div>
        <div className="field-group">
          <label>To:</label>
          <input type="text" placeholder="Enter recipient" />
        </div>
        <div className="field-group">
          <label>Subject:</label>
          <input type="text" placeholder="Subject line" />
        </div>
      </div>

      <div className="composer-body">
        <textarea placeholder="Get Outlook for Mac"></textarea>
      </div>

      <div className="composer-footer">
        <button onClick={handleSend} disabled={sent}>Send</button>
        <button>Discard</button>
        <button>Attach File</button>
        <button>Loop Components</button>
        <button>Signature</button>
        <button>Sensitivity</button>
        <button>Editor</button>
      </div>
      {sent && (
        <div className="mt-4 text-blue-600 font-semibold flex items-center justify-center">
          <svg width="24" height="24" fill="none" className="mr-2">
            <rect x="4" y="8" width="16" height="8" rx="2" fill="#F58536"/>
            <rect x="8" y="12" width="8" height="4" rx="1" fill="#fff"/>
          </svg>
          Sending to <span className="mx-1 text-orange-500">Kinesis</span>...
        </div>
      )}
    </div>
  );
}