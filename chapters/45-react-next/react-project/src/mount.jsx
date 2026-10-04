import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../../../../assets/style.css';
import './app.css';

export function mount(App) {
  createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
}
