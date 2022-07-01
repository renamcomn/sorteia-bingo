import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BingoProvider } from './context/BingoContext';

import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BingoProvider>
      <App />
    </BingoProvider>
  </React.StrictMode>
)
