import React from 'react'
import styled from 'styled-components';
import Login from '../components/Login.jsx';
import Register from '../components/Register.jsx';
import { Route,Routes } from 'react-router-dom';
import { useState } from 'react';

const SignUpPage = () => {
    const [isRegistered, setIsRegistered] = useState(true);
    

  return (
    <StyledWrapper>
        <div className='signup-container'>
            {
                isRegistered ? (
                    <Routes>
                        <Route path="/" element={<Login setIsRegistered={setIsRegistered} />} />
                    </Routes>
                ) : (
                    <Routes>
                        <Route path="/" element={<Register setIsRegistered={setIsRegistered} />} />
                    </Routes>
                )
            }
        </div>
    </StyledWrapper>
  )
}

export default SignUpPage;


const StyledWrapper = styled.div`
    .signup-container {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(28, 28, 29);
    }

`