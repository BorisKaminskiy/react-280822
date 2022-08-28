import React, { useState } from 'react'
import '../App.css'

function Tweet() {
  const [curentValue, setValue] = React.useState(0)

  return (
    <div className="tweet-container">
      <h2>Tweet</h2>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label" />

        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          maxLength={150}
          rows="5"
          onChange={(event) => {
            setValue(event.target.value)
          }}
        ></textarea>
      </div>
      <div className="tweet-button-container">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => alert(curentValue)}
        >
          Tweet
        </button>
        <span>{curentValue ? 150 - curentValue.length : 150}</span>
      </div>
    </div>
  )
}

export { Tweet }
