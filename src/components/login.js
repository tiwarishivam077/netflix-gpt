import React, {  useRef, useState }  from 'react'
import Header from './header'
import { netflix_home_page_background_url, user_icon_url } from '../utils/constants'
import {ValidateForm} from '../utils/login-form-validator'
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';



const Login = () => {
    
     const [isSignInForm, setIsSignInForm] = useState(true)
     const [errorMsg ,setErrorMsg] =useState()
     const dispatch = useDispatch()  
     

     const phone = useRef(null)
     const email= useRef(null)
     const password = useRef(null)
     const name = useRef(null)

    const toggleForm=()=>{
    setIsSignInForm(!isSignInForm)
   }

   const updateUserandAddtoStore = () => { 
   
    updateProfile(auth.currentUser, {
      displayName : name?.current?.value,
      email : email?.current?.value,
      photoURL : user_icon_url,
      emailVerified : false,
   })
   .then(()=>{
   const {uid, displayName, email, photoURL }= auth.currentUser;
   dispatch(
    addUser({
      uid : uid,
      email:email,
      displayName:displayName,
      photoURL:photoURL,
  })
  )})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorMessage + ' - ' + errorCode)
  });
}

const handleButtonClick =()=>{
    const error =  ValidateForm(isSignInForm, phone?.current?.value, email?.current?.value, password?.current?.value )
    setErrorMsg(error) 
    if(error) return
    if(!isSignInForm){
     createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
     .then((userCredential) => {
       updateUserandAddtoStore()
     })
  
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       setErrorMsg(errorMessage + ' - ' + errorCode)
     });
   }
   else{
     signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
     .then((userCredential) => {
      updateUserandAddtoStore()
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       console.log(error.message)
       setErrorMsg(errorMessage + ' - ' + errorCode)
     });
   }
   
 }
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src={netflix_home_page_background_url} alt='background' className='h-screen w-screen'/>
       </div>
       <div className='absolute w-4/12 p-12 mx-auto right-0 left-0 bg-black my-48  text-white rounded-lg bg-opacity-80' >
       <h1 className='text-3xl font-bold py-4 px-2'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
      { !isSignInForm && <input 
        type='text' 
        ref={name}
        placeholder='Full Name' 
        className='p-4 my-2 w-full bg-gray-700  rounded-lg bg-opacity-70'
        />}
        {/* {!isSignInForm && <input 
        type='phone' 
        ref={phone}
        placeholder='Phone' 
        className='p-4 my-2 w-full bg-gray-700  rounded-lg bg-opacity-70'
        />} */}
        <input 
        type='email' 
        ref={email}
        placeholder='Email Address' 
        className='p-4 my-2 w-full bg-gray-700  rounded-lg bg-opacity-70' 
        />
        <input 
        type='password'
        ref={password}
         placeholder='Password' 
         className='p-4 my-2 w-full  bg-gray-700  rounded-lg bg-opacity-70' 
         />

         <p className='text-red-600 font-bold text-lg py-2'>{errorMsg}</p>
         {isSignInForm && <span className='text-white cursor-pointer text-md py-2 hover:underline'>Forgot Password ?</span>}
        <button 
        className='p-2 my-4 bg-red-600 w-full rounded-lg'
        onClick={handleButtonClick}>
        {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>

        <p className='p-2 m-2 hover:underline' onClick={toggleForm} > {isSignInForm ? 'New to Netflix ? Sign Up now' : 'Already Registered ? Sign In now'}</p>
       </div>
    </div>
   
   
  )
}

export default Login