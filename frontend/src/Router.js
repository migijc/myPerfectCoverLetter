import React, { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./components/App";
import NewCoverLetter from "./components/NewCoverLetter";
import UserForm from "./components/UserForm";

function Router(){
    const [newLetter, setNewLetter] = useState(null)
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<App/>}/>
                <Route path='userform' element={<UserForm setNewLetter={setNewLetter}/>}/>
                <Route path="/generated-letter" element={<NewCoverLetter data={newLetter}/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;

