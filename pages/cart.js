import React from 'react'

function cart() {
    return (
        <div>
            <section classNameName="section-pagetop bg">
<div className="container">
	<h2 className="title-page">Shopping cart</h2>
</div>
 {/* <!-- container //  --> */}
</section>

{/* <!-- ========================= SECTION CONTENT ========================= --> */}
<section className="section-content padding-y">
<div className="container">

<div className="row">
	<main className="col-md-9">
<div className="card">

<div className="row align-items-center">
					<div className="col-md-6">
						<figure className="itemside">
							<div className="aside"><image src="bootstrap-ecommerce-html/images/items/4.jpg" classNameName="border image-sm" /></div>
							<figcaption className="info">
								<span className="text-muted">Wears</span>
								<a href="#" className="title">Jeans bag for hiking </a>
							</figcaption>
						</figure> 
					</div>
                     {/* <!-- col.// --> */}
					<div className="col"> 
						<div className="input-group input-spinner">
							<div className="input-group-prepend">
							<button className="btn btn-light" type="button" id="button-plus"> <i className="fa fa-minus"></i> </button>
							</div>
							<input type="text" className="form-control" value="1" />
							<div className="input-group-append">
							<button className="btn btn-light" type="button" id="button-minus"> <i className="fa fa-plus"></i> </button>
							</div>
						</div>
                         {/* <!-- input-group.// --> */}
					</div> 
                    {/* <!-- col.// --> */}
					<div className="col">
						<div className="price h5"> $180.00 </div>
					</div>
					<div className="col flex-grow-0 text-right">
						<a href="#" className="btn btn-light"> <i className="fa fa-times"></i> </a>
					</div>
				</div>

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
					<dl classNameName="dlist-align">
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

<div className="container">
<h6>Payment and refund policy</h6>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

</div>
{/* <!-- container // --> */}
        </div>
    )
}

export default cart
