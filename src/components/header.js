import React, { useEffect, useState } from 'react'
import netflix_logo from '../utils/Netflix_Logo_PMS.png'
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {  removeUser } from '../utils/userSlice';


const Header = () => {
  const navigate = useNavigate()
  const isUser = useSelector(store=>store.user)
  const dispatch = useDispatch()
  const [showSignOutBtn, setShowSignOutBtn] = useState(false)
 

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/browse')       
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    });
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
      { isUser &&
       <img alt='user' 
       className='w-16 p-2 my-4 rounded-full cursor-pointer'
        src={isUser.photoURL}
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