import React from 'react'
import styled from 'styled-components'
function Header() {
  return (
    <>
   <Nav>
<div className='brand'>
    <div className='container'>
         <div><img src={"../images/logo.JPG"}  alt=''/></div>
         <div><p>TWENDEVASHA </p></div>
    </div>
         <div className='toggle'></div>
</div>
   <ul>
    <li><p >Home</p></li>
    <li><p>Service</p></li>
    <li><p>Places</p></li>
    <li><p>Testimonials</p></li>
   </ul>
   <button>Connect</button>
   </Nav>
    </>
  )
}

export default Header
const Nav=styled.nav`
display:flex;
justify-content:space-between;
align-items:center;
.brand{
    .container{
        cursor:pointer;
        display:flex;
        justify-content:center;
        align-items:center;
        gap:0.4rem;
        font-size:1.2rem;
        font-weight:900;
        text-transform:uppercase;
        font-style:italic;  
    }
    .toggle{
        display:none;
    }
}
ul{
    display:flex;
    list-style-type:none;
    gap:1rem;
    cursor:pointer;
    li{
        p{
            text-decoration:none;
            color:#0077b6;
            font-size:1.2rem;
            transition:0.2s ease-in-out;
            &:hover{
                color:black;
            }
        }
        &:first-of-type{
           p {
            color:#023e8a;
            font-weight:900;
            }
        }
    }

}
button{
    cursor:pointer;
    padding:0.5rem;
    border-radius:1rem;
    border:none;
    color:#0077b6;
   
    text-transform:uppercase;
    font-size:1.1rem;
    letter-spacing:0.1rem;
    trnsition:0.3s ease-in-out;
    &:hover{
        background-color:#023e8a;
    }
}
`
;