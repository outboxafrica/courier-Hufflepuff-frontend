import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../context/AuthContext";
import { CartProducts} from "../context/contextProducts"
function Navbar() {
  const { currentUser, signOut } = useAuth();
  const {cart} = CartProducts()


  return (
    <header className="section-header">
      <section className="header-main border-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2 col-4">
              <Link href="/">
                <a className="brand-wrap">
                  <span
                    style={{ fontSize: "20px", fontFamily: "Time Normal " }}
                  >
                    EDUMART
                  </span>
                  <Image
                    className="logo"
                    src="/images/logo.jpg"
                    alt="logo"
                    height="50px"
                    width="50px"
                  />
                </a>
              </Link>
            </div>
            <div className="col-lg-6 col-sm-12">
              <form action="#" className="search">
                <div className="input-group w-100">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
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
                  <a href="#" className="icon icon-sm rounded-circle border">
                    <i className="fa fa-shopping-cart"></i>
                  </a>
                  <span className="badge badge-pill badge-danger notify">
                   {cart.length}
                  </span>
                </div>
                <div className="widget-header icontext">
                  {currentUser && (
                    <a href="#" className="icon icon-sm rounded-circle border">
                    <i className="fa fa-user"></i>
                  </a>
                  )}
                  <div className="text">
                    <span className="text-muted">Welcome!</span>
                    <div>
                      {currentUser ? (
                        <>
                          <span className="text-dark">{currentUser.email}</span><br />
                          <Link href="#">
                            <a onClick={signOut}>Sign Out</a>
                          </Link>
                        </>
                      ) : (
                        <>
                          <Link href="/login">
                            <a>Sign in| </a>
                          </Link>
                          <Link href="/signup">
                            <a>Register</a>
                          </Link>
                        </>
                      )}
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
