import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Menu from "./pages/menu"
import Cart from "./pages/Cart"
import Home from "./pages/Home";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";
import './App.css'

const App = () => {
  return (<div>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/menu" element={<Menu/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path='/success' element={<Success/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
  </div>)
};

export default App;
