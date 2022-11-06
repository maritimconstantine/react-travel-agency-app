import React from 'react'
import styled from 'styled-components';

function Hero() {
  return (
    <Section id='hero'>
    <div className='background' alt=''>
      <img src={"../images/hero.JPG"} alt='' className='myback'/>
    </div>
    <div className='content'>
      <div className='info'>
        <h1>EXPLORE NOW</h1>
        <p>Travel around kenya with the lowest prices</p>
      <div className='search'>
         <div className='container'>
         <label htmlFor=''>Where you want to go</label>
         <input type='text' placeholder='search for your location'/>
         </div>
         <div className='container'>
         <label htmlFor=''>Check-In</label>
         <input type='date'/>
         </div>
         <div className='container'>
         <label htmlFor=''>Check-Out</label>
         <input type='date'/>
         </div>
         <div className='container'>
         <button>Explore More</button>
         </div>
        </div>
      </div>
    </div>

    </Section>
  )
}

export default Hero;
const Section=styled.section`
position:relative;
margin-top:2rem;
width:100%;
height:100%;
.background{
 margin:30px;
  height:100%;
  
  img{
    width:100%;
    filter:brighthness(60%);
    border-radius:30px;
  }
}
.content{
  height:100%;
  width:100%;
  position:absolute;
  top:0;
  z-index:3;
  text-align:center;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:1rem;
  .info{
    justify-content:space-around;
    color:black;
    h1{
      font-size:3rem;
      letter-spacing:0.2rem;
      color:purple;
      
      }
      p{
        text-align:center;
        padding:0 30vw;
        margin-top:0.5rem;
        font-size:1.2rem;
    }
  }
  .search{
 justify-content:space-around;
    width:90%;
display:flex;
background-color:#ffffffce;
padding:0.5rem;
border-radius:0.5rem;
.container{
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

label{
 font-size:1.1 rem;
 color:#03045e; 
}
input{
  back-ground-color:transparent;
  border:none;
  text-align:center;
  color:black;
  &[type="date"]{
    padding-left:3rem;
  }
  &::placeholder{
    color:black;
  }
  &:focus{
    outline:none;
  }
}
}
button{
 padding:1rem; 
 border-radius:10px;
 cursor:pointer;
 border:none;
 color:white;
 background-color:#4361ee;
 font-size:1.1rem;
 text-transform:uppercase;
 transition:0.3s ease-in-out;
 &:hover{
  background-color:#023e8a;
  
 }
}
  }
}`;
