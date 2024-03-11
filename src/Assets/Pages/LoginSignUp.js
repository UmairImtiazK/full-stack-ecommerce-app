import React, { useState } from 'react'

export default function LoginSignUp() {
  const [name, setName] = useState('');
  const [Emial, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    Email: '',
    password: ''
  })

  const [errors, setErrors] = useState({});

  const handleOnSubmit = (e) =>{
    e.preventDefault();
    setFormData({
      ...formData,
      name: name.trim(),
      Email: Emial.trim(),
      password: password.trim()});

    console.log(formData);

    let RegexName = /^[A-Za-z]+$/;
    let RegexEmail = /^\S+@\S+.\S+$/;  //example123@gmail.com
    let RegexPassword = /^\S{6}$/;

  let checkValidation = {};

    if(!name.trim()){
      checkValidation.name= 'Username is required';
    }
    else if(!name.match(RegexName)){
      checkValidation.name= 'Username is invalid';
    }

    if(!Emial.trim()){
      checkValidation.Emial= 'Email is required';
    }
    else if(!Emial.match(RegexEmail)){
      checkValidation.Emial= 'Email is invalid';
    }

    if(!password.trim()){
      checkValidation.password= 'password is required';
    }
    else if(!password.match(RegexPassword)){
      checkValidation.password= 'password is invalid';
    }
    setErrors(checkValidation);
    if(Object.keys(checkValidation) === 0){
      alert('form submitted sucessfully.');
    }
    console.log(formData);
    console.log(checkValidation);
  }
  return (
    <div className='LoginPageParent'>
      <form className='Login--page' onSubmit={handleOnSubmit}>
      <h1>Login</h1>
      <div className="input--fields">
        <input placeholder='Your Name' type="text" value={name} required onChange={(e)=>{setName(e.target.value)}} />
        {errors.name && <span>{errors.name}</span>}
        <input placeholder='Email Address' type="email" required value={Emial} onChange={(e)=>{setEmail(e.target.value)}}/>
        {errors.Emial && <span>{errors.Emial}</span>}
       
        <input placeholder='Password' type="password" required value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        {errors.password && <span>{errors.password}</span>}
       
        <button type='submit' className='btn'>Continue</button>
      </div>
      <p>Already have an account? <span>Click here.</span></p>
      <div className="Accepting--privacy">
        <input type="checkbox" />
        <p>By continuing, I agree to the terms of use & privacy policy.</p>
      </div>
    </form>
    </div>
  )
}
