import React, { useState, useEffect } from "react";


function App() {
  const [currentUser, setCurrentUser] = useState(null);



  //getLocalStorage Object
  const localStorage = window.localStorage



  useEffect(()=>{
    function initiateLocalUsers(){
      let lastCreated= {};
      lastCreated = JSON.stringify(lastCreated)
      localStorage.setItem('lastUserCreated', lastCreated)
  }
    let localStorage = window.localStorage
    if(localStorage.length === 0) {
      return initiateLocalUsers()
    }
    else {
      let lastCreatedUser = localStorage['lastUserCreated']
      lastCreatedUser = JSON.parse(lastCreatedUser)
      let lastUser = Object.keys(lastCreatedUser)
      if(lastUser.length === 0) {
        return
      }
      else{
        setCurrentUser(lastCreatedUser)
      }
    }
  }, [])

  return (
    <div className="App">
      {null}
    </div>
  );
};


export default App;
