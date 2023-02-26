import React, { useState } from 'react'
import {auth} from '../Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { Navigate, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const logIn = () => {
      signInWithEmailAndPassword(auth, email, password)
      .then(auth => navigate("/body"))
      .catch(error => console.error(error))
  }

  const Register = () => {
      createUserWithEmailAndPassword(auth, email, password)
      .then(auth => navigate("/body"))
      .then(error => console.error(error))
  }


  return (
    <Container>
      <form action="">
        <h1>Log In</h1>
        <div className='emailbox'>
          <label htmlFor="">Email</label>
          <input  onChange={(e) => setEmail(e.target.value)} type="email" autoComplete='off' name='email' />
        </div>
        <div>
          <label htmlFor="password" className='passwordbox'>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" autoComplete='off' name='password' />
        </div>
        <div className='btn'>
          <button onClick={logIn}>LogIn</button>
          <button onClick={Register}>Create account</button>
        </div>
      </form>
    </Container>
  )
}
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;

    form{
      border: 2px solid red;
      padding: 3rem;
    }
    h1{
      margin-top: .5rem;
      margin-bottom: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .emailbox, .passwordbox{
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    .btn{
      margin: 1rem;
    }
`

export default Login
