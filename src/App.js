
import { useReducer } from 'react';
import './App.css';


function App() {
 const [checked,setChecked] = useReducer((checked)=> !checked , false);
  return (

    <div className="App">
       <input
       type="checkbox"
       value={checked}
       onChange={setChecked}

       />
       {checked?"checked":"not checked"}
    </div>
  );
}

export default App;
