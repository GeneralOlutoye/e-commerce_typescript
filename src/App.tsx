import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { LandingPage } from './Views/Landing-page';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
