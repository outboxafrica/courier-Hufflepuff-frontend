
import { useEffect, useState } from 'react'
import {CartProducts} from '../context/contextProducts'
import {toast} from 'react-toastify'
import {useSession} from 'next-auth/react'
import DeleteIcon from '@mui/icons-material/Delete';
import style from "../styles/ShoppingCart.module.css";

function Cart() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const {removeFromCart ,cart} = CartProducts()
    const {data:session , status} = useSession();

    const total = data.reduce((total, item) => total + item.price * item.quantity, 0)

    // function to confirm order and add to database and  remove from cart
    const confirmOrder = () => {
        console.log(cart)
        if (data.length > 0) {
            setLoading(true)
            fetch("/api/cart", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",

              },
              body: JSON.stringify({ data, session }),
            })
              .then((res) => res.json())
              .then((data) => console.log(data));
              setLoading(false)
              toast.success("Order Placed Successfully")
          }
          // remove from cart and local storage
          localStorage.removeItem("cart")
            removeFromCart();
    }

    console.log(session)

    //check if on server or client
   
    useEffect(() => {
        // get cart from local storage
        const cart = JSON.parse(localStorage.getItem('cart'))
        
        setData(cart)

    }, [])
    return (
        <div>
            <div className={style.shoppingCart}>
                <h1 className={style.title}>CartProducts</h1>
                <h2 className={style.price}>Total: {total}Million</h2>
                {data.map(item => (
                    <div key={Math.random() * item.id} className={style.content}>
                        <div className={style.left}>
                        <h4>Name:<span className={style.pan}>{item.product}</span></h4>
                        <h4>Quantity:<span className={style.pan}>{item.quantity}</span></h4>
                        <h4>Price:<span className={style.pan}>{item.price} Million</span></h4>
                        </div>
                        <div className={style.right}>
                        <span><button className={style.btn} onClick={removeFromCart}><DeleteIcon className={style.icon}/></button></span>
                        </div>
                    </div>
                ))}
                
            </div>
            <div className={style.confirm}><button onClick={confirmOrder} className={style.btnConfirm}>{loading ? "Confirming Order" : "Confirm Order"}</button></div>
        </div>
    )
}

export default Cart