import React from 'react'; // Add this import
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import MyProvider from './context/MyContext';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <MyProvider> {/* Add this line */}
        <App />
      </MyProvider> {/* Add this line */}

    </StrictMode>
  );
} else {
  console.error('Root element not found.');
}
