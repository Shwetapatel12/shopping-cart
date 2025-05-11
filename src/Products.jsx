import React, { Fragment } from 'react'

const Products = () => {
  return (
   <figure>
    <img width={200} src="https://images.unsplash.com/photo-1726661025462-b0ddd7a363a8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <figcaption>
        <h2>Product Name</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
        <p>Price: $99.99</p>
        <button>Add to Cart</button>
    </figcaption>
   </figure>
  )
}

export default Products
