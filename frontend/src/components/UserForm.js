import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {User} from '../helperFunctions/UserClass'


function UserForm(props){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] =useState('')
    const [email , setEmail] =useState('')
    const [phoneNumber, setPhoneNumber] =useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')

    // const {setCurrentUser} = props;
    const navigate = useNavigate()

    const getUserData = () => {
        return {firstName, lastName, email, phoneNumber, city, state, country, coverLetters: [], userKey:'',}
    }

    const getStringifiedData = () => JSON.stringify(getUserData())

    const handleSubmit = () =>{
        const timestamp = new Date().getTime();
        const user = new User(firstName, lastName, email, phoneNumber)
        console.log(user)
        const newUserKey = `user-${timestamp}`;
        const dataStringified = getStringifiedData();
        window.localStorage.setItem(newUserKey, dataStringified);
        window.localStorage.setItem('lastUserCreated', getStringifiedData())
        let userKey =JSON.parse(window.localStorage.getItem(newUserKey))
        userKey.userKey = newUserKey
        window.localStorage.setItem(newUserKey, JSON.stringify(userKey))
        window.localStorage.setItem('lastUserCreated', JSON.stringify(userKey))
        navigate(`/new-cover-letter-form/:${newUserKey}`)
    };

    return(
        <form autoComplete='off'>
            <div className='form-header-container'>
                <h1 className="h1-green">Step 1</h1>
                <p style={{textAlign:'center'}}>At CoverCollab, your data stays yours. We don't save your input on our servers or databases.
                    Instead, it's securely stored right here in your browser's localStorage. Enjoy privacy and control while using our services.</p>
            </div>

            <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', alignItems:'center', columnGap:'.8rem'}}>
                <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} required placeholder='First Name'/>
                <input value={lastName} onChange={(e)=>setLastName(e.target.value)} required placeholder='Last Name'/>
                <input value={email} style={{gridColumnEnd:'-1', gridColumnStart:1}} onChange={(e)=>setEmail(e.target.value)} required placeholder='Email'/>
                <input value={phoneNumber} style={{gridColumnEnd:'-1', gridColumnStart:1}} onChange={(e)=>setPhoneNumber(e.target.value)} required placeholder='Phone Number'/>
                <input value={city} onChange={(e)=>setCity(e.target.value)} required placeholder='City'/>
                <input value={state} onChange={(e)=>setState(e.target.value)} placeholder='State'/>
                <input placeholder='Postal Code'/>
                <input value={country} onChange={(e)=>setCountry(e.target.value)} required placeholder='Country'/>
            </div>

   

            <div className='form-button-container'>
                <button className='form-button' type='button' onClick={handleSubmit}>Save</button>
            </div>
        </form>
    )
   
}

export default UserForm