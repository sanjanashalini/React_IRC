

import './Assests/Css/dashboard.css';
import "./Assests/Css/Design.css";
import "./Assests/Css/bedroom.css";
import Design from  './components/Design';
import Dashboard from './components/dashboard';
import Bedroom from "./components/Bedroom";
import Login from './components/Login';
import "./Assests/Css/Login.css";
import "./Assests/Css/Hm.css";
import { Route,Routes } from "react-router-dom";
import Hm from './components/Hm'
import Warbrobe from './components/Warbrobe';
function App(){
    return(
        <>
        <Routes>
            <Route path = "/" element={<Login/>}/>
            <Route path = "/dashboard" element={<Dashboard/>}/>
            <Route path = "/Design" element={<Design/>}/>
            <Route path = "/Bedroom" element={<Bedroom/>}/>
            <Route path = "/Warbrobe" element={<Warbrobe/>}/>
            <Route path = "/Hm" element={<Hm/>}/>
            <Route path = "/Login" element = {<Login/>}/>
            
        </Routes>
        </>
    )
}
export default App;