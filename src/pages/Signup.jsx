import React, { useState,password } from 'react'
import Container from './../components/Container';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set,push } from "firebase/database";
import { useNavigate } from 'react-router-dom';
import { FaRegEye,FaRegEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';

const Signup = () => {
    let [fullName, setFullName]= useState("");
    let [email, setEmail]= useState("");
    let [passwards, setPasswards]= useState("");
    let [err, setErr]= useState("");
    let [show, setShow]= useState("false");
    const auth = getAuth();
    let navigate = useNavigate()
    const db = getDatabase();
    let handleFullname =(e) =>{
    setFullName(e.target.value);
    };
    let handleEmail =(e) =>{
    setEmail(e.target.value);
    };
    let handlepassword =(e) =>{
    setPasswards(e.target.value);
    };
    let handleSubmit =()=>{
        if(email){
            setErr("Plese enter your mail");
        }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        setErr("Please Enter Your Valid Email");
         }
        createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
            set(ref(db, 'users/' + user.user.uid), {
                username: fullName,
                email: email,
              }).then(()=>{
                setEmail("");
                setErr("");
              });
        })
        .then(()=>{
        toast('🦄 Wow so easy!')
       
        }).then(()=>{
            setTimeout(()=>{
            navigate("/login")
            },2000)
        })
        
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    };
  return (
<>
<div className=""> 
<Container>
<form>
<div className="">
            <div className="w-full">
    <h2 className='font-dm font-bold text-[42px] text-[#262626] py-4'>Sign up</h2>
    <h6 className='font-dm font-normal text-[14px] text-[#262626] flex items-center pb-14'> <Link to="/">Home</Link> <IoIosArrowForward className='ml-2 mr-2'/> <Link to="/contacts">Sign up</Link> </h6>
    </div>
    </div>
    <div className="w-[650px] py-10">
        <p className="font-sans font-normal text-[18px] text-[#767676]items-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
    </div>

    <div className="">
        <h2  className='font-dm font-bold text-[30px] text-[#262626] py-10 pt-10'>Your Personal Details</h2>
        <div className="flex w-full">
            <div className="w-1/2">
                <h3 className='font-dm font-bold text-[20px] text-[#262626] pt-5'>First Name</h3>
                <input  className="py-3 w-[400px]"  type="text" placeholder='First Name' onChange={handleFullname}/>
                
            </div>
            <div className="w-1/2">
                <h3 className='font-dm font-bold text-[20px] text-[#262626] pt-5'>Last Name</h3>
                <input className="py-3 w-[400px]" type="tex" placeholder='Last Name'/>
            </div>
        </div>

        <div className="flex w-full">
            <div className="w-1/2">
                <h3 className='font-dm font-bold text-[20px] text-[#262626] pt-5'>E-mail address</h3>
                <input className="py-3 w-[400px]" type="email" placeholder='company@domain.com' onchange={handleEmail}/>
                <p className='text-red-800'>{err}</p>
             </div>
            <div className="w-1/2">
                <h3 className='font-dm font-bold text-[20px] text-[#262626] pt-5'>Telephone</h3>
                <input className='py-3 w-[400px]' type="phone" placeholder='Your phone number'/>
                
            </div>
        </div>
    </div>
    <div className="">
        <h2 className='font-dm font-bold text-[30px] text-[#262626] py-10 pt-10'>New Customer</h2>
        <div className=""></div>

        <div className="flex w-full">
            <div className="w-1/2">
                <h3 className='font-dm font-bold text-[20px] text-[#262626] pt-5'>Address-1</h3>
                <input className="py-3 w-[400px]" type="text" placeholder='4279 Zboncak Port Suite 6212'/>
            </div>
            <div className="w-1/2">
                <h3 className='font-dm font-bold text-[20px] text-[#262626] pt-5'>Address-2</h3>
                <input className='py-3 w-[400px]' type="text" placeholder='-'/>
            </div>
        </div>

        <div className="flex w-full">
            <div className="w-1/2">
                <h3 className='font-dm font-bold text-[20px] text-[#262626] pt-5'>City</h3>
                <input className="py-3 w-[400px]" type="text" placeholder='Your city'/>
            </div>
            <div className="w-1/2">
                <h3 className='font-dm font-bold text-[20px] text-[#262626] pt-5'>Post Code</h3>
                <input className='py-3 w-[400px]' type="text" placeholder='4536'/>
            </div>
        </div>

        <div className="flex w-full">
            <div className="w-1/2">
                <h3 className='font-dm font-bold text-[20px] text-[#262626] pt-5'>Division</h3>
                <input className="py-3 w-[400px] font-dm text-base" type="text" placeholder='Please select'/>
            </div>
            <div className="w-1/2">
                <h3 className='font-dm font-bold text-[20px] text-[#262626] pt-5'>District</h3>
                <div className="flex items-center"> 
                <p className='pr-6 text-[18px] '> <TiArrowSortedDown /> </p>
                <input className='py-3 w-[400px] font-dm text-base' type="text"  placeholder='plese select '/>
                <sapan className="text-[18px]"><TiArrowSortedDown /></sapan>
                </div>
            </div>
        </div>
        <div className="">
            <h3 className='font-dm font-bold text-[30px] text-[#262626] py-10 pt-8'>Your Password</h3>
        </div>
        <div className="flex w-full">
            <div className="w-1/2 ">
                <h3 className='font-dm font-bold text-[20px] text-[#262626] pt-5'>Password</h3>
                <div className="w-[46%] relative"> 
                <span> <input className="py-3 w-[400px] font-dm text-base" type={show ? "text" :"password"} placeholder='passward'  oncharge={handlepassword}/></span>
           <div onClick={()=>setShow(!show)} className="absolute top-[40%] right-[-30px] translet-y-[-50%]">
           {show ? <FaRegEye />:<FaRegEyeSlash />}
           </div>
          </div>
           
            </div>
            <div className="w-1/2">
                <h3 className='font-dm font-bold text-[20px] text-[#262626] pt-5'>Repeat Passward</h3>
                <input className='py-3 w-[400px] font-dm text-base' type="passward" placeholder='Repeat Passward'/>
            </div>
        </div>
    </div>
    <div className="flex gap-3 py-8">
    <input type="checkbox"/>
    <p className='font-dm font-normal text-[16px] text-[#262626]'> I have read and agree to the Privacy Policy</p>
    </div>
    <div className="flex gap-3">
        <h5  className='font-dm font-normal text-[16px] text-[#262626]'>Subcribe Newsletter</h5>
            <input type="checkbox"/>
            <span className='font-dm font-normal text-[16px] text-[#262626]'>Yes</span>
            <input type="checkbox"/>
            <span className='font-dm font-normal text-[16px] text-[#262626]'>No</span>
    </div>
    <div className="py-10">
        <div onClick={handleSubmit}> 
        <button className='font-dm font-semi-bold text-[18px] text-[#262626] border-2 border-gray-400 px-14 py-1 hover:text-white hover:bg-black duration-300'><Link>Sign up</Link></button>
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
     
        </div>
   <div className="py-4"> 
    <h5 className='font-dm font-semi-bold text-[18px] text-[#262626]'>Already have account ? Please <Link to="/login"> Log in</Link></h5>
    </div>
    </div>
    </form>
</Container>

</div>
</>  

)
}

export default Signup