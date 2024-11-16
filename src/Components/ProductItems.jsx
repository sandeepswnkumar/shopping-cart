import React, { useState } from 'react'
import { addToCart } from "./../Redux/Slices/CartItemsSlice"
import { useDispatch } from 'react-redux'

const ProductItems = ({ product }) => {
    const [quentity, setQuentity] = useState();
    const dispatch = useDispatch();

    const handleAddtoCart = () =>{
        console.log("quentity : ",quentity)
        if(quentity == null || quentity == "" || quentity <= 0){
            alert("Invalid Quentity");
            return false;
        }
        dispatch(addToCart({product, quentity}))
        setQuentity("");
        alert("Product Added to Cart")
    }
    return (
        <tr>
            <td>{product.id}</td>
            <td><img src={product.image} width={50} height={50} alt="img" /></td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td><input type='number' min={1} onChange={(e) => setQuentity(e.target.value) } value={quentity} /></td>
            <td>
                <button className='btn btn-outline-primary' onClick={handleAddtoCart}>Add to cart</button>
            </td>
        </tr>
    )
}

export default ProductItems