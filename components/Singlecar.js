import Image from 'next/image'
import Link from 'next/link'
import Item from '../styles/Item.module.css'

 function Singlecar({item}) {
    return (
        <Link href="/item/[id]" as={`/item/${item.id}`}>
            <a className={Item.card}>
            {/* <h2 className={Item.title}>{item.title}</h2> */}
            <Image src={item.image} width={400} height={400}  alt={item.product} className={Item.image}/>
            <p className={Item.child}>
                {item.title > 3? item.title.substring(0, 5) + '...' : item.title}
                </p> 
            <span className={Item.child}>{item.price}</span>
            <small>{item.category}</small>
            </a>
        </Link>
    )
}

export default Singlecar

