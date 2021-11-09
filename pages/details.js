import React from 'react'
import image from 'next/image'

function details() {
    return (
        <div>
            <div className="card">
	<div className="row no-gutters">
		<aside className="col-md-6">
<article className="gallery-wrap"> 
	<div className="Image-big-wrap">
	   <a href="#"><image src="/images/items/12.jpg" height="200px" width="200px" alt="logo" /></a>
	</div> 
    {/* <!-- Image-big-wrap.// --> */}
	<div className="thumbs-wrap">
	  <a href="#" className="item-thumb"> <image src="/images/items/12-1.jpg" height="200px" width="200px" /></a>
	  <a href="#" className="item-thumb"> <image src="/images/items/12-2.jpg" height="200px" width="200px" /></a>
	  <a href="#" className="item-thumb"> <image src="/images/items/12.jpg" height="200px" width="200px" /></a>
	  <a href="#" className="item-thumb"> <image src="/images/items/4.jpg" height="200px" width="200px" /></a>
	</div>
     {/* <!-- thumbs-wrap.// --> */}
</article> 
{/* <!-- gallery-wrap .end// --> */}
		</aside>
		<main className="col-md-6 border-left">
<article className="content-body">

<h2 className="title">Off-White Odsy-1000 Low-Top Sneakers</h2>

<div className="rating-wrap my-3">
	<ul className="rating-stars">
		<li style={{width:"80%"}} className="stars-active">
			<image src="bootstrap-ecommerce-html/images/icons/stars-active.svg" alt="" />
		</li>
		<li>
			<image src="bootstrap-ecommerce-html/images/icons/starts-disable.svg" height="200px" width="200px" alt="" />
		</li>
	</ul>
	<small className="label-rating text-muted">132 reviews</small>
	<small className="label-rating text-success"> <i className="fa fa-clipboard-check"></i> 154 orders </small>
</div>
 {/* <!-- rating-wrap.// --> */}

<div className="mb-3"> 
	<var className="price h4">$815.00</var> 
	<span className="text-muted">/per kg</span> 
</div> 

<p>Virgil Abloh’s Off-White is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown Odsy-1000 low-top sneakers.</p>

<dl className="row">
  <dt className="col-sm-3">Model#</dt>
  <dd className="col-sm-9">Odsy-1000</dd>

  <dt className="col-sm-3">Color</dt>
  <dd className="col-sm-9">Brown</dd>

  <dt className="col-sm-3">Delivery</dt>
  <dd className="col-sm-9">Kenya, uganda, and Rwanda </dd>
</dl>

<hr />
	<div className="row">
		<div className="form-group col-md flex-grow-0">
			<label>Quantity</label>
			<div className="input-group mb-3 input-spinner">
			  <div className="input-group-prepend">
			    <button className="btn btn-light" type="button" id="button-plus"> + </button>
			  </div>
			  <input type="text" className="form-control" value="1" />
			  <div className="input-group-append">
			    <button className="btn btn-light" type="button" id="button-minus"> − </button>
			  </div>
			</div>
		</div> 
        {/* <!-- col.// --> */}
		<div className="form-group col-md">
				<label>Select size</label>
				<div className="mt-2">
					<label className="custom-control custom-radio custom-control-inline">
					  <input type="radio" name="select_size" checked="" className="custom-control-input" />
					  <div className="custom-control-label">Small</div>
					</label>

					<label className="custom-control custom-radio custom-control-inline">
					  <input type="radio" name="select_size" className="custom-control-input" />
					  <div className="custom-control-label">Medium</div>
					</label>

					<label className="custom-control custom-radio custom-control-inline">
					  <input type="radio" name="select_size" className="custom-control-input" />
					  <div className="custom-control-label">Large</div>
					</label>

				</div>
		</div> 
        {/* <!-- col.// --> */}
	</div> 
    {/* <!-- row.// --> */}
	<a href="#" className="btn  btn-primary"> Buy now </a>
	<a href="#" className="btn  btn-outline-primary"> <span className="text">Add to cart</span> <i className="fas fa-shopping-cart"></i>  </a>
</article> 
{/* <!-- product-info-aside .// --> */}
		</main> 
        {/* <!-- col.// --> */}
	</div> 
    {/* <!-- row.// --> */}
</div>
        </div>
    )
}

export default details
