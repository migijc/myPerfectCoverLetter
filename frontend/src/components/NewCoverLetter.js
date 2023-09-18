import React from "react";

function NewCoverLetter({data}){
    return(
        <div className='cover-letter-content'>{data.map((item, i)=>{
            return (
                <span key={i}>
                    <p >{item}</p>
                    <br/>
                </span>
            )
        })}</div>
    )

}

export default NewCoverLetter