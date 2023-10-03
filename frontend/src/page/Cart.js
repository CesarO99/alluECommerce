import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../component/cartProduct'

const Cart = () => {
    const productCartItem = useSelector((state) => state.productSliceReducer.cartItem)
    console.log('eita nois', productCartItem)

    const totalPrice = productCartItem.reduce((acc, curr) => acc + parseInt(curr.total), 0)
    const totalQty = productCartItem.reduce((acc, curr) => acc + parseInt(curr.qty), 0)
    return (
        <>
            <div className='p-2 md:4'>
                <h2 className='text-lg md:2xl font-bold text-slate-600 ml-6'>Your Cart Items</h2>
                {productCartItem[0] ?
                    <div className='my-4 flex gap-3'>

                        <div className='w-full max-w-3xl ml-6'>
                            {
                                productCartItem.map(el => {
                                    return (
                                        <CartProduct
                                            key={el._id}
                                            id={el._id}
                                            name={el.name}
                                            image={el.image}
                                            category={el.category}
                                            qty={el.qty}
                                            total={el.total}
                                            price={el.price}
                                        />
                                    )
                                })
                            }
                        </div>


                        <div className='w-full max-w-md ml-72'>
                            <h2 className='bg-blue-500 font-bold text-white p-2 text-lg'>Checkout</h2>
                            <div className="flex w-full py-2 text-lg border-b">
                                <p>Total Quantity : </p>
                                <p className="ml-auto w-32 font-bold">{totalQty}</p>
                            </div>
                            <div className="flex w-full py-2 text-lg border-b">
                                <p>Total Price</p>
                                <p className="ml-auto w-32 font-bold"><span className='text-red-500'>US$</span>{totalPrice}</p>
                            </div>
                            <div>
                                <button className="bg-red-500 w-full max-w-lg text-lg font-bold py-2 text-white">Payment</button>
                            </div>
                        </div>
                    </div>

                    :
                    <>
                    <div className="flex w-full justify-center items-center flex-col">
                        <p className="text-slate-500 text-3xl font-bold">
                            Empty Cart
                        </p>

                    </div>

                    </>
                }
            </div>
        </>
    )
}

export default Cart