import React, { useEffect, useRef, useState } from 'react'
import netflix_logo from '../utils/Netflix_Logo_PMS.png'
import profile from '../utils/profile.jpeg'
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector, } from 'react-redux'
import {  removeUser } from '../utils/userSlice';
import { toggleShowGPTComponent } from '../utils/GPTSlice';
import { supportedLanguages } from '../utils/constants';
import {changeLanguage} from '../utils/configSlice'



const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [showSignOutBtn, setShowSignOutBtn] = useState(false)
  const [showProfiletBtn, setshowProfiletBtn] = useState(false)
 const lang = useRef()
 const showGPTCompoent = useSelector(store=>store.gptComponent.showGPTComponent)

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

  const handleGPTButtonClick=()=>{
    dispatch(toggleShowGPTComponent())
  }

  const handleLanguageChange=()=>{
    dispatch(changeLanguage(lang.current.value))
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
      <div  className='flex justify-between'>
      { showGPTCompoent &&  <select className='text-white text-xl bg-gray-900 mr-[10px] my-6 py-2 px-4 rounded-sm font-semibold' onChange={handleLanguageChange} ref={lang}>
       {
        supportedLanguages.map( el => 
          <option key={el.identifier} value={el.identifier}>{el.name}</option>
        )
       }
       </select>}

        { <button className='bg-gray-900 text-white text-xl  mr-[10px] my-6 py-2 px-4 rounded-lg font-semibold' 
        onClick={handleGPTButtonClick}>{ !showGPTCompoent ? 'GPT Search' : 'Home'}</button>}

       <img alt='user' 
       className='w-16 p-2 my-4 rounded-full  cursor-pointer'
        src={profile}
        onClick={showBtn}
       />
       </div>
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