import './reset.css';
import './App.css';
import Issues from './pages/Issues';
import Navbar from './components/Navbar';
import Details from './pages/Details';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Issues></Issues>
        <Details></Details>
      </div>
    </>
  );
}

export default App;
