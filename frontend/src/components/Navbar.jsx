import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const {cart} = useSelector((state) => state);

  return (
    <div >
      <div className="flex justify-between items-center h-20 p-4 m-4 max-w-7xl mx-auto">

       

          <div className="flex text-xl items-center p-10  font-medium font-black-800 m-8 space-x-6 ">
            <NavLink to="/">
              <p>Home</p>
            </NavLink>

            <NavLink to="/cart">
              <div className="relative m-2 p-2">
                  <FaShoppingCart className="text-2xl"/>
                  {
                    cart.length > 0 &&
                    <span
                    className="absolute -top-1 m-2 p-2 -right-2 bg-green-600 text-xs w-5 z-40 h-5  flex 
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >{cart.length}</span>
                  }
                  
              </div>
            </NavLink>
            
          </div>
      </div>
    </div>
  )
};

export default Navbar;
