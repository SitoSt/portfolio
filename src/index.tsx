import './css/index.css';
import { Analytics } from "@vercel/analytics/react"
import { App } from './App';
import { SpeedInsights } from "@vercel/speed-insights/react"
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />

    <Analytics />
    <SpeedInsights />
  </React.StrictMode>
);

