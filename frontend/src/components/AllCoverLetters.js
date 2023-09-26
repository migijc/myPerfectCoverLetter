import React, { useEffect, useState } from 'react';
import CreateLetterButton from './CreateLetterButton'

export default function AllCoverLetters({currentUser}){
    const [coverLettersList, setCoverLettersList] = useState(null)

    useEffect(()=>{
        if(window.localStorage.getItem('lastUserCreated')) {
            const currentUser = JSON.parse(window.localStorage.getItem('lastUserCreated'))
            const coverLetters = currentUser.coverLetters
            setCoverLettersList(coverLetters)
        }
    }, [])

    // const coverLetters = JSON.parse(window.localStorage.getItem('lastUserCreated')).coverLetters
    
    if(coverLettersList){
       return (
        <div style={{display:'grid', width:'100%', padding:'1rem', gap:'1rem'}}>
            <h1 className='h1-green'>My Letters</h1>
            {/* <div style={{justifySelf:'center', paddingBottom:'1rem'}}><input style={{border:'.12rem solid gray', width:'100%', borderRadius:900}} placeholder='Search'/></div> */}
            <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:'.5rem', fontSize:'.9em'}}>
                { coverLettersList.map((letter, i) => {
                    return (
                        // border:'.12rem solid rgb(177, 177, 177)'
                        <div key={i} style={{backgroundColor:'rgb(194, 194, 194)', display:'grid', gap:'.45em', padding:'.45em', borderRadius:'.35rem'}}>
                            <p style={{fontWeight:'600', textAlign:'center'}}>{letter.company}</p>
                            <p style={{fontStyle:'italic'}}>{letter.jobRole}</p>
                            <p>To {letter.hiringManager}</p>
                            <p>{letter.date || new Date().toDateString()}</p>
                        </div>
                    )
                })}
            </div>  
        </div>
        
    )  
    }
    else {
        return (
            <div style={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection:'column',
                    gap:'1rem',
                    flex:1,
                }} className='no-docs-message'>
                <p>It looks like you haven't created any documents yet.</p>
                <CreateLetterButton/>
            </div>
        )
    }
}