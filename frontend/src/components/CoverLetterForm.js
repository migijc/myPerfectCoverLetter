import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from 'react-router-dom';

function CoverLetterForm(props){
    const [company , setCompany] =useState('')
    const [jobRole, setJobRole] =useState('')
    const [skills, setSkills] = useState('')
    const [hiringManager, setHiringManager] = useState('')
    const [additionalInfo, setAdditionalInfo] = useState('')
    const [companyAddress, setCompanyAddress] = useState('')
    const [employerDetails, setEmployerDetails] = useState(null)
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [showLoader, setShowLoader] = useState(false)

    const navigate = useNavigate()
    const params = useParams()
    let userKey = params.userKey;
    userKey=userKey.slice(1)
    const currentUser = JSON.parse(window.localStorage.getItem(userKey))
    const {firstName, lastName} = currentUser

    async function handleSubmit(){
        setButtonDisabled(true)
        setShowLoader(true)
        let payload={firstName, lastName, jobRole, company ,skills, hiringManager, additionalInfo}
        const coverLetterData = {jobRole, company, skills, hiringManager, additionalInfo}
        let result = await fetch('https://covercollabserver.fly.dev/coverletter', {
            method:'POST',
            body:JSON.stringify(payload) ,
            headers:{"Content-Type":'application/json'}
        })
        result = await result.json()
        const content = result.coverLetter
        const paragraphs = content.split('\n\n')
        props.setNewLetter(paragraphs)
        coverLetterData.paragraphs = paragraphs
        let user = JSON.parse(window.localStorage.getItem(userKey))
        user['coverLetters'].push(coverLetterData)
        window.localStorage.setItem(userKey, JSON.stringify(user))
        window.localStorage.setItem('lastUserCreated', JSON.stringify(user))
        setEmployerDetails(coverLetterData)
    }

    useEffect(()=>{
        if(employerDetails){
            navigate('/generated-letter')
        }
    }, [employerDetails])


    if(!showLoader){
        return (
            <form className="cover-letter-form">
                <div className='form-header-container'>
                    <h1 className="h1-green">Step 2</h1>
                    <p style={{textAlign:'center'}}>Congratulations on taking the next steps towards finding a new career! Please provide the following details to help us create the best possible cover letter for you</p>
                </div>
    
                <div style={{display:'grid', gap:'.3rem'}}>
                    <input value={jobRole} onChange={(e)=>setJobRole(e.target.value)} placeholder='Job Role/Title' name='jobRole'/>
                    <input onChange={(e)=>setHiringManager(e.target.value)} value={hiringManager} placeholder='Hiring Manager Name' name='hiringManager'/>
                    <input value={company} onChange={(e)=>setCompany(e.target.value)} placeholder='Company' name='company'/>
                    <input value={companyAddress} onChange={(e)=>setCompanyAddress(e.target.value)} placeholder='Company Address' name="companyAddress"/>
                    <textarea onChange={(e)=>setSkills(e.target.value)} placeholder='Skills, seperated using a comma' value={skills} name='skills'></textarea>
                    <textarea onChange={(e)=>setAdditionalInfo(e.target.value)} placeholder='Additional Information' value={additionalInfo} name='additionalInfo'></textarea>
                </div>
    
                <div className="form-button-container">
                    <button disabled={buttonDisabled} className="form-button" onClick={handleSubmit} type={'button'}>Create</button>
                </div>
        </form>
        )
    }

    else {
        return (
            <div style={{height:'100%', justifyContent:'center', alignItems:'center', display:'flex', flexDirection:'column', gap:'1rem'}}>
                <span class="loader"></span>
                <p>We are creating your letter.<br/> This can take up to a minute</p>
            </div>
        )
    }



}

export default CoverLetterForm