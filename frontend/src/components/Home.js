import React from 'react';
import CreateLetterButton from './CreateLetterButton';

function Home(){
    return (
        <WelcomMessage/>
    )
}

const WelcomMessage =()=>{
    return (
        <div>
            <p>Welcome to [Your Website Name] - Your Ultimate Cover Letter Companion! <br/>
                <br/>
                At [Your Website Name], we understand that a well-crafted cover letter can make all the difference in landing your dream job.
                Whether you're a seasoned professional or just starting your career journey, we're here to simplify the process and help you stand out from the crowd.<br/>
                <br/>
                Our data-driven approach, powered by cutting-edge technology, ensures that your cover letter is tailored to perfection.
                Say goodbye to the stress of writing cover letters from scratch. With [Your Website Name], you can create personalized, attention-grabbing cover letters effortlessly.<br/>
                Why choose us?<br/>
                <br/>
                Join thousands of successful job seekers who have trusted [Your Website Name] to boost their career prospects. Start your journey toward a brighter future today!<br/>
                <br/>
                    Get started now and let your dream job become a reality.
             </p>
             
            <CreateLetterButton/> 
        </div>

    )
} 

export default Home