import React from 'react';
import {Link} from 'react-router-dom'

function CreateLetterButton({currentUser}){
    
    if(currentUser){
        const {userKey} = currentUser
        return <Link to={`/new-cover-letter-form/:${userKey}`}><button>Get Started</button></Link>
    }
    else return <Link to={'/userform'}><button >Get Started</button></Link>
}

export default CreateLetterButton