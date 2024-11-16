import { Edit, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import { removeFromCart, updateCart } from '../Redux/Slices/CartItemsSlice';
import { useDispatch } from 'react-redux';

const CartItems = ({product,prevQuentity}) => {
    console.log("prevQuentity : ",prevQuentity)
    const [quentity, setQuentity] = useState(prevQuentity);
    const dispatch = useDispatch();
    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(product.id));
        alert(product.title + " Product Removed form Cart");
    }

    const handleUpdateCart = () => {
        dispatch(updateCart({productId : product.id, quentity : quentity }));
        alert(" Product Updated in Cart");
    }

    return (
        <tr>
            <td>{product.id}</td>
            <td><img src={product.image} width={50} height={50} alt="img" /></td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td><input type='number' min={1} onChange={(e) => setQuentity(e.target.value) } value={quentity} /></td>
            <td>
                <Trash2 onClick={handleRemoveFromCart} />
                <Edit onClick={handleUpdateCart} />
            </td>
        </tr>
    )
}

export default CartItems