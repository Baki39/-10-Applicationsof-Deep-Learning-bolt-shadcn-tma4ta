import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from '@/pages/HomePage';
import { ApplicationDetail } from '@/components/ApplicationDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/application/:id" element={<ApplicationDetail />} />
      </Routes>
    </Router>
  );
}

export default App;