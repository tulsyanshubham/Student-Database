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
import ER from './component/ER';
import Error from './component/Error';

function App() {
  return (
    <div>
      <div className='back'></div>
      <Router>
        <Routes>
          <Route path="/Student-Database" element={<div> <Navbar loc="home" /> <Home /></div>} />
          <Route path="/Student-Database/er" element={<div> <Navbar loc="er" /> <ER /> </div>} />
          <Route path="/Student-Database/insertdetails" element={<div> <Navbar loc="insertdetails" /> <Insert /> </div>} />
          <Route path="/Student-Database/insertmarks" element={<div> <Navbar loc="insertmarks" /> <Marks /> </div>} />
          <Route path="/Student-Database/fetchdetails" element={<div> <Navbar loc="fetchdetails" /> <FetchDetail /> </div>} />
          <Route path="/Student-Database/fetchmarks" element={<div> <Navbar loc="fetchmarks" /> <FetchMarks /> </div>} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
      {/* <Home /> */}
      {/* <Navbar /> */}
      {/* <Insert /> */}
      {/* <Marks /> */}
      {/* <FetchDetail /> */}
      {/* <FetchMarks /> */}
    </div>
  );
}

export default App;
