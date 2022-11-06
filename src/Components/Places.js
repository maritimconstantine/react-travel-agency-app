import React from 'react'
import styled from 'styled-components'

function Places() {
  return (
    <>
    <Section>
    <div className='places'>
      <div className='container'>
        <h1>All- Inclusive Resorts</h1>
        <p>On kenyan Best Cities </p>
        <div className='image-container'>
          <img src={"../images/back.JPG"}  alt='' id="first"/>
         
          <img src={"../images/amboseli.PNG"}  alt=''/>
          <img src={"../images/nak.PNG"}  alt=''/>
          <img src={"../images/nai.PNG"}  alt=''/>
          
          
          <img src={"../images/mara.PNG"}  alt=''/>
          <img src={"../images/mom.PNG"}  alt=''/>
          <img src={"../images/kis.PNG"}  alt=''/>
          
          </div>

      </div>
    </div>
    </Section>
    </>
  )
}

export default Places;
const Section=styled.section`
.places{
  width:100%;
  text-align:center;
  padding:4rem 0;

  .image-container{
    display:grid;
    grid-template-columns:repeat(6,1fr);
    margin :auto;
    padding:1 rem 0;
    margin-right:0;
    margin-left:0;
    gap:1 rem;
    
   
    img{
      object-fit:cover;
      width:100%;
      height:100%;
      padding:2px;
      transition:0.3s ease-in-out;
      &:hover{
          transform:translateX(0.4rem) translateY(-1rem);
          opacity:1;
          
      }
    
    }
  }
  
}
#first{
grid-column:span 3;
}
#first{
  grid-row:span 2;
}
`
;