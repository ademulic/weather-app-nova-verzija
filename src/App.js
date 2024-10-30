import { useState } from "react";

 
function App() {
  let [temperature, setTemperature]= useState(0);
  const [feeling, setFeeling] = useState('');
  const [background, setBackground] = useState('orange');
  const [fontColor, setFontColor] = useState('white');

  const RandomNumber = (min, max) => Math.ceil(Math.random() * (max - min) + min);
  

  const showWeather=()=>{ 
    temperature = RandomNumber(-100,40)
    setTemperature(temperature);

    if(temperature<-4 ){ 
      setFeeling("brrr, it's freezing!!!");
      setBackground('lightblue');
      setFontColor('slateblue');
    }
    else if(temperature>22){ 
      setFeeling("It's really warm");
      setBackground('red');
      setFontColor('yellow'); 
    } else{
      setFeeling('');
      setBackground('orange');
      setFontColor('white');
    } 
  }

  
  return (
    <div className="App">
      <div style={{ 
        backgroundColor:background,
        color:fontColor
      }}>
        <h1>{temperature}</h1>
        <p>{feeling}</p>
        <button onClick={showWeather}>Change Temperature</button>
      </div>
    </div>
  );
}

export default App;
