import react, {useState} from 'react'
import './index.css';



let interval;
function App() {
  
  const [second,setSecond] = useState()
  
  



    const handleStart=()=>{
      interval= setInterval(()=>{
        setSecond(prevValue => prevValue - 1)

    },1000)
    }  
  
    if(second===0){
      clearInterval(interval)
    }
  




  
  return (
    <div className='conte'>
    <div className='cont'>CountDown Timer</div>
    <h1>
      {second}
    </h1>
    
      <input 
     type="number"
     onChange={(e)=>setSecond (e.target.value)}
      placeholder='Enter Number'
      >
      </input>
      <button onClick={handleStart}>start</button>
      
    
    </div>
  
  );
}

export default App;
