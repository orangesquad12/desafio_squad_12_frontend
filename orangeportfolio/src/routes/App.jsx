import { BrowserRouter, Routes,Route } from "react-router-dom";
import LoginM from "../components/LoginM";
import RegisterM from "../components/RegisterM";
import HomePageM from "../components/HomePageM";
import Discovery from "../components/discovery";


function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginM/>}/>
                <Route path="/cadastro" element={<RegisterM/>}/>
                <Route path="/portfolio" element={<HomePageM/>}/>
                <Route path="/descobrir" element={<Discovery/>}/>
                <Route path="/*" element={<h1>Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    )
}export default App