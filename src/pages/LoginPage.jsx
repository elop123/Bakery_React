import React, { useEffect, useState } from 'react'
import { InputField } from '../components/InputField/InputField'
import { useContext } from 'react';
import { UserContext } from '../context/useContext';


export const LoginPage = () => {
  const [email,setEmail] = useState();
  const[password, setPassword] =useState();
  const [loginMessage, setLoginMessage] = useState();
  const [error, setError] = useState();
  const [data, setData] = useState();
 

  console.log("Input values", email, password);

  const {setUserData} = useContext(UserContext)

  function submitData( ){

    //sådan her opretter man enbody med key value pairs
    const body = new URLSearchParams();
    body.append('username', email);
    body.append('password', password);

    //OPret et options objekt med http request metode 'post' og vores body
    const options = {method:"POST", 
      body:body, 
      //headers: token ? {'Authorization':`Bearer ${token}`} : {},
};
//Fetch med options, POST til server
fetch("https://api.mediehuset.net/token", options)
.then ((res)=> res.json())
.then((data) => {
  // Check if the access_token exists in the response
  if (data.access_token) {
    setUserData(data);
    setLoginMessage(`Du er nu logget ind. Velkommen tilbage ${data.user.firstname}`);
  } else {
    setLoginMessage('Du har tastet forkert password eller email');
  }
})
.catch((err) =>setError(err));

}
  

  //console.log("Data response", data);

  
  
  return (
    <>
    {loginMessage && (
  <p style={{ fontFamily: 'Open Sans', color: 'green', fontSize: '16px',padding:'1rem', marginBottom: '1rem',marginLeft:'37%', alignSelf:'center' }}>
    {loginMessage}
  </p>
)}
    <form   >
    <InputField type="email"
                 placeholder="Indtast din mail"
                 name="Email"
                 labelText="Email"
                 id="emailField"
                 action={setEmail}/>
    <InputField type="password"
                 placeholder="Indtast dit password"
                 name="Password"
                 labelText="Password"
                 id="passwordField"
                 action={setPassword}/>
    <InputField />
    </form >
    <button   style={{
      padding: '12px', 
      backgroundColor: '#222', 
      color: 'white', 
      border: 'none', 
      borderRadius: '5px', 
      cursor: 'pointer', 
      fontSize: '16px',
      marginBottom:'1rem',
      marginLeft:'48%',
    }}  onClick={() => submitData()}>Send</button>
    
    </>
  )
}