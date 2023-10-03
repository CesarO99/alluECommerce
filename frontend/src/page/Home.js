import React, { useEffect, useRef, useState } from 'react';
import HomeCard from '../component/HomeCard';
import { useSelector } from 'react-redux';
import CardFeature from '../component/CardFeature';
import { GrPrevious, GrNext } from "react-icons/gr";
import FilterProduct from '../component/FilterProduct';


const Home = () => {
  const productData = useSelector((state) => state.productSliceReducer.productList)
  const homeProductCartList = productData.slice(0, 3);
  const homeProductCartListSubscriptions = productData.filter(el => el.category === "Subscriptions", [])

  const loadingArray = new Array(4).fill(null)

  const slideProductRef = useRef()
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200
  }

  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200
  }

  const categoryList = [...new Set(productData.map(el => el.category))]

  const [filterBy, setFilterBy] = useState("")
  const [dataFilter, setDataFilter] = useState([])

  useEffect(()=>{
    setDataFilter(productData)
  },[productData])

  const handleFilterProduct = (category) => {
    const filter = productData.filter(el => el.category.toLowerCase() === category.toLowerCase())
    setDataFilter(() => {
      return [
        ...filter
      ]
    })
  }
  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-2'>

        <div className="md:w-1/2">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className='text-sm font-medium text-slate-900'>Subscriptions</p>
            <img src='https://cdn-icons-png.flaticon.com/512/1472/1472547.png' className='h-7' />
          </div>
          <h2 className='text-4xl md:text-7xl font-bold py-3 '>The Best Products Service <span className='text-red-600'>Is Here</span></h2>
          <p className='py-3 text-base max-w-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <button className='font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md'>Order Now</button>
        </div>

        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {
            homeProductCartList ?
              homeProductCartList.map(el => {
                return (
                  <HomeCard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}

                  />
                );
              })
              :
              loadingArray.map((el, index) => {
                return (
                  <HomeCard
                    key={index}
                    loading={"Loading..."} />
                )
              })

          }
        </div>
      </div>
      <div className="">
        <div className="flex w-full items-center">
          <h2 className='font-bold text-2xl text-slate-800 mb-4'>Subscriptions</h2>
          <div className="ml-auto flex gap-4">
            <button onClick={preveProduct} classname="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"><GrPrevious /></button>
            <button onClick={nextProduct} classname="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"><GrNext /></button>
          </div>
        </div>
        <div className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all" ref={slideProductRef}>
          {
            homeProductCartListSubscriptions.map(el => {
              return (
                <CardFeature
                  key={el._id}
                  id={el._id}
                  name={el.name}
                  category={el.category}
                  price={el.price}
                  image={el.image}
                />
              )
            })
          }
        </div>
      </div>

      <div className="my-5">
        <h2 className="font-bold text 2xl text-slate-800 mb-4">
          All Products
        </h2>

        <div className="flex justify-center overflow-scroll scrollbar-none">
          {
            categoryList[0] && categoryList.map(el => {
              return (
                <FilterProduct category={el} onClick={()=> handleFilterProduct(el)} />
              )
            })

          }
        </div>

        <div className="flex flex-wrap justify-center gap-4 my-4">
          {
            dataFilter.map(el => {
              return (
                <CardFeature
                  key={el._id}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  category={el.category}
                  price={el.price}
                />
              )
            })
          }
        </div>

      </div>
    </div>
  )
}

export default Home