import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import Navbar from "../components/Navbar"
const data = require('.././restApi.json');



const Menu = () => {
  const menu = data.data[0].menudata;
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try{
      setPosts(menu);
    }
    catch(error) {
      console.log("Error aagya API packet fetch krte wkt");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchProductData();
  },[])

  return (
    <div>
            <div className="bg-gradient-to-r from-green-200">
          <Navbar/>
      </div>
    <div>
      {
        loading ? <Spinner />  :
        posts.length > 0 ? 
        (<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
        gap-y-8 max-w-6xl p-6 mx-auto my-7 min-h-[80vh]">
          {
            posts.map( (post) => (
            <Product key = {post.id} post={post}/>
          ) )
          }
        </div>) :
        <div className="w-screen h-screen flex justify-center items-center">
          <p className="font-bold">No Data Found</p>
        </div> 
      }
    </div>
    </div>
  );
};

export default Menu;
