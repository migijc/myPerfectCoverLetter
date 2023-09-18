import React from 'react';
import {Link} from 'react-router-dom'

function CreateLetterButton(){

    return <Link to={'/userform'}><button>Create a cover letter</button></Link>
}

export default CreateLetterButton