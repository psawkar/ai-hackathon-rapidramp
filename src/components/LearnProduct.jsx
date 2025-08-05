import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LearnProduct({ product, architectureImg, confluenceLinks, githubLinks }) {
  const [flipConfluence, setFlipConfluence] = useState(false);
  const [flipGithub, setFlipGithub] = useState(false);
  const navigate = useNavigate();
  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(circle, #fff 0%, #e0f2fe 100%)',
      padding: '0',
      margin: '0',
    }}>
      <div style={{
        width: '100vw',
        background: 'radial-gradient(circle, #fff 0%, #e0f2fe 100%)',
        boxShadow: '0 4px 24px 0 rgba(59, 130, 246, 0.15)',
        padding: '48px 0',
        zIndex: 10,
        marginBottom: '5vh',
      }}>
        <h1 className="text-5xl font-extrabold text-center text-gray-900 font-semibold">
          {product}
        </h1>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5vh', margin: '0 20vw' }}>
        <div style={{ width: '100%', textAlign: 'left', marginBottom: '0.5rem', marginLeft: '2%', }}>
          <span style={{ fontSize: '2rem', fontWeight: 800, color: '#2563eb', letterSpacing: '0.01em' }}>Architecture:</span>
        </div>
        <img src="/image.png" alt="Architecture" style={{ width: '100%', borderRadius: '1.5rem', boxShadow: '0 2px 16px 0 rgba(59,130,246,0.10)', border: '1px solid #bae6fd', marginBottom: '2vh' }} />
        <div style={{ display: 'flex', gap: '5vw', width: '100%' }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
              width: '100%',
              minHeight: '200px',
              borderRadius: '1.5rem',
              boxShadow: '0 2px 16px 0 rgba(59,130,246,0.10)',
              border: '1px solid #bae6fd',
              background: '#f0f9ff',
              padding: '2rem',
              textAlign: 'center',
              position: 'relative',
              cursor: 'pointer',
              overflow: 'hidden',
            }} onClick={() => setFlipConfluence(f => !f)}>
              <div style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                transition: 'transform 0.6s',
                transformStyle: 'preserve-3d',
                transform: flipConfluence ? 'rotateY(180deg)' : 'rotateY(0deg)'
              }}>
                {/* Front Side */}
                <div style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#f0f9ff',
                  borderRadius: '1.5rem',
                }}>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: '#2563eb' }}>Confluence Links</h2>
                  <div style={{ marginTop: '1.5rem', color: '#888', fontSize: '0.95rem' }}></div>
                </div>
                {/* Back Side */}
                <div style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#f0f9ff',
                  borderRadius: '1.5rem',
                  transform: 'rotateY(180deg)'
                }}>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: '#2563eb' }}>Confluence Links</h2>
                  <ul style={{ textAlign: 'left' }}>
                    {confluenceLinks.map((link, idx) => (
                      <li key={idx}><a href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>{link.label}</a></li>
                    ))}
                  </ul>
                  <div style={{ marginTop: '1.5rem', color: '#888', fontSize: '0.95rem' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
              width: '100%',
              minHeight: '200px',
              borderRadius: '1.5rem',
              boxShadow: '0 2px 16px 0 rgba(59,130,246,0.10)',
              border: '1px solid #bae6fd',
              background: '#f0f9ff',
              padding: '2rem',
              textAlign: 'center',
              position: 'relative',
              cursor: 'pointer',
              overflow: 'hidden',
            }} onClick={() => setFlipGithub(f => !f)}>
              <div style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                transition: 'transform 0.6s',
                transformStyle: 'preserve-3d',
                transform: flipGithub ? 'rotateY(180deg)' : 'rotateY(0deg)'
              }}>
                {/* Front Side */}
                <div style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#f0f9ff',
                  borderRadius: '1.5rem',
                }}>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: '#2563eb' }}>GitHub Links</h2>
                  <div style={{ marginTop: '1.5rem', color: '#888', fontSize: '0.95rem' }}></div>
                </div>
                {/* Back Side */}
                <div style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#f0f9ff',
                  borderRadius: '1.5rem',
                  transform: 'rotateY(180deg)'
                }}>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: '#2563eb' }}>GitHub Links</h2>
                  <ul style={{ textAlign: 'left' }}>
                    {githubLinks.map((link, idx) => (
                      <li key={idx}><a href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>{link.label}</a></li>
                    ))}
                  </ul>
                  <div style={{ marginTop: '1.5rem', color: '#888', fontSize: '0.95rem' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: '12px' }} />
        <button
          style={{
            width: '60%',
            padding: '1rem',
            fontSize: '1.25rem',
            fontWeight: 700,
            background: '#2563eb',
            color: '#fff',
            borderRadius: '1rem',
            boxShadow: '0 2px 16px 0 rgba(59,130,246,0.10)',
            border: 'none',
            marginTop: '0.5rem',
            cursor: 'pointer',
            letterSpacing: '0.05em',
            transition: 'background 0.2s',
          }}
          onClick={() => navigate('/simulators/terminallog')}
        >
          Next
        </button>
        <div style={{ height: '32px' }} />
      </div>
    </div>
  );
}
