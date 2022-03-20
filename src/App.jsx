import './app.scss';
import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  const user = true;
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/movies" element={<Home />}/>
    </Routes>
  </Router>
  
  );
}

export default App;
