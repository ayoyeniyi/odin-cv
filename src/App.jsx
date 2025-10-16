import { useState } from "react";
import UserInput from './components/UserInput';
import CV from './components/CV';
import './App.css';

function App() {
  const [genData, setGenData] = useState({
    name: "Bill Gates",
    email: "billgates@gmail.com",
    phone: "000123456"
  });

  const [eduData, setEduData] = useState({
    school: "Harvard University",
    major: "Computer Science",
    gradDate: "1974-12-13"
  });

  const [expData, setExpData] = useState({
    company: "Microsoft",
    role: "Founder",
    start: "1975-04-04",
    end: "2000-01-01",
    responsibilities: "Developed the company. Made everything look great, I guess. Did a lot more too but hey, reach out to learn more?"
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
