import React from 'react'

const Comments = () => {

     const commt = ["Good project" , "Excellent", "UI is good"]

  return (
    <>
    <div>Comments</div>
    {
        commt.map((c,i)=> (
            <div key={i}>
             <span class="badge text-bg-warning">{c}</span> 
            </div>
        ))
    }
   </>
  )
}

export default Comments