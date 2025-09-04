import UserInput from './components/UserInput';
import CV from './components/CV';
import './App.css';

function App() {
  
  return (
    <>
    <div className='user-input'>
      <UserInput></UserInput>
    </div>
    <div className='cv-container'>
      <CV></CV>
    </div>
    </>
  )
}

export default App
