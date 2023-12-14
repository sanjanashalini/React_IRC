
import LoginForm from './Components/login';
import RegistrationForm from './Components/RegistratioForm';
import Header1 from './Components/nav';
import "./Assests/Css/nav.css";
import "./Assests/Css/register.css";
import "./Assests/Css/login.css";
import{Route,Routes} from "react-router-dom";
import { Link } from 'react-router-dom';


const Home = () => <h2>Home Page (blank as of now)</h2>;
const App = () => {
  return (
    <>
    <Header1/>
    <Routes>
          <Route path="/register" component={RegistrationForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/home" component={Home} />
    </Routes>
    </>
  );
};

export default App;


