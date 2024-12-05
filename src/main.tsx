import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Importando o Provider
import { store } from '../src/store.ts'; // Importando a store do Redux
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}> {/* Envolvendo App com o Provider */}
      <App />
    </Provider>
  </StrictMode>
);

