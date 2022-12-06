import { useRef } from 'react';
import './App.css';



function App() {

  const sound = useRef();
  const color = useRef();


 function submit(e){
    e.preventDefault();
    const soundVal = sound.current.value;
    const colorValue = color.current.value;
    
    alert(`${soundVal} sounds like ${colorValue}`);
    sound.current.value ="";
    color.current.value = "";
 }


  return (

    <div className="App">
     <form onSubmit={submit}>
      <input ref={sound} type="input"/>
      <input ref={color} type="color"/>
      <button>ADD</button>
     </form>
 
    </div>
  );
}

export default App;
