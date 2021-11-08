import Image from "next/image";
import { server } from "../../config/config";
import styles from "../../styles/Cart.module.css";
import { CartProducts } from "../../context/contextProducts";
import QuantityBtn from "../../components/QuantityBtn";
import {useState} from 'react';

function Singlecar({ item }) {
  const { addToCart, cart, total, removeFromCart } = CartProducts();
//   console.log({ total, cart ,removeFromCart});
  const [quantity, setQuantity] = useState(0);

  const addToCartHandler = async () => {

    addToCart(item, quantity);
    //set item and quantity to localstorage
    
  };

  
  return (
    <>
      <div className={styles.container}>
        <div className={cart.img}>
          <Image src={item.image} width={600} height={600} alt={item?.product} />
        </div>
        <div className={cart.content}>
          <h2>{item?.product}</h2>
          <p>{item?.desc}</p>
          <span>{item?.price}</span>
          <span>{item?.Mileage}</span>
          <div>
            <QuantityBtn quantity={quantity} setQuantity={setQuantity}/>
            <button onClick={addToCartHandler} className={styles.btnConfirm}>ADD To Cart</button>
          </div>
        </div>

        {/* <p>{item.}</p> */}
      </div>
    </>
  );
}

export default Singlecar;

export async function getStaticProps(context) {
  const res = await fetch(`${server}/car/${context.params.id}`);
  const data = await res.json();

  return { props: { item: data } };
}

export async function getStaticPaths() {
  const res = await fetch(server);
  const { data } = await res.json();

  const paths = data?.map((item) => ({
    params: { id: item?.id.toString() },
  }));

  return { paths, fallback: false };
}