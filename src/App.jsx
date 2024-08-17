import React, { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
const App = () => {
  const [running, setRunning] = useState(false)

  const height = 500;
  const width = 500;

  const start = () =>{
    setRunning(true)
    navigator.getUserMedia(
      {
        video:true,
      },
      (stream)=>{
        let video = document.getElementsByClassName('video')[0];
        if(video){
          video.srcObject = stream;
        }
      },
      (err)=>console.error(err)
    )
  }
  const stop = ()=>{
    setRunning(false)
    let video = document.getElementsByClassName('video')[0];
    video.srcObject.getTracks()[0].stop();

  }
  return (
    <>
    <Nav></Nav>

    <div className='app'>
      <div className="webcam">
        <video src="" height={height} width={width} muted autoPlay className='video'>

        </video>
      </div>
      <div className="input">
        {
          running===false? ( <button onClick={start}>START</button>) : ( <button onClick={stop}>STOP</button>) 
        }
      </div>
    </div>
    </>
  )
}

export default App
