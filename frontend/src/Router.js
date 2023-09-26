import React, { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import AllCoverLetters from "./components/AllCoverLetters";
import BlogHome from "./components/BlogHome";
import CoverLetterForm from "./components/CoverLetterForm";
import Header from "./components/Header";
import Home from "./components/Home";
import NewCoverLetter from "./components/NewCoverLetter";
import UserForm from "./components/UserForm";


function Router(props){
    const [newLetter, setNewLetter] = useState(null)
    const {currentUser, getNavigate} = props;
    const setCurrentUser = props.setCurrentUser


    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={'/'} element={<Home getNavigate={getNavigate} currentUser={currentUser}/>} />
                <Route path='/userform' element={<UserForm />} setCurrentUser={setCurrentUser} />
                <Route path="/new-cover-letter-form/:userKey" element={<CoverLetterForm currentUser={currentUser} setNewLetter={setNewLetter} />} />
                <Route path="/generated-letter" element={<NewCoverLetter data={newLetter} currentUser={currentUser}/>} />
                <Route path="/all-cover-letters" element={<AllCoverLetters currentUser={currentUser}/>} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/blog" element={<BlogHome />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Router;

