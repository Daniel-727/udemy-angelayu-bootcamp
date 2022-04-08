import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleContact(e){
    const {name, value} = e.target; //there are name and value properties in the e.target object that I want to destructure

    if (name === 'fName'){
      setContact(contact => {
        return{
          fName: value,
          lName: contact.lName,
          email: contact.email
        }
      });
    } else if (name ==='lName'){
      setContact(contact => {
        return{
          fName: contact.fName,
          lName: value,
          email: contact.email
        }
      });
    } else if (name === 'email'){
      setContact(contact => {
        return{
          fName: contact.fName,
          lName: contact.lName,
          email: value
        }
      });
    }
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={handleContact} name="fName" placeholder="First Name" />
        <input onChange={handleContact} name="lName" placeholder="Last Name" />
        <input onChange={handleContact} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
