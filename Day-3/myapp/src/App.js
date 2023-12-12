import Nav from "./components/nav";
import './Assests/CSS/nav.css'
import './Assests/CSS/Home.css'
import Home from "./components/home";
function App(){
    return (
    <>
     <div className="main">
        <Nav/>
                <Home/>
            <p>
                Hello World
            </p>
         </div>
         
    </>
    )
}
export default App;