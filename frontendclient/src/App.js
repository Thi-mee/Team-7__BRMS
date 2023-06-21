import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Common/Navbar";
import {BrowserRouter} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Login/> */}

        <Navbar/>
        <Home/>
      </div>  
    </BrowserRouter>
  );
}

export default App;
