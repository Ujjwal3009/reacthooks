
import { useReducer } from 'react';
import './App.css';


const initialState = {
  message:"hi"
}

function reducer(state,action){
  switch(action.type){
    case "YELL":
      return {
        message:`hello `
      };
    case "WHISPER":
      return{
        message:`excuse me `
      };
  }
}

function App() {
 


 const [state,dispatch] = useReducer(reducer,initialState);
  return (

    <div className="App">
      <h1 >message :{state.message}</h1>
      <button onClick={()=>dispatch({type:"YELL"})}>Yell</button>
      <button onClick={()=>dispatch({type:"WHISPER"})}>Whisper</button>
 
    </div>
  );
}

export default App;
