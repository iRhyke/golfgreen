import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'
import { SpeedInsights } from "@vercel/speed-insights/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <SpeedInsights
      url="https://www.yourwebsite.com"
      apiKey="YOUR_VERCEL_API_KEY"
    /> 
  </>
)