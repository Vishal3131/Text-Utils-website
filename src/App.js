//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Alert from './components/Alert';
import React,{useState} from 'react';

function App() {
  const [mode,setmode] = useState('light'); 

   const darkmode = ()=>{
    if(mode=== 'light'){
    setmode('dark')
    document.body.style.backgroundColor = 'black';
  }
  else{
        setmode('light')
        document.body.style.backgroundColor = 'white';
  }
  }
  return (
    <>
   <Navbar  title="TextUtils" about="About us" mode={mode} darkmode={darkmode} />

   <Alert alert="This is a Text Utils website"/>

   <div className='container my-3'>
    <Body heading="Enter the text to analyze" mode={mode} />
   </div>
    
    </>
  );
}

export default App;

