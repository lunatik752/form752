import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage/StartPage'


const FormPage = lazy(() => import('./pages/FormPage/FormPage'));
const Page404 = lazy(() => import('./pages/Page404/Page404'));


const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StartPage/>} />
        <Route path="/form" element={<Suspense><FormPage/></Suspense>} />
        <Route path={'*'} element={<Suspense><Page404/></Suspense>}/>
      </Routes>
    </div>
  );
};

export default App;
