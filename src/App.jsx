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
    responsibilities: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque vulputate auctor. In vitae nisl nec ligula dapibus facilisis. Aliquam venenatis quam orci, vel mattis neque suscipit eget. Donec convallis congue diam, vitae ullamcorper elit porta id. Proin sed felis vel augue molestie pharetra in sed sapien. Quisque at risus lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed luctus arcu eu nulla convallis vulputate. Suspendisse faucibus congue nisl, et feugiat turpis molestie in. Morbi elementum pretium nisi, ut hendrerit felis venenatis ac. Duis mollis sit amet enim non ullamcorper. Nunc porta suscipit enim nec efficitur. Nullam in ante non leo congue laoreet in aliquam felis. Fusce id tellus quis tellus euismod gravida et sit amet eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque bibendum ut mi vitae viverra."
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
