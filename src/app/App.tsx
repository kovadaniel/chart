import { Suspense } from 'react';
import AppRouter from './providers/router/AppRouter';
import useVH from './lib/useVH';
import MainLayout from 'shared/layouts/MainLayout';
import Navbar from 'widgets/Navbar';

function App() {
  useVH();
  return (
    <div id="app" className="app">
      <Suspense fallback="">
        <MainLayout content={<AppRouter />} header={<Navbar />} />
      </Suspense>
    </div>
  );
}

export default App;
