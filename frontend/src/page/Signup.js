import React, { useState } from "react";
import loginSignupImage from "../images/signup-icon.png";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const handleOnChange = (e)=>{
        const { name, value } = e.target;
        setData((preve) => {
            return {
                ...preve,
                [name] : value
            }
        }
        )
    }

    const handleSubmit = async(e)=> {
        e.preventDefault()
        const {firstName, email, password} = data
        if(firstName && email && password){
            const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/signup`,{
                method : "POST",
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify(data)
            })

            const dataRes = await fetchData.json()
            console.log(dataRes)
            alert(dataRes.message)
            if(dataRes.alert){
                navigate("/login")
            }
            
        }
        else{
            alert("Please Enter required fields")
        }
    }

    return (
        <div className='p-3 md:p-4'>
            <div className='w-full max-w-sm bg-white m-auto flex flex-col p-4'>
                <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto'>
                    <img src={loginSignupImage} className="w-full" />
                </div>

                <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>
                    <label htmlFor='firstName'>First Name</label>
                    <input type={"text"} id="firstName" name='firstName' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded' value={data.firstName} onChange={handleOnChange} />
                    <label htmlFor='lastName'>Last Name</label>
                    <input type={"text"} id="lastName" name='lastName' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded' value={data.lastName} onChange={handleOnChange} />
                    <label htmlFor='email'>E-mail</label>
                    <input type={"email"} id="email" name='email' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded' value={data.email} onChange={handleOnChange} />
                    <label htmlFor='password'>Password</label>
                    <input type={"password"} id="password" name='password' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded' value={data.password} onChange={handleOnChange}/>

                    <button type='s' className="w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">Sign Up</button>
                </form>
                <p className="w-full text-sm mt-2 items-center">Already have account? <Link to={"/login"} className="text-red-500 underline">Login</Link></p>

            </div>
        </div>
    )
}

export default Signup