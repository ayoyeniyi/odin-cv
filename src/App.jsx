import { useState } from "react";
import UserInput from './components/UserInput';
import CV from './components/CV';
import './App.css';

function App() {
  const [genData, setGenData] = useState({
      name: "",
      email: "",
      phone: ""
  });

  const [eduData, setEduData] = useState({
    school: "",
    major: "",
    gradDate: ""
  });

  const [expData, setExpData] = useState({
    company: "",
      role: "",
      start: "",
      end: "",
      responsibilities: ""
  });

  return (
    <>
    <div className='user-input'>
      <UserInput 
        general={genData}
        setGeneral={setGenData}
        education={eduData}
        setEducation={setEduData}
        experience={expData}
        setExperience={setExpData}
      />
    </div>
    <div className='cv-container'>
      <CV 
        general={genData}
        education={eduData}
        experience={expData}
      />
    </div>
    </>
  )
}

export default App
