import React, { useState } from 'react'
import styled from 'styled-components'


import Logo from '../../assets/flick_logo.svg'

const Navbar = () => {
  const [state, setState] =useState({clicked:false})
  const handleClick =() =>{
    setState(state =>({
      clicked:!state.clicked
    }))
  }
    const Container=styled.div`
    display:flex;
    justify-content:space-between;
    background:#fff;
    padding: 30px 106px;
    font-size: 16px;
    font-family: 'Circular Std', sans-serif;
    font-weight: 450;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,.1);
    height: 5rem;
    line-height: 60px;
    @media(max-width:768px){
      justify-content:space-around;
      width:100%;
      padding:0;
    }
    @media(max-width:280px){
      justify-content:space-between;
      padding:0;
      margin:0;
    }
    `
    const Navbar=styled.div`
    display:inline-flex;
    justify-content:space-between;
    align-item:center;
    height:50%;
  #linked {
    list-style: none;
    display:flex;
    inline-height:10px;
  
  }
  .link {
   display:flex;
   flex-direction:column;
  
  }
    .navLink{
        text-decoration: none;
        position:relative;
        color: #525260;
       padding:10px;
    }
    .dropdown{
        position:absolute;
        display: none;
        font-size: 15px;
        border-radius:6px;
        font-weight: 500;
        padding:5px 60px 5px 5px;
        text-transform: capitalize;
        background-color: #fff;
         box-shadow: 0 13px 48px 0 rgba(0,0,0,.15);
        z-index: 1;
        
    }
    .link:hover .dropdown {
        display: block;
     
    }

    .dropdown a {
        text-decoration: none;
        display: flex;
        flex-direction:column;
        align-items: flex-start;
        color: #525260;
        line-height: normal;
        padding:10px;
    }

    .link a:hover{
       color: darkcyan;

    }

    #mobile{
      display: none;
    }
  
     @media(max-width:768px){
      #linked {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-self: start;
        position: fixed;
        top:90px;
        right: -200px;
        width: 200px;
        height:40vh;
        background-color:white;
      }
   #linked.active{
          right: 0px;
        }
  
      #mobile{
        display: block;
       }
       #mobile i{
      font-size: 24px;
       } 
    `
    
  return (
    <Container>
<img src={Logo} alt="Logo" />
        <Navbar id='rightNav' className={state.clicked ? "#rightNav active": "rightNav"}>
          <ul id="linked" className={state.clicked ? "#linked active": "linked"}>
          <li className='link'> <a className="navLink" href="#">Business </a> </li>
            <li className='link'> <a className="navLink" href="#">Pricing</a></li>
            <li className='link' ><a className="navLink" href="#">About us<span>&#8964;</span></a>
            <div className="dropdown">
                            <a className="Link" href="#">About us</a>
                            <a className="Link" href="#">Careers on flick</a>
                            <a className="Link" href="#">Press</a>
                        </div></li>
            <li className='link'><a className="navLink"
                 href="#">Developer <span>&#8964;</span></a>
                        <div className="dropdown">
                            <a className="Link" href="#">Overview</a>
                            <a className="Link" href="#">Api Documentation</a>
                        </div>
                    </li>
          </ul>
            

                    <div id='mobile' onClick={ handleClick }>
            <i id='bar' className={state.clicked ? 'fas fa-times':'fas fa-bars'}></i>
 </div>

        </Navbar>
       

    </Container>
  )
}

export default Navbar