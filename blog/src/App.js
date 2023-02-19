import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import NavBar from './components/navbar/NavBar.jsx';
import Home from './pages/Home/Home';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import Settings from './pages/settings/Settings';
import { Single } from './pages/Single/Single';
import { Write } from './pages/Write/Write';


const arr = ["Priaynsh", "red"]

const color = [...arr , "Blue", "green"]


function App() {
  const user = false;
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/post/:postId" exact element={<Single/>} />
    <Route path="/write" exact element={user ? <Write/> : <Register/>} />
    <Route path="/settings" exact element={user ? <Settings/> : <Register/>} />
    <Route path="/login" exact element={user? <Home/> : <Login/>} />
    <Route path="/register" exact element={user? <Home/> : <Register/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
