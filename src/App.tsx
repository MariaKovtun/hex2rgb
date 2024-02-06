import { useState } from 'react'
import './App.css'
import HexInput from './components/HexInput';

type RGB = {
  r: number,
  g: number,
  b: number
}

function App() {
  const [background, setBackground] = useState<RGB | null>({r:255,g:255,b:255});

  const onBackgroundChange = (nextValue: RGB | null) => {
    setBackground(nextValue);
  }

  document.body.style.backgroundColor = 'rgb(' + [background?.r,background?.g,background?.b].join(',') + ')';
  
  return (
    <>
    <HexInput onChange={onBackgroundChange}></HexInput>
    <h4>{background ?  'rgb(' + [background?.r,background?.g,background?.b].join(',') + ')' : "Error"}</h4>
    </>
  )
}

export default App
