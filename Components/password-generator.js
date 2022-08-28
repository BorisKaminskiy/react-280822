import { useState } from 'react'
import '../App.css'

function PasswordGenerator() {
  const numbersValues = '0123456789'
  const letterLowerCase = 'abcdefghijklmnopqrstuvwxyz'
  const letterUpperCase = letterLowerCase.toUpperCase()
  const symbols = '!№;%:?*()_+=-'

  const [currentLength, setLength] = useState(8)
  const [currentLower, setLower] = useState(false)
  const [currentUpper, setUpper] = useState(false)
  const [currentSymbol, setSymbol] = useState(false)
  const [currentPassword, setPasword] = useState('')

  return (
    <div className="container">
      <h2>Generate a secure password</h2>
      <input
        className="password-window"
        readOnly
        value={`${currentPassword}`}
      ></input>

      <div className="set-inputs">
        <div className="range-container">
          <label htmlFor="choose-length" className="form-label">
            Length
          </label>

          <input
            type="range"
            className="form-range"
            id="choose-length"
            min={6}
            max={12}
            value={currentLength}
            onChange={(event) => {
              setLength(event.target.value)
            }}
          />
          <span>{currentLength}</span>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="flexCheckCheckedDisabled"
            defaultChecked
            disabled
          />
          <label
            className="form-check-label"
            htmlFor="flexCheckCheckedDisabled"
          >
            Numbers (always enabled)
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckChecked1"
            onChange={() => {
              currentLower ? setLower(false) : setLower(true)
            }}
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Lowercase
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="flexCheckChecked2"
            onChange={() => {
              currentUpper ? setUpper(false) : setUpper(true)
            }}
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Uppercase
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="flexCheckChecked3"
            onChange={() => {
              currentSymbol ? setSymbol(false) : setSymbol(true)
            }}
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Symbols
          </label>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            let passwordString = numbersValues
            let password = ''
            if (currentLower) {
              passwordString = passwordString + letterLowerCase
            }
            if (currentUpper) {
              passwordString = passwordString + letterUpperCase
            }
            if (currentSymbol) {
              passwordString = passwordString + symbols
            }
            while (password.length < currentLength) {
              password +=
                passwordString[
                  Math.floor(Math.random() * passwordString.length)
                ]
            }
            setPasword(password)
          }}
        >
          Generate
        </button>
      </div>
    </div>
  )
}

export { PasswordGenerator }
