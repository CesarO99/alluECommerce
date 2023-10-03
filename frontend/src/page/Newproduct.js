import React from 'react'
import { BsCloudUpload } from 'react-icons/bs'

const Newproduct = () => {
  return (
    <div className="p-4">
        <form className='m-auto w-full max-w-md shadow flex flex-col p-3 bg-white'>
            <label htmlFor='name'>Name</label>
            <input type={"text"} name = "name" className='bg-slate-200 p-1 my-1'/>

            <label htmlFor='category'>Category</label>

            <select className='bg-slate-200 p-1 my-1'>
                <option>Services</option>
            </select>

            <label htmlFor='image'>Image</label>
            <div className='h-40 w-full bg-slate-300 my-3 rounded flex items-center justify-center'>
                <span className='text-5xl'><BsCloudUpload/></span>
            </div>
            
            <label htmlFor='price' className='my-1'>Price</label>
            <input type={"text"} className='bg-slate-200 p-1 my-1'/>
            <label htmlFor='description'>Description</label>
            <textarea rows={3} className='bg-slate-200 p-1 my-1 resize-none'></textarea>

            <button className='bg-slate-500 hover:bg-slate-500 text-white text-lg font-medium my-2 drop-shadow'>Save</button>
        </form>
    </div>
  )
}

export default Newproduct