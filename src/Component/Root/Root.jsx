import { Outlet } from "react-router-dom";


import Header from "../Header/Header";
import Footer from "../Footer/Footer";



const Root = () => {
  return (
    <div className="mx-auto container">

    
<Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
  
    </div>
  );
};

export default Root;