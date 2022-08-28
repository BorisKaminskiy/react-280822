import { useState } from 'react'
import '../App.css'

function componentToHex(arg) {
  let tempInt = Number(arg).toString(16)
  return tempInt.length === 1 ? '0' + tempInt : tempInt
}

function ColorChooser() {
  const [currentR, setR] = useState(120)
  const [currentG, setG] = useState(160)
  const [currentB, setB] = useState(100)
  let rgba = `rgba(${currentR}, ${currentG}, ${currentB}, 1)`
  let hex = `#${(
    componentToHex(currentR) +
    componentToHex(currentG) +
    componentToHex(currentB)
  ).toUpperCase()}`

  return (
    <div className="color-chooser">
      <h2>Color chooser</h2>
      <label htmlFor="choose-r" className="form-label">
        <b>R</b>
      </label>

      <div className="range-container">
        <input
          type="range"
          className="form-range"
          id="choose-r"
          min={0}
          max={255}
          value={currentR}
          onChange={(event) => {
            setR(event.target.value)
          }}
        />
        <span>{currentR}</span>
      </div>
      <label htmlFor="choose-g" className="form-label">
        <b>G</b>
      </label>

      <div className="range-container">
        <input
          type="range"
          className="form-range"
          id="choose-g"
          min={0}
          max={255}
          value={currentG}
          onChange={(event) => {
            setG(event.target.value)
          }}
        />
        <span>{currentG}</span>
      </div>
      <label htmlFor="choose-b" className="form-label">
        <b>B</b>
      </label>

      <div className="range-container">
        <input
          type="range"
          className="form-range"
          id="choose-b"
          min={0}
          max={255}
          value={currentB}
          onChange={(event) => {
            setB(event.target.value)
          }}
        />
        <span>{currentB}</span>
      </div>
      <div className="color-chooser-info">
        <div
          className="color-window"
          style={{ backgroundColor: `${hex}` }}
        ></div>
        <div className="dec-info">
          <span>Dec: </span>
          <button type="button" className="btn btn-dark btn-sm">
            {rgba}
          </button>
        </div>
        <div className="hex-info">
          <span>Hex: </span>
          <button type="button" className="btn btn-dark btn-sm">
            {hex}
          </button>
        </div>
      </div>
    </div>
  )
}

export { ColorChooser }
