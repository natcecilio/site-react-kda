import React, { useState } from 'react';
import '../../App.css';
import FormSignup from '../FormSignup';
import FormSuccess from '../FormSuccess';
import Footer from '../Footer';
import '../Form.css';

 function SignUp() {
   const [isSubmitted, setIsSubmitted] = useState(false);

   function submitForm() {
     setIsSubmitted(true);
   }
  return (
    <>
      <h1 className='sign-up'>Sign Up</h1>
      <div className='form-container'>
          
        
          {!isSubmitted ? (
              <FormSignup submitForm={submitForm} />
            ) : (
              <FormSuccess />
            )}
        </div>
      <Footer />
    </>
  );
}

export default SignUp;