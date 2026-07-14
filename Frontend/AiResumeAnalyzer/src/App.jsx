 import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Loading from "./pages/Loading";
import Dashboard from "./pages/Dashboard";
import './index.css'

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/loading" element={<Loading/>}/>

            </Routes>
         
        </BrowserRouter>


    );

}

export default App;