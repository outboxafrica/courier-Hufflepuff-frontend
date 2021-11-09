import { signOut } from "next-auth/react";
import Link from "next/link";
import router from "next/router";
import style from "../styles/Navbar.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Image from "next/image"
import { CardTravel } from "@mui/icons-material";
// import { useSession } from "next-auth/react";
// import { CartProducts} from "../context/contextProducts"
function Navbar() {
  // const { data: session, status } = useSession();
  // const {cart} = CartProducts();
//   console.log(cart);
  return (
    // <div className={style.container}>
    //   <h2 className={style.title}>DriveYourDream</h2>
    //   <ul className={style.menu}>
    //     <li className={style.link}>
    //       <Link href="/">Home</Link>
    //     </li>
    //     <li className={style.link}>
    //       <Link href="/partners">Partners</Link>
    //     </li>
    //     <li className={style.link}>
    //       <Link href="/contact">Contact</Link>
    //     </li>
    //     {/* <span>{cart.length}</span> */}
    //     <ShoppingCartIcon />
    //     {/* <p>{session ? session.user.email : null}</p>
    //     {status === "authenticated" && (
    //       <li className={style.link}>
    //         <button onClick={() => signOut()}>signOut</button>
    //       </li> */}
    //     {/* )} */}
    //   </ul>
    // </div>
    <header className="section-header">

    <section className="header-main border-bottom">
      <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-2 col-4">
        <a href="http://bootstrap-ecommerce.com" className="brand-wrap">
          <span style={{fontSize:"20px" , fontFamily:"Time Normal "}}>EDUMART</span>
          <Image className="logo" src="/images/logo.jpg" alt="logo" height="50px" width="50px"/>
        </a> 
      </div>
      <div className="col-lg-6 col-sm-12">
        <form action="#" className="search">
          <div className="input-group w-100">
              <input type="text" className="form-control" placeholder="Search" />
              <div className="input-group-append">
                <button className="btn btn-primary" type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
        </form>
      </div> 
      <div className="col-lg-4 col-sm-6 col-12">
        <div className="widgets-wrap float-md-right">
          <div className="widget-header  mr-3">
            <a href="#" className="icon icon-sm rounded-circle border"><i className="fa fa-shopping-cart"></i></a>
              <span className="badge badge-pill badge-danger notify">0</span>
          </div>
          <div className="widget-header icontext">
            <a href="#" className="icon icon-sm rounded-circle border"><i className="fa fa-user"></i></a>
            <div className="text">
              <span className="text-muted">Welcome!</span>
              <div> 
                <Link href="#"><a>Sign in| </a></Link> 
                <Link href="/signup"><a>Register</a></Link>
              </div>
            </div>
          </div>
    
        </div> 
      </div> 
    </div> 
      </div> 
    </section> 
    </header> 
    
  );
}

export default Navbar;
