import React, { useState } from 'react'
import CartItems from '../Components/CartItems'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const CartPage = () => {
    // const [cartItems, setCartItems] = useState([]);
    const cartItems = useSelector((state) => state)
    console.log("cartItems : ",cartItems)

    return (
        <div className='d-flex justify-content-center flex-column mt-5 mx-5'>
            <div className="d-flex justify-content-end">
                <Link to="/" className='btn btn-primary'>Products List</Link>
            </div>
            <div className="d-flex justify-content-center flex-column">
                <h1 className='text-center'>Cart Items</h1>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            cartItems.map((item) => <CartItems key={item.product.id} product={item.product} prevQuentity={item.quentity} />)
                        }
                        {
                            cartItems.length == 0 && <tr className='text-center'><td colSpan={6}>Product Not Found</td></tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CartPage