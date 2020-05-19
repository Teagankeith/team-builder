import React from 'react';
import {useState} from "react"
import { v4 as uuid } from 'uuid'
import './App.css';

import MemebersForm from "./components/Form";
import Person from "./components/Person"

const initialTeamMemebers = [
  {
    id: uuid(),
    name: "Tom",
    email: "tom@tom.com",
    role: "Web Developer",
  }
]



const initialFormValues = {
  name: '',
  email: '',
  role: '',
}




function App() {
  //State of current team memebers
  const [teamMembers, setTeamMembers] = useState(initialTeamMemebers)
  // Setting state for form values
  const [formValues, setFormValues] = useState(initialFormValues)
  

  const onInputChange = evt => {
    const {name} = evt.target

    const {value} = evt.target

    setFormValues({...formValues, [name]: value})
  }
  
  
  const onSubmit = evt => {
    evt.preventDefault();

    if (
      !formValues.name.trim() ||
      !formValues.email.trim() ||
      !formValues.role.trim()
    ) {
      return
    }
    
    const newMemeber = { ... formValues, id: uuid() }

    setTeamMembers([newMemeber, ...teamMembers])
    setFormValues(initialFormValues)
  }





  return (
    <div className="App">
      <header><h1>Team Memebers</h1></header>
      <MemebersForm
      values={formValues}
      onInputChange={onInputChange}
      onSubmit={onSubmit}
      />


    {
      teamMembers.map(memebers => {
      return (
      <Person key={memebers.id} info={memebers} />
  )
})  
    }



    </div>
  );
}



export default App;