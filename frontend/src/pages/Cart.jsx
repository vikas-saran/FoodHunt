import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "../styles/cart.css"
import { IoMdClose } from "react-icons/io";





const Cart = () => {

  let item=[];
  // console.log(item);
  const navigate=useNavigate();
  const [otp,setOtp]=useState(0);
  const [IN,setIN]=useState(0);
  const [email, setEmail] = useState("");

  const {cart} = useSelector((state) => state);
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);
  const [orderSize, setorderSize] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
    setorderSize(cart.length);
  }, [cart])



  console.log(orderSize,item,totalAmount);


  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      for(let i=0;i<orderSize;i++){item.push(cart[i].title)}
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/order/cart",
        {orderSize,item,totalAmount},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(item);
      toast.success(data.message);
      setTotalAmount(0);
      setorderSize(0);
      item=[];
      navigate("/success");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  
  const handleOTP = async (e) => {
    e.preventDefault();
    try {
      for(let i=0;i<orderSize;i++){item.push(cart[i].title)}
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/order/otp",
        {email,orderSize,item,totalAmount},
        {
          headers: {
            "Content-Type": "application/json",
             "Authorization": `Bearer ${otp}`
          },
          withCredentials: true,
        }
      );
      console.log("OTPitem",data.message);
      console.log("otp",otp);
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };




  const popp = document.querySelector(".popupmodal");
  const blurr=document.querySelector(".backblur");
  const orderbutton=document.getElementById('orderbutton');

  
  function open(){        
    setOtp(Math.floor(Math.random()*10000)); 
    popp.classList.add("active");
    blurr.classList.add("bluractive");
  };
  function close(){
    setOtp(0);
    popp.classList.remove("active");
    blurr.classList.remove("bluractive");
  };



  return (<div>
    <div>
  {
    cart.length > 0  ? 
    
    (<div className="flex gap-16 max-w-6xl p-6 mx-auto flex-wrap  lg:flex-nowrap">

      <div className="lg:w-[70%]">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="md:w-[30%] w-full flex flex-col gap-8 justify-between">

        <div className="mt-20">
          <p className="text-xl text-[#166534] uppercase font-[600]">Your Cart</p>
          <p className="text-5xl font-[600] text-[#15803d] uppercase mb-4">Summary</p>
          <p className="font-[600] text-xl text-slate-700">
            Total Items: <span className="font-normal">{cart.length}</span>
          </p>
        </div>

        <div className="mb-20">
          <p className="text-slate-700 text-xl font-[600] mb-5 ">Total Amount: 
            <span className="font-bold ml-2 text-black">₹{totalAmount.toFixed(2)}</span>
          </p>
      
          <button className="text-lg w-full py-2.5 rounded-lg font-bold text-white bg-[#15803d]
          border-2 border-[#15803d] hover:bg-white hover:text-[#15803d] transition-all duration-300 ease-in"   onClick={open}>
            CheckOut Now
          </button>
    
        </div>

      </div>


    </div>) : 
    (<div className="w-screen h-[calc(100vh-80px)] flex flex-col gap-6 justify-center items-center">
      <h1 className="font-[600] text-xl">Your Cart is Empty !</h1>
      <Link to={"/menu"}>
        <button className="bg-[#16a34a] text-white text-md uppercase font-[600] py-3 px-10 rounded-md
        border-[#16a34a] border-2 hover:bg-white hover:text-[#16a34a] ease-in transition-all duration-300">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>

    
    <div className="popupmodal">
        <div className="modalhead flex gap-10">
            <p id="ShareMeProfile">Varify OTP</p>
            <div className="text-xl" onClick={()=>{ popp.classList.remove("active");blurr.classList.remove("bluractive")}}><IoMdClose/></div>
        </div>
        <div className="flex gap-10  p-5 ">
        <input
                  type="email"
                  placeholder="Email"
                  className="email_tag text-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
        />
                <button onClick={handleOTP}>
                  Send_OTP
                </button>
                <input
                  type="number"
                  className="text-black"
                  placeholder="Phone"
                  value={IN}
                  onChange={(e) => setIN(e.target.value)}
                />
                <button id="validatebutton" onClick={()=>{if(otp===parseInt(IN, 10)){orderbutton.disabled=false; console.log("validated");}}}>
                  validate
                </button>
                <button id="orderbutton" disabled onClick={handleReservation}>
                  ORDER
                </button>
        
          </div>
        <p className="modaldesc">Random otp is :{otp}  and {IN}</p>
        <div className="modallinks">

            <button onClick={handleReservation}>checkout</button>

        </div>
    </div>
    <div className="backblur" onClick={close}></div>
  



    </div>

  );
};

export default Cart;
