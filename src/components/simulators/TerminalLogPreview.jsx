import React, { useEffect, useRef, useState } from 'react';

export default function TerminalLogPreview() {
  const [highlight, setHighlight] = useState(true);
  const highlightRef = useRef();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    // Animate highlight for 1.5s, then remove
    const timeout = setTimeout(() => setHighlight(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  // Helper to format date/time as YYYY/MM/DD HH:mm:ss
  const formatDate = (date) => {
    const pad = (n) => n.toString().padStart(2, '0');
    return `${date.getFullYear()}/${pad(date.getMonth()+1)}/${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
  };

  // Generate log times
  const now = new Date();
  const logTimes = [
    new Date(now.getTime()),
    new Date(now.getTime() + 1000),
    new Date(now.getTime() + 47*1000),
    new Date(now.getTime() + 48*1000),
    new Date(now.getTime() + 115*1000),
    new Date(now.getTime() + 116*1000),
    new Date(now.getTime() + 117*1000), // highlighted log
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f5f5f5',
      fontFamily: 'sans-serif',
      margin: 0,
      padding: 0,
      // Use block layout so children stack vertically
    }}>
      {/* Centered info box at the top */}
      <div style={{
        width: '1100px',
        margin: '48px auto 24px auto',
        background: '#f1f5fd', // soft accent background
        color: '#1e293b',
        borderRadius: 18,
        boxShadow: '0 4px 24px rgba(37,99,235,0.08)', // accent shadow
        border: '1.5px solid #e3eafc', // subtle border
        padding: '36px 48px', // slightly more padding
        fontSize: '1.22rem',
        fontWeight: 500,
        letterSpacing: '0.01em',
        textAlign: 'justify',
        lineHeight: 1.32,
        boxSizing: 'border-box',
      }}>
        The raw mail is received by the <span style={{ color: '#2563eb', fontWeight: 600 }}>cubes-producer</span> service which is deployed in <span style={{ color: '#2563eb', fontWeight: 600 }}>EC2 (mx-producers)</span>.<br /><br />
        <span style={{ color: '#2563eb', fontWeight: 600 }}>cubes-producers</span> sends the raw mail to <span style={{ color: '#2563eb', fontWeight: 600 }}>firehose</span>.<br /><br />
        <span style={{ color: '#64748b', fontWeight: 500 }}>Click Next to learn more.</span>
      </div>
      <div style={{
        background: '#1e1e1e',
        color: '#cccccc',
        width: '96vw',
        height: '60vh',
        borderRadius: 16,
        boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
        overflow: 'hidden',
        padding: '0.3%',
        margin: '0.1%',
        marginTop: '90px', // Move box a little down
        marginLeft: '40px', // Move box a little right
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}>
        {/* Top header */}
        <div style={{
          width: '100%',
          background: '#fff',
          color: '#1e293b',
          padding: '0px 32px 0px 32px',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          fontSize: '1.05rem',
          fontWeight: 600,
          letterSpacing: '0.01em',
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid #e5e7eb',
          marginBottom: '8px', // Add a little space below header
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div>Session ID: <span style={{ fontWeight: 700, color: '#2563eb' }}>psawkar@barracuda.com-ostfx8dvbbzfh3og3l9o58ite4</span></div>
            <div style={{ marginTop: '2px' }}>Instance ID: <span style={{ fontWeight: 700, color: '#2563eb' }}>i-0784d7599518eff5d</span></div>
          </div>
        </div>
        <div style={{
          flex: 1,
          padding: 0,
          maxHeight: '100%',
          overflowY: 'auto',
          // Removed centering so logs start right after header
        }}>
          <pre style={{
            margin: 0,
            lineHeight: 1.4,
            fontFamily: 'Menlo, Consolas, "Courier New", monospace',
            fontSize: 18,
            width: '100%',
            color: '#cccccc',
            background: 'transparent'
          }}>
            {/* Dynamic log lines with current time */}
            <span style={{ color: '#6A9955' }}>{formatDate(logTimes[0])}</span> <span style={{ color: '#569CD6' }}>mx-producer-0784d7599518eff5d.prod-ecl[2467]</span> <span style={{ color: '#9CDCFE' }}>DEBUG</span> Opening local file at /data/input/file1.csv{"\n"}
            <span style={{ color: '#6A9955' }}>{formatDate(logTimes[1])}</span> <span style={{ color: '#569CD6' }}>mx-producer-0784d7599518eff5d.prod-ecl[2467]</span> <span style={{ color: '#4EC9B0' }}>INFO </span> Ingestion succeeded for file1.csv (size=2.4MB, compressed=1.1MB){"\n"}
            <span style={{ color: '#6A9955' }}>{formatDate(logTimes[2])}</span> <span style={{ color: '#569CD6' }}>mx-producer-0784d7599518eff5d.prod-ecl[2467]</span> <span style={{ color: '#9CDCFE' }}>DEBUG</span> Opening local file at /data/input/file2.csv{"\n"}
            <span style={{ color: '#6A9955' }}>{formatDate(logTimes[3])}</span> <span style={{ color: '#569CD6' }}>mx-producer-0784d7599518eff5d.prod-ecl[2467]</span> <span style={{ color: '#4EC9B0' }}>INFO </span> Ingestion succeeded for file2.csv (size=3.8MB, compressed=2.0MB){"\n"}
            <span style={{ color: '#6A9955' }}>{formatDate(logTimes[4])}</span> <span style={{ color: '#569CD6' }}>mx-producer-0784d7599518eff5d.prod-ecl[2467]</span> <span style={{ color: '#9CDCFE' }}>DEBUG</span> Opening local file at /data/input/file3.csv{"\n"}
            <span style={{ color: '#6A9955' }}>{formatDate(logTimes[5])}</span> <span style={{ color: '#569CD6' }}>mx-producer-0784d7599518eff5d.prod-ecl[2467]</span> <span style={{ color: '#4EC9B0' }}>INFO </span> Ingestion succeeded for file3.csv (size=5.1MB, compressed=2.4MB){"\n"}
            {/* Highlighted last log line, split for JSX validity and curly braces escaped as entities */}
            <span style={{ color: '#6A9955', borderRadius: 6, display: 'inline-block' }}>{formatDate(logTimes[6])}</span>{' '}
            <span style={{ color: '#569CD6', borderRadius: 6, display: 'inline-block' }}>mx-producer-0784d7599518eff5d.prod-ecl[2467]</span>{' '}
            <span style={{ color: '#4EC9B0', borderRadius: 6, display: 'inline-block' }}>INFO </span>{' '}
            <span style={{ color: '#fff', borderRadius: 6, display: 'inline-block' }}>
              <span
                ref={highlightRef}
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  background: highlight ? 'rgba(249,212,35,0.7)' : '#1e1e1e',
                  borderRadius: 6,
                  padding: '6px 32px', // Make highlight box wider
                  display: 'inline-block',
                  boxShadow: highlight ? '0 0 8px 1px rgba(255,78,80,0.3)' : 'none',
                  transition: 'background 1s, box-shadow 1s',
                }}
              >
                INGESTION_V2 success: bma_93fb9bb4-3abd-4d16-b534-cd75e7d3055b: e0ffa7b637dc805594bc2589059f391b a899864bb6c9cb6d703b216815e37239245fd61f 31113 (result: {'{'}`sha1`: 'a899864bb6c9cb6d703b216815e37239245fd61f', `compression_level`: 3, `result`: 'SUCCESS', `timing`: {'{'}`compression`: 0.002, `upload`: 0.028{'}'}, `bytes_written`: 38041, `bytes_read`: 98847, `compression`: u'ZSTD', `location`: 'firehose'{'}'})
              </span>
            </span>{"\n\n"}
            <span style={{ color: '#C586C0', fontWeight: 'bold' }}>root@server:~#</span>{"\n"}
            <span style={{ color: '#C586C0', fontWeight: 'bold' }}>root@server:~#</span>{"\n"}
            <span style={{ color: '#C586C0', fontWeight: 'bold' }}>root@server:~#</span>
          </pre>
      </div>
    </div>
    {/* Space and Next button below the terminal box */}
    <div style={{ height: '48px' }} />
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '48px', // Add space below the Next button
    }}>
      <button
        style={{
          background: '#2563eb',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          padding: '16px 96px', // Even wider button
          fontSize: '1.15rem',
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(37,99,235,0.12)',
          transition: 'background 0.2s',
        }}
        onClick={() => {
          // TODO: Add navigation logic here
          // Navigation logic goes here
        }}
      >
        Next
      </button>
    </div>
    </div>
  );
}
