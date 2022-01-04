import './reset.css';
import './App.css';
import Issues from './pages/Issues';
import Navbar from './components/Navbar';
import Details from './pages/Details';
import './assets/github-markdown.css';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Routes>
          <Route path="/" element={<Issues />} />
          <Route path="details/:id" element={<Details />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
