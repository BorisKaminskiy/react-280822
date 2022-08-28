import React, { useState } from 'react'
import '../App.css'

function buttonsArray(arg) {
  let tempArr = [...new Array(arg).keys()]
  tempArr.splice(0, 1)

  return tempArr
}

function ButtonsPagination() {
  let tempArray = buttonsArray(11)
  const [currentItem, setItem] = React.useState(5)
  const [currentNext, setNext] = React.useState(true)
  const [currentPrevious, setPrevious] = React.useState(true)

  return (
    <div
      className="pagination-group"
      role="group"
      aria-label="Basic outlined example"
    >
      <button
        onClick={() => {
          setItem(currentItem - 1)
          currentItem === 1 ? setPrevious(false) : setPrevious(true)
          setNext(true)
        }}
        className={currentPrevious ? 'btn' : 'display-none'}
        id="button-active"
      >
        Previous
      </button>

      {tempArray.map((item) => {
        let index = tempArray.indexOf(item)
        return (
          <button
            onClick={() => {
              index === 0 ? setPrevious(false) : setPrevious(true)
              index === tempArray.length - 1 ? setNext(false) : setNext(true)
              setItem(index)
            }}
            key={index}
            type="button"
            className={index === currentItem ? 'button-focus' : 'btn'}
          >
            {item}
          </button>
        )
      })}
      <button
        onClick={() => {
          setItem(currentItem + 1)
          currentItem === tempArray.length - 2 ? setNext(false) : setNext(true)
          setPrevious(true)
        }}
        className={currentNext ? 'btn' : 'display-none'}
        id="button-active"
      >
        Next
      </button>
    </div>
  )
}

export { ButtonsPagination }
