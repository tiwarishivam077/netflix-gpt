export const ValidateForm = (isRegistered, phone,  email,  password) =>{
    
       if(isRegistered){
        const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
        const  isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)
        
    
        if(!isEmailValid) return 'Email is not valid, Please Try again'
        if(!isPasswordValid) return 'Invalid Password'
        return null;
       }
       else{
      //   const isPhoneValid = /^\+?[1-9][0-9]{7,14}$/.test(phone)
        const isEmailValid =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
        const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)
    
         // if(!isPhoneValid) return 'Phone No is not valid, Please Enter Valid number'
        if(!isEmailValid) return 'Email is not valid, Please Try again'
        if(!isPasswordValid) return 'Invalid Password'
        return null;
       }
    }