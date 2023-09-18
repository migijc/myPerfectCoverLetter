import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'

function UserForm(props){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] =useState('')
    const [company , setCompany] =useState('')
    const [jobRole, setJobRole] =useState('')
    const [skills, setSkills] = useState('')
    const [hiringManager, setHiringManager] = useState('')
    const [additionalInfo, setAdditionalInfo] = useState('')
    const [coverLetter, setCoverLetter] = useState(null)

    const navigate = useNavigate()

    async function handleSubmit(){
        let paragraphsList = [];
        let payload={firstName, lastName, jobRole, company ,skills, hiringManager, additionalInfo}
        let result = await fetch('http://localhost:3000/coverletter', {
            method:'POST',
            body:JSON.stringify(payload) ,
            headers:{"Content-Type":'application/json'}
        })
        result = await result.json()
        const content = result.coverLetter
        const paragraphs = content.split('\n\n')
        props.setNewLetter(paragraphs)
        setCoverLetter(paragraphs)
    }

    useEffect(()=>{
        if(coverLetter) {
            navigate('/generated-letter')
        }
    }, [coverLetter])

    return (
         <form className='user-form'>
            <div>
                <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder='First Name' name='firstName'/>
                <input value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder='Last Name' name='lastName'/>
            </div>

            <div>
                <input value={company} onChange={(e)=>setCompany(e.target.value)} placeholder='Company' name='company'/>
                <input value={jobRole} onChange={(e)=>setJobRole(e.target.value)} placeholder='Job Role/Title' name='jobRole'/>
            </div>

            <div>
                <textarea onChange={(e)=>setSkills(e.target.value)} placeholder='Skills (seperate each skill with a comma ---> Skill1, Skill2)' value={skills} name='skills'></textarea>
            </div>

            <div>
                <input onChange={(e)=>setHiringManager(e.target.value)} value={hiringManager} placeholder='Hiring Manager Name' name='hiringManager'/>
            </div>

            <div>
                <textarea onChange={(e)=>setAdditionalInfo(e.target.value)} placeholder='Additional Information' value={additionalInfo} name='additionalInfo'></textarea>
            </div>

            <button onClick={handleSubmit} type={'button'}>Create</button>
        </form>
    )
}

export default UserForm