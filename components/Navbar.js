import { signOut } from "next-auth/react";
import Link from "next/link";
import router from "next/router";
import style from "../styles/Navbar.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { useSession } from "next-auth/react";
// import { CartProducts} from "../context/contextProducts"
function Navbar() {
//   const { data: session, status } = useSession();
//   const {cart} = CartProducts();
//   console.log(cart);
  return (
    <div className={style.container}>
      <h2 className={style.title}>DriveYourDream</h2>
      <ul className={style.menu}>
        <li className={style.link}>
          <Link href="/">Home</Link>
        </li>
        <li className={style.link}>
          <Link href="/partners">Partners</Link>
        </li>
        <li className={style.link}>
          <Link href="/contact">Contact</Link>
        </li>
        {/* <span>{cart.length}</span> */}
        <ShoppingCartIcon />
        {/* <p>{session ? session.user.email : null}</p>
        {status === "authenticated" && (
          <li className={style.link}>
            <button onClick={() => signOut()}>signOut</button>
          </li> */}
        {/* )} */}
      </ul>
    </div>
  );
}

export default Navbar;
