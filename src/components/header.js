import React, { useEffect, useState } from 'react'
import netflix_logo from '../utils/Netflix_Logo_PMS.png'
import profile from '../utils/profile.jpeg'
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, } from 'react-redux'
import {  removeUser } from '../utils/userSlice';


const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [showSignOutBtn, setShowSignOutBtn] = useState(false)
  const [showProfiletBtn, setshowProfiletBtn] = useState(false)

  useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        setshowProfiletBtn(true) 
        navigate('/browse') 
      } else {
        dispatch(removeUser())
        setshowProfiletBtn(false) 
        navigate('/')
      }
    });

    return ()=> unsubscribe()
  }, []);

  const showBtn=()=>{
    setShowSignOutBtn(!showSignOutBtn)
  }

  const getSignedOut=()=>{
   signOut(auth)
   .then(() => {})
   .catch((error) => {
    console.log('error', 'signing out failed')
  });

  }

  return (
    <>
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-50 w-screen flex justify-between'>
        <img 
        className=' w-64'
        src={netflix_logo} 
        alt='logo' 
        />
       
        <div>
      { showProfiletBtn &&
       <img alt='user' 
       className='w-16 p-2 my-4 rounded-full cursor-pointer'
        src={profile}
        onClick={showBtn}
       />
       }

       </div>
       {showSignOutBtn && 
        <button 
        className='text-white  text-sm font-bold ml-[1420px] absolute z-500 bg-black w-24 mt-20 p-2'
         onClick={getSignedOut}>
         Sign Out
         </button>
         }

        </div>
        
        </>
  )
        }
      

export default Header