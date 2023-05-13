import React,{useState} from 'react'


export default function Body(props) {

  const handleUpclick = () =>{
    let newtext=text.toUpperCase();
    setText(newtext);
  }
  const handleLowclick = () =>{
    let newtext=text.toLowerCase();
    setText(newtext);
  }

  const handleonchange = (event) =>{
   setText(event.target.value);
  }
  const [text,setText] = useState('Enter your text here');
   
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
    <div class="mb-3" >
      <textarea className="form-control " value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
     </div>
   
       <button type="button" class="btn btn-outline-primary shadow-none mx-2" onClick={handleUpclick} >Convert to Uppercase</button>
       <button type="button" class="btn btn-outline-primary shadow-none mx-2"  onClick={handleLowclick}>Convert to Lowercase</button> 
    </div>

    <div className="container my-3"  style={{color:props.mode==='dark'?'white':'black'}}>
       <h5> Character is {text.length} and Word is {text.split(" ").length}</h5>
   </div>
   </>
  )
}
