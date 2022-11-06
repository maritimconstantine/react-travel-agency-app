import React from 'react'
import styled from 'styled-components'

function Services() {
    const data = [
        {
            image:"./images/c1.JPG",
            title:"Get rewards",
            subtitle:"Get amazing rewards when you pay through our application",
            
        },
        {
            image:"./images/c3.JPG",
            title:"flexible payment",
            subtitle:"enjoy flexible payment through our app any time and everywhere",
            
        },
        {
            image:"./images/c4.JPG",
            title:"travel tours",
            subtitle:"Tour the best hotels and places in kenya",
            
        },
    
    
    ];
  return (
   <Section id="services">
    {
        data.map((service)=>{
            return(
                <div className='service'>
                    <div className='imageicon'>
                        <img src={service.image}/>
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.subtitle}</p>
            </div>
            )
        })
    }
   </Section>

    
  )
  
}

export default Services
const Section=styled.section`
padding:5rem 0;
display:grid;
grid-template-columns:repeat(3,1fr);
gap:1 rem;
.service{
    display:flex;
    flex-direction:column;
    gap:1rem;
    padding:2rem;
    background-color:aliceblue;
    box-shadow:rgba(100,100,111,0.2) 0px 7px 29px 0px;
    transition:0.3s ease-in-out;
    &:hover{
        transform:translateX(0.4rem) translateY(-1rem);
        box-shadow:rgba(0,0,0,0.35) 0px 5px 15px 0px;
    }
}`;

    
 

