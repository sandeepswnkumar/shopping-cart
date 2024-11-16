import React, { useEffect, useState } from 'react'
import ProductItems from '../Components/ProductItems';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch()

    const getProducts = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data)
        } catch (err) {
            console.log("error while get product : ", err);

        }
    }
    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div className='d-flex justify-content-center flex-column mt-5 mx-5'>
            <div className="d-flex justify-content-end">
                <Link to="/cart-page" className='btn btn-primary'>Go to Cart</Link>
            </div>
            <div className="d-flex justify-content-center flex-column">
                <h1 className='text-center'>Product List</h1>
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
                            products.map((product, i) => <ProductItems key={product.id} product={product} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductsPage