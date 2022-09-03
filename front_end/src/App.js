import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import {Routes, Route} from "react-router-dom";

function App() {

  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
       <Topbar></Topbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/post/:postId" element={<Single></Single>}></Route>
        <Route path="/register" element={user?<Home></Home>:<Register></Register>}></Route>
        <Route path="/login" element={user?<Home></Home>:<Login></Login>}></Route>
        <Route path="/write" element={user?<Write></Write>:<Register></Register>}></Route>
        <Route path="/settings" element={user?<Settings></Settings>:<Register></Register>}></Route>
      </Routes>
     
     
      {/* <Write></Write> */}
      {/* <Settings>
        
      </Settings> */}
      {/* <Login></Login> */}
      {/* <Register></Register> */}
    </div>
  );
}

export default App;
