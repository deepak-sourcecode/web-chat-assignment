import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/Home';
import { store } from './store';

import './index.css';

const router = createBrowserRouter([
  {
    path: '*',
    element: <Home />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <main className="h-screen w-screen">
        <RouterProvider router={router} />
      </main>
    </Provider>
  </StrictMode>,
);
