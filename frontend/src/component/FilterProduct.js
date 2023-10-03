import React from 'react'
import { FcMultipleSmartphones } from "react-icons/fc"

const FilterProduct = ({category, onClick}) => {
    return (
        <div onClick={onClick}>
            <div className="text-3xl p-3 ml-6 mr-6 bg-white rounded-full cursor-pointer">
                <FcMultipleSmartphones />
            </div>
            <p className="text-center font-medium my-1 capitalize">{category}</p>
        </div>
    )
}

export default FilterProduct