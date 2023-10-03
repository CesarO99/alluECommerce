import React from 'react'
import { Link } from 'react-router-dom'
import { addCartItem } from "../redux/productSlice"
import { useDispatch } from "react-redux";

const CardFeature = ({ image, name, price, category, id }) => {
    const dispatch = useDispatch()
    
    const handleAddCartProduct = (e) => {
        dispatch(addCartItem({
            _id : id,
            name : name,
            price : price,
            category : category,
            image : image
        }))
    }


    return (
        <div className='w-full min-w-[200px] max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col items-center'>
            <Link to={`menu/${id}`}>
                <div className='h-28 flex flex-col justify-center items-center'>
                    <img src={image} className='h-full' />
                </div>
                <h3 className='font-semibold text-slate-600 capitalize text-lg my-4 whitespace-nowrap overflow-hidden'>{name}</h3>
                <p className=' text-slate-500 font-medium text-center'>{category}</p>
                <p className=' font-bold text-center'><span className='text-red-500'>US$</span><span>{price}</span></p>
            </Link>
            <button className='bg-red-500 py-1 mt-2 rounded hover:bg-red-600 px-3 py-2 w-full' onClick={handleAddCartProduct}>Add to Cart</button>
        </div>
    )
}

export default CardFeature