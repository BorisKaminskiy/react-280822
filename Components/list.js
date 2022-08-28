import React from 'react'

const listItems = ['First', 'Second', 'Third', 'Fourth', 'Fifth']

function List() {
  const [currentItem, setItem] = React.useState(1)

  return (
    <>
      <div className="list-group">
        {listItems.map((element) => {
          let index = listItems.indexOf(element) + 1

          return (
            <a
              key={index}
              onClick={() => {
                setItem(index)
              }}
              href="#"
              className={
                index === currentItem
                  ? 'list-group-item list-group-item-action active'
                  : 'list-group-item list-group-item-action'
              }
              aria-current="true"
            >
              {element}
            </a>
          )
        })}
      </div>
    </>
  )
}

export { List }
