import React, { useState } from "react";
import {handleIncrement , handleDecrement } from "../components/QuantityBtn";
function Cart() {
   
  return (
<div>
    <section>
    <div className="container">

    <div className="row">
        <main className="col-md-9">
    <div className="card">

    <table className="table table-borderless table-shopping-cart">
<thead className="text-muted">
    <tr className="small text-uppercase">
    <th scope="col">Product</th>
    <th scope="col" width="120">Quantity</th>
    <th scope="col" width="120">Price</th>
    <th scope="col" className="text-right" width="200"> </th>
    </tr>
</thead>
<tbody>
<tr>
	<td>
		<figure className="itemside">
			<div className="aside"><image src="images/items/1.jpg" className="img-sm" /></div>
			<figcaption className="info">
				<a href="#" className="title text-dark">Some name of item goes here nice</a>
				<p className="text-muted small">Size: XL, Color: blue, <br /> Brand: Gucci</p>
			</figcaption>
		</figure>
	</td>
	<td> 
        
				<div className="input-group input-spinner">
					<div className="input-group-prepend">
					<button className="btn btn-light" type="button" id="button-plus"> <i className="fa fa-minus"></i> </button>
				</div>
				<input type="text" className="form-control" value="1" />
				<div className="input-group-append">
				<button className="btn btn-light" type="button" id="button-minus"> <i className="fa fa-plus"></i></button> 
        </div>  
        </div>                  
	</td>
	<td> 
		<div className="price-wrap"> 
			<var className="price">$1156.00</var> 
			<small className="text-muted"> $315.20 each </small> 
		</div> 
        {/* <!-- price-wrap .// --> */}
	</td>
	<td className="text-right"> 
	<a data-original-title="Save to Wishlist" title="" href="" className="btn btn-light" data-toggle="tooltip"> <i className="fa fa-heart"></i></a> 
	<a href="" className="btn btn-light"> Remove</a>
	</td>
</tr>
<tr>
	<td>
		<figure className="itemside">
			<div className="aside"><image src="images/items/2.jpg" className="img-sm" /></div>
			<figcaption className="info">
				<a href="#" className="title text-dark">Product name  goes here nice</a>
				<p className="text-muted small">Size: XL, Color: blue, <br /> Brand: Gucci</p>
			</figcaption>
		</figure>
	</td>
	<td> 
				<div className="input-group input-spinner">
					<div className="input-group-prepend">
					<button className="btn btn-light" type="button" id="button-plus"> <i className="fa fa-minus"></i> </button>
				</div>
				<input type="text" className="form-control" value="1" />
				<div className="input-group-append">
				<button className="btn btn-light" type="button" id="button-minus"> <i className="fa fa-plus"></i></button> 
        </div>   
        </div>
	</td>
	<td> 
		<div className="price-wrap"> 
			<var className="price">$149.97</var> 
			<small  className="text-muted"> $75.00 each </small>  
		</div> 
        {/* <!-- price-wrap .// --> */}
	</td>
	<td className="text-right"> 
	<a data-original-title="Save to Wishlist" title="" href="" className="btn btn-light" data-toggle="tooltip"> <i className="fa fa-heart"></i></a> 
	<a href="" className="btn btn-light btn-round"> Remove</a>
	</td>
</tr>
<tr>
	<td>
		<figure className="itemside">
			<div className="aside"><image src="images/items/3.jpg" className="img-sm" /></div>
			<figcaption className="info">
				<a href="#" className="title text-dark">Another name of some product goes just here</a>
				<p className="small text-muted">Size: XL, Color: blue,  Brand: Tissot</p>
			</figcaption>
		</figure>
	</td>
	<td> 
       
				<div className="input-group input-spinner">
					<div className="input-group-prepend">
					<button className="btn btn-light" type="button" id="button-plus"> <i className="fa fa-minus"></i> </button>
				</div>
				<input type="text" className="form-control" value="1" />
				<div className="input-group-append">
				<button className="btn btn-light" type="button" id="button-minus"> <i className="fa fa-plus"></i></button> 
                </div>
                </div>
         
	</td>
	<td> 
		<div className="price-wrap"> 
			<var className="price">$98.00</var> 
			<small className="text-muted"> $578.00 each</small> 
		</div> 
        {/* <!-- price-wrap .// --> */}
	</td>
	<td className="text-right"> 
		<a data-original-title="Save to Wishlist" title="" href="" className="btn btn-light" data-toggle="tooltip"> <i className="fa fa-heart"></i></a> 
		<a href="" className="btn btn-light btn-round"> Remove</a>
	</td>
</tr>
</tbody>
</table>

    <div className="card-body border-top">
        <a href="#" className="btn btn-primary float-md-right"> Make Purchase <i className="fa fa-chevron-right"></i> </a>
        <a href="#" className="btn btn-light"> <i className="fa fa-chevron-left"></i> Continue shopping </a>
    </div>	
</div> 
{/* <!-- card.// --> */}

<div className="alert alert-success mt-3">
	<p className="icontext"><i className="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks</p>
</div>

	</main> 
    {/* <!-- col.// --> */}
	<aside className="col-md-3">
		<div className="card mb-3">
			<div className="card-body">
			<form>
				<div className="form-group">
					<label>Have coupon?</label>
					<div className="input-group">
						<input type="text" className="form-control" name="" placeholder="Coupon code" />
						<span className="input-group-append"> 
							<button className="btn btn-primary">Apply</button>
						</span>
					</div>
				</div>
			</form>
			</div> 
            {/* <!-- card-body.// --> */}
		</div>  
        {/* <!-- card .// --> */}
		<div className="card">
			<div className="card-body">
					<dl className="dlist-align">
					  <dt>Total price:</dt>
					  <dd className="text-right">USD 568</dd>
					</dl>
					<dl className="dlist-align">
					  <dt>Discount:</dt>
					  <dd className="text-right">USD 658</dd>
					</dl>
					<dl className="dlist-align">
					  <dt>Total:</dt>
					  <dd className="text-right  h5"><strong>$1,650</strong></dd>
					</dl>
					<hr />
					<p className="text-center mb-3">
						<image src="images/misc/payments.png" height="26" />
					</p>
					
			</div> 
            {/* <!-- card-body.// --> */}
		</div>  
        {/* <!-- card .// --> */}
	</aside>
     {/* <!-- col.// --> */}
</div>

</div>
 {/* <!-- container .//  --> */}
</section>
      </div>
  );
}

export default Cart;
