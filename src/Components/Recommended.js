import React, { useState } from 'react'
import styled from 'styled-components';

function Recommended() {
    const data=[
        {
            image:"../images/nak.PNG",
            title:"Nakuru city",
            subtitle:"Nakuru city is known for flamingoes and wild animals.it is located in the heart of largest valley in the world.",
            cost:"30000",
            duration:"3 night trip",
        }, 
        {
            image:"../images/nai.PNG",
            title:"Nairobi city",
            subtitle:"Nairobi is kenyan capital and is the largest city in east and central africa.",
            cost:"50000",
            duration:"3 night trip",
        }, 
        {
            image:"../images/mom.PNG",
            title:"Mombasa city",
            subtitle:"Mombasa  is KENYAN coastal city .The city houses east africas largest port of mombasa.",
            cost:"58000",
            duration:"4 night trip",
        },  
        {
            image:"../images/mara.PNG",
            title:"Maasai Mara",
            subtitle:"Maasai mara is one of the world's famous national park,the park is located in southern part of riftvalley.",
            cost:"30000",
            duration:"3 night trip",
        }, 
        {
            image:"../images/amboseli.PNG",
            title:"Amboseli",
            subtitle:"Amboseli is kenyans national park located in nortern part of kenya.",
            cost:"50000",
            duration:"4 night trip",
        }, 
        {
            image:"../images/kis.PNG",
            title:"Mombasa city",
            subtitle:"Kisumu city is western kenyan city with the largest lake in east africa.",
            cost:"58000",
            duration:"4 night trip",
        },               
    ];
    const packages=[
        "The Weekend Break",
        "The Package Holiday",
        "The Group Tour",
        "The Long term Tour",
    ];
    const [active,setActive]=useState(1);
  return (
    <Section id="recommended">
        <div className='title'>
            <h3>Recommennded Places In Kenya</h3>
        </div>
        <div className='packages'>
            <ul>
                {
                    packages.map((item,index)=>{
                        return(
                            <li className={active===index+1?"active" :""} 
                            onClick={()=>setActive(index+1)}>
                                {item}
                                </li>
                        )
                    })
                }
            </ul>
        </div>
        <div className='places'>
            {
                data.map((place)=>{
                    return(
                        <div className='place'>
                          <img src={place.image}alt=""/>
                          <h3>
                            {place.title}
                          </h3>
                          <p>{place.subtitle}</p>
                          <h4> cost ksh {place.cost}</h4>
                          <p>{place.duration}</p>
                        </div>
                    )
                })
            }
        </div>
    </Section>
  )
}

export default Recommended
const Section=styled.section`
padding:2rem 0;
.title{
    text-align:center;
}
.packages{
    display:flex;
    justify-content:center;
    margin:2rem 0;
    ul{
        display:flex;
        list-style-type:none;
        width:max-content;
       li{
        padding:1rem 2rem;
        border-bottom:0.1rem solid black;
       }
       .active{
        border-bottom:0.5rem solid #8338ec;
       }
    }
}
.places{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:3rem;
    padding:0 3rem;
    .place{
        display:flex;
        flex-direction:column;
        gap:0.5rem;
        background-color:#8338ec14;
        border-radius:1rem;
        transition:0.3s ease-in-out;
        &:hover{
            transform:translateX(0.4rem)translateY(-1rem);
            box-shadow:rgba(0,0,0,0.35) 0px 5px 15px 0px;
        }
        img{
            width:100%;
            border-radius:1rem;
        }
    }
}
`;
