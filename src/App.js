
import { Routes, Route } from "react-router-dom"
import { Topper } from './components/navbar';
import { Register } from './components/register';
import { Login } from './components/login';
import { Forgot } from './components/forgot';
import { ChangePassword } from './components/change';
import { Short } from './components/short';
import { UrlTable } from './components/urltable';
import { Dashboard } from './components/dashboard';
import { Activate } from "./components/activate";
import { ProtectRoute } from "./protectrouter"
function App() {
  return (
    <div>
      <Topper/>
      <Routes>
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/forgot" element={ <Forgot/> } />
        <Route path="/changepassword" element={ <ChangePassword/> } />
        <Route path="/activate" element={<Activate/>}/>
        <Route path="/" element={ <Dashboard/> } />
        <Route path="/table" element={ <UrlTable/> } />
        <Route element={<ProtectRoute/>}>
               <Route path="/home" element={<Short/>}/>
         </Route>
      </Routes>
   
    </div>
  );
}

export default App;
