import sidebar from '../styles/Sidebar.module.css'
import Link from 'next/link'
function Sidebar({ getCar }) {
  return (
    <div className="sidebar.contain">
        <h4 className={sidebar.text}>Quick Menu</h4>
      <select onChange={(e) => getCar(e.target.value)}>
        <option value="">Select category</option>
        <option value="A-class">Benz A-class</option>
        <option value="C-class">Benz C-class</option>
        <option value="E-class">Benz E-class</option>
        <option value="G-class">Benz G-class</option>
      </select>
    <br />
    
      <div className={sidebar.content}>
        <label htmlFor=""><h5 className={sidebar.text}>Price(Million shs)</h5></label> 
        <input type="range" min="20" max="500" />
      </div><br />
      <div className={sidebar.content}>
        <label htmlFor=""><h5 className={sidebar.text}>Mileage(Kmpl)</h5></label>
        <input type="range" min="20" max="50" />
      </div><br />
        <div className={sidebar.content}>
            <Link href="/contact" passHref>
            <h5 className={sidebar.text}>Contact</h5>
            </Link>
            
        </div><br />
        <div className={sidebar.content}>
           <Link href="/partner" passHref>
            <h5 className={sidebar.text}>Partners</h5>
           </Link>
        </div>
    </div>
  );
}

export default Sidebar;
