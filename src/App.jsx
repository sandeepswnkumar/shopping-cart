import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Delete, DeleteIcon, Trash2 } from 'lucide-react'
import ProductItems from './Components/ProductItems'
import { Route, Routes } from 'react-router-dom'
import ProductsPage from './Pages/ProductsPage'
import CartPage from './Pages/CartPage'



function App() {
    return (
        <Routes>
            <Route path='/'  element={<ProductsPage />} />
            <Route path='/cart-page' element={<CartPage />} />
        </Routes>   
    )
}

export default App
