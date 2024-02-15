import './App.css';
import FetchDetail from './component/FetchDetail';
import FetchMarks from './component/FetchMarks';
import Insert from './component/Insert';
import Marks from './component/Marks';
import Navbar from './component/Navbar';
import Home from './component/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <div className='back'></div>
      <Router>
        <Routes>
          <Route path="/" element={<div> <Navbar loc="home" /> <Home /></div>} />
          <Route path="/insertdetails" element={<div> <Navbar loc="insertdetails" /> <Insert /> </div>} />
          <Route path="/insertmarks" element={<div> <Navbar loc="insertmarks" /> <Marks /> </div>} />
          <Route path="/fetchdetails" element={<div> <Navbar loc="fetchdetails" /> <FetchDetail /> </div>} />
          <Route path="/fetchmarks" element={<div> <Navbar loc="fetchmarks" /> <FetchMarks /> </div>} />
        </Routes>
      </Router>

      {/* <Navbar /> */}
      {/* <Insert /> */}
      {/* <Marks /> */}
      {/* <FetchDetail /> */}
      {/* <FetchMarks /> */}
    </div>
  );
}

export default App;
