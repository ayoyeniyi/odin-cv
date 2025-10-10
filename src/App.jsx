import { useState } from "react";
import UserInput from './components/UserInput';
import CV from './components/CV';
import './App.css';

function App() {
  const [userData, setUserData] = useState({
    general: {
      name: "",
      email: "",
      phone: ""
    },

    education: {
      school: "",
      major: "",
      gradDate: ""
    },

    experience: {
      company: "",
      role: "",
      start: "",
      end: "",
      responsibilities: ""
    }
  });

  return (
    <>
    <div className='user-input'>
      <UserInput data={userData} setData={setUserData}></UserInput>
    </div>
    <div className='cv-container'>
      <CV data={userData}></CV>
    </div>
    </>
  )
}

export default App
