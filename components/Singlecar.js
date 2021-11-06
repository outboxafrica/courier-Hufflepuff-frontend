import Image from 'next/image'
import Link from 'next/link'
import Item from '../styles/Item.module.css'

 function Singlecar({item}) {
    return (
        <Link href="/car/[id]" as={`/car/${item.id}`}>
            <a className={Item.card}>
            <h2 className={Item.title}>{item.product}</h2>
            <Image src={item.image} width={400} height={400}  alt={item.product} className={Item.image}/>
            <p className={Item.child}>
                {item.desc.length > 20 ? item.desc.substring(0, 20) + '...' : item.desc}
                </p> 
            <span className={Item.child}>{item.price}</span>
            <span className={Item.child}>{item.Mileage}</span> 
            <small>{item.category}</small>
            </a>
        </Link>
    )
}

export default Singlecar

