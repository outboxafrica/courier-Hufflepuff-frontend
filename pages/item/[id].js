import Image from "next/image";
import { CartProducts } from "../../context/contextProducts";
import { useState } from "react";
import Head from "next/head";
import { toast } from "react-toastify";

function Singlecar({ item }) {
  const { addToCart, cart, total, removeFromCart } = CartProducts();
  //   console.log({ total, cart ,removeFromCart});
  const [quantity, setQuantity] = useState(1);

  const addToCartHandler = async () => {
    addToCart(item, quantity);
    toast.success("Added to cart");
    //set item and quantity to localstorage
  };

  const reduceQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  }

  return (
    <>
      <Head>
        <title>{item.title}</title>
      </Head>
      <section className="padding-y mt-5">
        <div className="container">
          <header className="section-heading">
            <h2 className="section-title">Product Details </h2>
          </header>
        </div>
      </section>
      <section classNameName="section-content padding-y bg">
        <div classNameName="container">
          <div className="card">
            <div className="row no-gutters">
              <aside className="col-md-6">
                <article className="gallery-wrap">
                  <div className="image-big-wrap">
                    <a href="#">
                      <Image src={item.image} alt="product" layout="fill" />
                    </a>
                  </div>
                </article>
              </aside>
              <main className="col-md-6 border-left">
                <article className="content-body">
                  <h2 className="title">
                   
				   {item.title}
                  </h2>

                  <div className="rating-wrap my-3">
                    <ul className="rating-stars">
                      <li style={{ width: "80%" }} className="stars-active">
                        <image
                          src="/bootstrap-ecommerce-html/images/icons/stars-active.svg"
                          alt=""
                        />
                      </li>
                      <li>
                        <image
                          src="/bootstrap-ecommerce-html/images/icons/starts-disable.svg"
                          alt=""
                        />
                      </li>
                    </ul>
                    <small className="label-rating text-muted">
                      {item.rating.count} reviews
                    </small>
                    <small className="label-rating text-success">
                      <i className="fa fa-clipboard-check"></i> 154 orders
                    </small>
                  </div>

                  <div className="mb-3">
                    <var className="price h4">${item.price}</var>
                    <span className="text-muted">/per item</span>
                  </div>

                  <p>
                   {item.description}
                  </p>

                  <dl className="row">
                    <dt className="col-sm-3">Model#</dt>
                    <dd className="col-sm-9">NAN</dd>

                    <dt className="col-sm-3">Color</dt>
                    <dd className="col-sm-9">out of stock</dd>

                    <dt className="col-sm-3">Delivery</dt>
                    <dd className="col-sm-9">Worldwide</dd>
                  </dl>

                  <hr />
                  <div className="row">
                    <div className="form-group col-md flex-grow-0">
                      <label>Quantity</label>
                      <div className="input-group mb-3 input-spinner">
                        <div className="input-group-prepend">
                          <button
                            onClick={increaseQuantity}
                            className="btn btn-light"
                            type="button"
                            id="button-plus"
                          >
                            +
                          </button>
                        </div>
                        <input type="text" className="form-control" value={quantity} readOnly />
                        <div className="input-group-append">
                          <button
                            onClick={reduceQuantity}
                            className="btn btn-light"
                            type="button"
                            id="button-minus"
                          >
                            −
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="#"
                  onClick={addToCartHandler}
                  className="btn btn-outline-primary">
                    <span className="text">Add to cart</span>
                    <i className="fas fa-shopping-cart"></i>
                  </a>
                </article>
              </main>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Singlecar;

export async function getStaticProps(context) {
  const res = await fetch(
    `https://fakestoreapi.com/products/${context.params.id}`
  );
  const data = await res.json();

  return { props: { item: data } };
}

export async function getStaticPaths() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  const paths = data?.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return { paths, fallback: false };
}
