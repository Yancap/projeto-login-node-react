import React from 'react'

export const Head = (props) => {
    React.useEffect(() => {
        document.title = "PizzaScript | " + props.title
    }, [props])
  return (
    <></>
  )
}
