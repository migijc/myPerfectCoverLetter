import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateLetterButton from './CreateLetterButton';


function Home(){
    const currentUser = JSON.parse(window.localStorage.getItem('lastUserCreated'))

        if(currentUser){
        const {coverLetters} = currentUser 
        return (
            <div style={{padding:'.7rem', display:'grid', gap:'2rem'}} >
                <div className='page-header-container' style={{gap:'.3rem'}}>
                    <h1 className='h1-green'>Welcome Back,</h1>
                    <p style={{fontWeight:'500', fontSize:'1.2rem'}}>{currentUser.firstName} {currentUser.lastName} </p>
                </div>

                <div style={{display:'grid',  gap:'.7rem',}} >
                    {coverLetters.map((item, i) => {
                        return (
                            <div key={i} style={{borderColor:'transparent',alignItems:'center' ,display:'grid',gridTemplateColumns:'2fr 4fr', padding:'.8rem', borderRadius:'.35rem', background:'#e3e3e3'}}>
                                <div>
                                    <p style={{fontWeight:500}}>{item.company}</p>
                                    <p style={{fontStyle:'italic', fontSize:'.9rem'}}>{item.jobRole}</p>                               
                                </div>


                                <div className='cover-letter-actions' style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)',  alignItems:'center', gap:'.5rem'}}>
                                    <button>Introductory Message</button>
                                    <button>Follow-up Message</button>
                                </div>
                            </div>
                        
                        )
                    })}
                </div>

                <div style={{display:'grid', position:'absolute', width:'100%', left:0, bottom:'1rem', padding:'.5rem'}}>
                    <CreateLetterButton currentUser={currentUser}/>
                </div>

            </div>
        )
    }

    else return (
        <div style={{display:'grid', gap:'1rem',padding:'1rem'}}>
             <div className='page-header-container'>
                <h1 className='h1-green'>CoverCollab</h1>
            </div>

            <div>
                <WelcomeMessage/>
            </div>

            <div style={{ position:'absolute', width:'100%', left:0, bottom:'1rem', padding:'.5rem'}}>
                <CreateLetterButton/> 
            </div>
        </div>    
    )
}







const WelcomeMessage = () => {
    return(
        <p style={{fontWeight:300}}>
        Welcome to CoverCollab,
        Here, we recognize the transformative power of AI in various facets of the job search process. However,
        it's crucial to dispel the misconception that AI has rendered cover letters obsolete. These letters are not just conveyors of information;
            they present an exclusive opportunity for job seekers to unveil their personality, enthusiasm, and the unique value they bring to prospective employers.
            While AI excels in formatting and content generation, it can't infuse the human touch and individuality that a meticulously crafted cover letter provides.
            Employers continue to value well-written cover letters as they gauge an applicant's communication skills, attention to detail,
            and alignment with their company's culture and values.<br/><br/> At CoverCollab,
                our AI-powered cover letter generator complements this human element by simplifying the process.
                It empowers you to focus on what truly matters - crafting a compelling narrative that sets you apart from the competition.
                Join the ranks of successful job seekers who trust CoverCollab to enhance their career prospects and embark on the journey towards a brighter professional future today!
        </p>
    )
    
}

export default Home