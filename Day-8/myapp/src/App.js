
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { Router,Routes,Route } from 'react-router-dom';
import Login from "./components/login";
import Register from "./components/Register";
function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        </Routes>
        </Router>
    </>
  );
}

export default App;