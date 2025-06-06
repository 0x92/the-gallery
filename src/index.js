import React, { useState, useEffect } from "react"
import ReactDOM from 'react-dom';
import './style/css/index.css';
import App from './components/App/App';
import Minimap from './components/Minimap/Minimap';
import { PlayerStateProvider } from './components/PlayerStateContext';
import reportWebVitals from './reportWebVitals';
import Loading from './components/Loading/Loading';

const Overlay = () => {
  const [ready, setReady] = useState(false)
  const [soundscape, setSoundscape] = useState(true)
  const [dust, setDust] = useState(true)
  const [postProcessing, setPostProcessing] = useState(true)

  useEffect(() => {
    const handleLockchange = (e) => {
      if(document.pointerLockElement === null) {
          setReady(false)        
      } else {
          setReady(true)
      }
    }
    
    document.addEventListener("pointerlockchange", handleLockchange);
    return () => {
      document.removeEventListener("pointerlockchange", handleLockchange)
    }
  })  

  return (
    <PlayerStateProvider>
      <App
        soundscape={soundscape}
        dust={dust}
        postProcessing={postProcessing}
      />
      <Minimap />
      <div className={`overlay ${ready ? 'transparent' : 'not-ready'}`}>
        {!ready && <div className="start">Click to Explore</div>}
        <div className="title">LUX ET ARS - GALLERY</div>
        <div className="controls-box">
          <p>Move: WASD &nbsp; Jump: SPACE &nbsp; Run: SHIFT</p>
          <p>Night Mode: N &nbsp; Toggle Performance: P &nbsp; Fullscreen: F</p>
        </div>
      </div>
      <div className="options-box">
        <label>
          <input
            type="checkbox"
            checked={soundscape}
            onChange={(e) => setSoundscape(e.target.checked)}
          />
          Soundscape
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={dust}
            onChange={(e) => setDust(e.target.checked)}
          />
          Dust
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={postProcessing}
            onChange={(e) => setPostProcessing(e.target.checked)}
          />
          Post&nbsp;FX
        </label>
      </div>
      <div className="dot"
      style={{ pointerEvents: ready ? "none" : "all" }}
      />
      <Loading />
    </PlayerStateProvider>
  )
}

ReactDOM.render(<Overlay />, document.getElementById("root"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
