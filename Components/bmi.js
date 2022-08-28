import { useState } from 'react'
import '../App.css'

function BMI() {
  const [currentHeight, setHeight] = useState(175)
  const [currentWeight, setWeight] = useState(75)
  let indexBMI = Number(
    ((currentWeight / currentHeight ** 2) * 10000).toFixed(1)
  )

  return (
    <div className="bmi-container">
      <h2>BMI Calculator</h2>

      <label htmlFor="customRange1" classnmae="form-label">
        Height, cm
      </label>

      <div className="range-container">
        <input
          type="range"
          className="form-range"
          id="customRange1"
          min={120}
          max={250}
          value={currentHeight}
          onChange={(event) => {
            setHeight(event.target.value)
          }}
        />
        <span>{currentHeight}</span>
      </div>

      <label htmlFor="customRange2" classnmae="form-label">
        Weight, kg
      </label>

      <div className="range-container">
        <input
          type="range"
          className="form-range"
          id="customRange2"
          min={30}
          max={250}
          value={currentWeight}
          onChange={(event) => {
            setWeight(event.target.value)
          }}
        />
        <span>{currentWeight}</span>
      </div>
      <div className="bmi-info">
        <span>
          BMI: <b>{indexBMI}</b>
        </span>
        <button
          type="button"
          className={
            indexBMI < 18 || (indexBMI > 25 && indexBMI <= 30)
              ? 'btn btn-warning btn-sm'
              : indexBMI > 18 && indexBMI <= 25
              ? 'btn btn-success btn-sm'
              : indexBMI > 30
              ? 'btn btn-danger btn-sm'
              : ''
          }
        >
          {indexBMI < 18
            ? 'Underweight'
            : indexBMI <= 25
            ? 'Normal weight'
            : indexBMI > 25 && indexBMI < 30
            ? 'Overweight'
            : 'Obse'}
        </button>
      </div>
    </div>
  )
}

export { BMI }
