import React from 'react'
import styled from 'styled-components'


import Logo from '../../assets/flick_logo.svg'

const Navbar = () => {
    const Container=styled.div`
    display:flex;
    justify-content:space-between;
    background:#fff;
    padding: 30px 106px;
    font-size: 16px;
    font-family: 'Circular Std', sans-serif;
    font-weight: 450;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,.1);
    height: 3rem;
    line-height: 60px;
    `
    const Navbar=styled.div`
    display:inline-flex;
    justify-content:space-between;
    align-item:center;
    height:50%;
  .link {
    list-style: none;
   
    inline-height:10px;
  
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

    // .navLink a::before{
    //     content:"";
    //     position: absolute;
    //    left: 0;
    //    bottom: -9px;
    //    width: 0;
    //     height: 2px;
    //     background-color: darkcyan;
    //     transition: width 0.5s ease-in-out;
    //     color:red;
    // }

    // .navLink a:hover::before {
    //     width: 100%;
    // }

    `
  return (
    <Container>
<img src={Logo} alt="Logo" />
        <Navbar>
            <li className='link'> <a className="navLink" href="#">Business </a> </li>
            <li className='link'><a className="navLink" href="#">Pricing</a></li>
            <li className='link'><a className="navLink" href="#">About us<span>&#8964;</span></a>
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

        </Navbar>
       

    </Container>
  )
}

export default Navbar